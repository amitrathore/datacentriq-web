"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Logo } from "@/components/logo";

const STORAGE_KEY = "datacentriq-intro-seen";
const VIDEO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/datacentriq-demo.mp4`;
const INTRO_CHANGE_EVENT = "datacentriq-intro-change";

function subscribeToIntro(callback: () => void) {
  window.addEventListener(INTRO_CHANGE_EVENT, callback);
  return () => window.removeEventListener(INTRO_CHANGE_EVENT, callback);
}

function getIntroState() {
  return document.documentElement.dataset.siteIntro === "show";
}

function setIntroState(show: boolean) {
  document.documentElement.dataset.siteIntro = show ? "show" : "hide";
  window.dispatchEvent(new Event(INTRO_CHANGE_EVENT));
}

export function HomeIntro() {
  const active = useSyncExternalStore(subscribeToIntro, getIntroState, () => false);
  const [closing, setClosing] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const enterRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const closingRef = useRef(false);

  const enterSite = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // The visitor can still enter when browser storage is unavailable.
    }

    videoRef.current?.pause();
    setClosing(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntroState(false);
      return;
    }
    closeTimerRef.current = window.setTimeout(() => {
      setIntroState(false);
    }, 250);
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Keep the introduction usable when browser storage is unavailable.
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const show = !seen && !reducedMotion.matches;
    setIntroState(show);

    const onMotionChange = (event: MediaQueryListEvent) => {
      if (show && event.matches) enterSite();
    };
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      reducedMotion.removeEventListener("change", onMotionChange);
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [enterSite]);

  useEffect(() => {
    if (!active) {
      if (closingRef.current) {
        document.querySelector<HTMLElement>("main h1")?.focus({ preventScroll: true });
      }
      return;
    }

    const background = document.querySelectorAll<HTMLElement>(
      "body > header, body > footer, body > main > :not(#site-intro)",
    );
    const previousOverflow = document.body.style.overflow;
    background.forEach((element) => {
      element.inert = true;
    });
    document.body.style.overflow = "hidden";
    enterRef.current?.focus();

    return () => {
      background.forEach((element) => {
        element.inert = false;
      });
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <div
      id="site-intro"
      data-theme="dark"
      role="dialog"
      aria-modal="true"
      aria-label="DatacentrIQ introduction video"
      className={`fixed inset-0 z-[100] items-center justify-center bg-[#0c1520] text-white transition-opacity duration-[250ms] ${closing ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="absolute inset-x-[5%] bottom-[5%] top-[max(5%,3.5rem)] overflow-hidden border border-white/25 bg-black shadow-[0_0_0_1px_rgba(143,184,220,0.08)]">
        {active && !failed && (
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src={VIDEO_SRC}
            autoPlay
            muted
            playsInline
            controls
            preload="auto"
            aria-label="DatacentrIQ film"
            onLoadedData={() => setReady(true)}
            onPlaying={() => setReady(true)}
            onEnded={enterSite}
            onError={() => {
              setReady(false);
              setFailed(true);
            }}
          />
        )}

        {!ready && (
          <div
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5"
            aria-live="polite"
          >
            {failed ? (
              <p className="text-sm text-white/70">Video unavailable</p>
            ) : (
              <>
                <Logo href="" className="text-white" />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
                  Loading film
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <div className="absolute inset-x-[5%] top-0 flex h-[max(5%,3.5rem)] items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b4cfe8]">
        <div className="flex min-w-0 items-center gap-5">
          <span className="shrink-0 whitespace-nowrap">DatacentrIQ</span>
          <span className="hidden truncate border-l border-white/25 pl-5 lg:inline">
            For the people who run the business
          </span>
        </div>
        <button
          ref={enterRef}
          type="button"
          onClick={enterSite}
          className="focus-ring inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md border border-white/40 bg-white/5 px-4 text-[11px] font-medium text-white transition-colors hover:border-white/70 hover:bg-white/10"
        >
          Enter site <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div className="pointer-events-none absolute inset-x-[5%] bottom-0 flex h-[5%] items-center justify-between gap-4 overflow-hidden font-mono text-[9px] uppercase tracking-[0.16em] text-[#b4cfe8] sm:text-[10px]">
        <span className="whitespace-nowrap">Data → decisions → outcomes</span>
        <span className="hidden whitespace-nowrap sm:inline">Enterprise decision intelligence</span>
      </div>
    </div>
  );
}
