export type Tower = {
  name: string;
  purpose: string;
  kpis?: string[];
  signals?: string[];
  decisions?: string[];
  causal?: string[];
  scenarios?: string[];
};

export type VerticalContent = {
  slug: string;
  name: string;
  domain: string;
  headline: string;
  tagline: string;
  hero: string;
  fitsBecause: string;
  struggles: string[];
  entities: string[];
  towers: Tower[];
  pitch: string;
  outcome: { label: string; value: string; tone?: "good" | "ink" }[];
};

export const VERTICAL_CONTENT: VerticalContent[] = [
  {
    slug: "nbfc-collections",
    name: "NBFC / Collections",
    domain: "Lending · BFSI",
    headline: "From MIS packs to a Collections Control Tower.",
    tagline:
      "Prioritize customers, optimize field actions, and learn which interventions actually drove recovery.",
    hero: "NBFCs operate with high operational complexity across customers, loans, branches, field officers, risk segments, and regulatory constraints. DatacentrIQ converts that into decision intelligence — across collections, risk, field ops, and customer management.",
    fitsBecause:
      "Delinquency management, collection prioritization, field officer productivity, customer 360 visibility, early warning signals — all decision domains where a static MIS pack falls short.",
    struggles: [
      "Delinquency management",
      "Collection prioritization",
      "Field officer productivity",
      "Customer 360 visibility",
      "Early warning signals",
      "Branch performance",
      "Repayment behavior analysis",
      "Fraud and risk monitoring",
      "Portfolio quality",
      "Human-heavy operations",
    ],
    entities: [
      "Customer",
      "Loan Account",
      "Repayment",
      "DPD Bucket",
      "Collection Visit",
      "Field Officer",
      "Branch",
      "Promise to Pay",
      "Risk Segment",
      "Settlement Offer",
      "Outcome",
    ],
    towers: [
      {
        name: "Collections Recovery Tower",
        purpose:
          "Improve overdue loan recovery by prioritizing customers, optimizing field actions, and tracking recovery outcomes.",
        kpis: [
          "Collection amount",
          "Collection rate",
          "Roll-forward rate",
          "Roll-back rate",
          "Promise-to-pay conversion",
          "Promise-to-pay kept rate",
          "Cost per recovered rupee",
          "Visit completion rate",
          "Visit-to-recovery conversion",
        ],
        signals: [
          "High-risk roll-forward",
          "Promise-to-pay broken",
          "Visit completion gap",
          "High-value overdue cluster",
          "Branch recovery deterioration",
          "Agent productivity drop",
        ],
        decisions: [
          "Prioritize customer for visit",
          "Assign field officer",
          "Escalate to branch manager",
          "Offer settlement",
          "Change contact strategy",
          "Trigger legal workflow",
        ],
        causal: [
          "Do field visits improve collection, or only for certain segments?",
          "Does visit quality matter more than visit frequency?",
          "Which customers would have paid anyway without intervention?",
          "Which agents create incremental recovery?",
        ],
      },
      {
        name: "Customer 360 Tower",
        purpose:
          "Unified customer intelligence layer across credit, collections, service, cross-sell, and risk.",
        decisions: [
          "Which customer should be contacted?",
          "What is the right next action?",
          "Is settlement appropriate?",
          "Is the customer eligible for another product?",
          "Is the customer showing early distress?",
        ],
      },
      {
        name: "Early Warning Risk Tower",
        purpose:
          "Detect customers, branches, or segments that may deteriorate before delinquency becomes severe.",
        signals: [
          "Missed repayment pattern",
          "Partial payment decline",
          "Contactability drop",
          "Branch-level DPD movement",
          "Income seasonality risk",
          "Field visit failure",
          "Repeated broken promises",
        ],
        decisions: [
          "Pre-collection intervention",
          "Reminder strategy",
          "Branch escalation",
          "Customer assistance workflow",
          "Risk segment review",
        ],
      },
      {
        name: "Field Officer Productivity Tower",
        purpose:
          "Improve field team productivity and recovery effectiveness.",
        kpis: [
          "Visits completed",
          "Visit quality",
          "Recovery per visit",
          "Promise-to-pay conversion",
          "Route efficiency",
          "Agent capacity utilization",
          "Cost per recovered rupee",
        ],
        causal: [
          "Does more visit count improve recovery?",
          "Does agent quality explain recovery better than visit frequency?",
          "Which borrower segments respond to field visits?",
          "Where is agent capacity causing recovery loss?",
        ],
      },
      {
        name: "Branch Performance Tower",
        purpose:
          "Monitor and improve branch-level business outcomes — recovery, disbursement quality, risk concentration, field ops.",
      },
    ],
    pitch:
      "Move from static MIS and collection dashboards to an operational Collections Control Tower. DatacentrIQ connects customers, loans, repayments, field visits, branches, agents, risk segments, and outcomes into a governed ontology — identifying who needs attention, why, what to do, and whether the action worked.",
    outcome: [
      { label: "Recovered", value: "₹4.62Cr", tone: "good" },
      { label: "Roll-back", value: "+1.2 pp", tone: "good" },
      { label: "Visits/rep", value: "+18%", tone: "ink" },
    ],
  },
  {
    slug: "retail",
    name: "Retail & Commerce",
    domain: "Retail · Commerce · Supply",
    headline: "Recover the revenue you didn't know was leaking.",
    tagline:
      "Stockouts, supplier delays, misallocation, promotion margin loss — explained, simulated, and acted on.",
    hero: "Retail decisions happen at the intersection of stores, inventory, suppliers, promotions, pricing, and demand. DatacentrIQ converts that operational complexity into Control Towers that recover real revenue.",
    fitsBecause:
      "Most stockouts are explainable, most promotion margin loss is preventable, and most supplier deterioration is detectable — if the data, ontology, and causal reasoning are connected.",
    struggles: [
      "Stockouts",
      "Revenue leakage",
      "Promotion margin loss",
      "Supplier delays",
      "Inventory misallocation",
      "Markdown risk",
      "Store productivity",
      "Demand volatility",
      "Channel performance",
    ],
    entities: [
      "Region",
      "Store",
      "SKU",
      "Inventory",
      "Sales",
      "Supplier",
      "Promotion",
      "Category",
      "Decision",
      "Outcome",
    ],
    towers: [
      {
        name: "Revenue Recovery Tower",
        purpose:
          "Recover lost revenue caused by stockouts, supplier delays, and inventory allocation gaps.",
        kpis: [
          "Lost sales estimate",
          "Stockout rate",
          "Revenue at risk",
          "Recovered revenue",
          "Inventory cover",
          "SKU-store velocity",
          "Supplier fill rate",
        ],
        signals: [
          "Stockout spike",
          "Inventory cover below threshold",
          "Supplier fill-rate deterioration",
          "Demand spike",
          "Revenue at risk acceleration",
        ],
        decisions: [
          "Reallocate inventory",
          "Escalate supplier",
          "Accelerate replenishment",
          "Pause promotion",
          "Substitute SKU",
        ],
        scenarios: [
          "Move inventory from low-velocity stores to high-demand stores",
          "Pause promotion in stores with cover below 3 days",
          "Escalate supplier replenishment for critical SKUs",
        ],
      },
      {
        name: "Promotion Margin Tower",
        purpose:
          "Protect gross margin while improving promotion effectiveness.",
        kpis: [
          "Promotion lift",
          "Gross margin",
          "Discount leakage",
          "Incremental revenue",
          "Markdown risk",
          "Inventory cover during promotion",
        ],
        decisions: [
          "Pause promotion",
          "Localize promotion",
          "Change discount depth",
          "Boost campaign",
          "Shift budget",
        ],
      },
      {
        name: "Supplier Reliability Tower",
        purpose:
          "Detect supplier risk and prevent stockout-driven loss.",
        kpis: [
          "Fill rate",
          "On-time delivery",
          "Replenishment delay",
          "SKU criticality",
          "Supplier risk score",
          "Lost sales due to supplier delay",
        ],
        decisions: [
          "Escalate supplier",
          "Switch allocation",
          "Increase safety stock",
          "Trigger alternate supplier",
        ],
      },
      {
        name: "Store Productivity Tower",
        purpose:
          "Improve store-level conversion, staffing, execution quality, and basket size.",
        kpis: [
          "Sales per store",
          "Conversion rate",
          "Basket size",
          "Footfall",
          "Staff productivity",
          "Shelf availability",
          "Store execution score",
        ],
      },
    ],
    pitch:
      "Operate retail through Control Towers that identify revenue leakage, supplier risk, promotion margin loss, and store productivity gaps. DatacentrIQ explains what changed, identifies likely drivers, simulates inventory reallocation or promotion pause, recommends decisions, tracks execution, and measures recovered revenue.",
    outcome: [
      { label: "Impact", value: "₹74L", tone: "ink" },
      { label: "Confidence", value: "82%", tone: "good" },
      { label: "Stores", value: "12", tone: "ink" },
    ],
  },
  {
    slug: "influencer-growth",
    name: "Influencer & Creator Growth",
    domain: "Creator-led commerce",
    headline: "Move beyond likes, views, and last-click attribution.",
    tagline:
      "Estimate true incremental influence, detect saturation, and reallocate budget toward LTV-creating creators.",
    hero: "Influencer-led businesses over-index on vanity metrics. The real questions — which creator caused incremental revenue, where spend has saturated, which audiences acquire customers with better LTV — require causal intelligence, not last-click dashboards.",
    fitsBecause:
      "Engagement, view, and last-click revenue under-represent what really matters: incremental influence, audience overlap inflation, LTV/CAC by creator and platform.",
    struggles: [
      "Vanity metrics dominate",
      "Last-click revenue inflates attribution",
      "Spend saturation goes undetected",
      "Audience overlap inflates KPIs",
      "Creator quality unclear",
      "LTV of acquired customers unknown",
      "Cannibalized organic demand",
    ],
    entities: [
      "Influencer",
      "Platform",
      "Content",
      "Campaign",
      "Audience Segment",
      "Ad Spend",
      "UTM Link",
      "Coupon Code",
      "Session",
      "Customer",
      "Order",
      "Revenue",
      "Margin",
      "Repeat Purchase",
    ],
    towers: [
      {
        name: "Influencer Growth Control Tower",
        purpose:
          "Measure true influencer-driven business impact and optimize marketing spend allocation.",
        kpis: [
          "Reach",
          "Engagement quality",
          "Click-through rate",
          "Conversion rate",
          "Tracked revenue",
          "Incremental revenue",
          "CAC",
          "ROAS",
          "Contribution margin",
          "Repeat purchase rate",
          "LTV/CAC",
          "Attribution confidence",
        ],
        signals: [
          "High engagement but low conversion",
          "High last-click revenue but low incrementality",
          "Spend saturation",
          "Audience overlap inflation",
          "Content fatigue",
          "Paid boost inefficiency",
          "Low-LTV acquisition",
        ],
        causal: [
          "Did the influencer cause incremental revenue?",
          "Was performance caused by creator influence or paid boosting?",
          "Did discount depth drive conversion instead of creator credibility?",
          "Is the campaign cannibalizing organic demand?",
          "Which content format causes better conversion?",
          "Where does spend saturate?",
        ],
        decisions: [
          "Increase spend on Creator A",
          "Pause Creator B",
          "Boost this organic post",
          "Move budget from Instagram to YouTube",
          "Renegotiate to performance-based pricing",
          "Stop campaign after CAC threshold breach",
          "Shift spend to creators acquiring high-LTV customers",
        ],
      },
      {
        name: "Creator Quality Tower",
        purpose: "Assess creator quality beyond vanity metrics.",
      },
      {
        name: "Platform Mix Tower",
        purpose:
          "Optimize budget allocation across Instagram, YouTube, TikTok, LinkedIn, affiliates, and paid boosts.",
      },
      {
        name: "Campaign Incrementality Tower",
        purpose:
          "Separate tracked attribution from actual incremental business impact.",
      },
      {
        name: "Creative Intelligence Tower",
        purpose:
          "Identify which content formats, hooks, offers, and narratives drive conversion.",
      },
    ],
    pitch:
      "Move beyond likes, views, and last-click attribution. An Influencer Growth Control Tower connects creators, platforms, content, campaigns, spend, traffic, conversions, revenue, margin, and customer quality — estimating true influence, detecting attribution inflation, identifying saturation, and recommending budget reallocation.",
    outcome: [
      { label: "Incremental", value: "+22%", tone: "good" },
      { label: "Saturated", value: "3 creators", tone: "ink" },
      { label: "LTV lift", value: "+₹1,840", tone: "good" },
    ],
  },
  {
    slug: "winery",
    name: "Winery & Distributor",
    domain: "Beverage · Distribution · DTC",
    headline: "Channel-, vintage-, and club-level decision intelligence.",
    tagline:
      "Distributor performance, tasting-room conversion, wine club retention, and inventory allocation in one operating layer.",
    hero: "Wineries operate across distributors, tasting rooms, wine clubs, channels, customers, and vintages — with margin that shifts with allocation, pricing, and aging. DatacentrIQ creates Control Towers that connect those decisions.",
    fitsBecause:
      "Channel mix, distributor reliability, tasting-room conversion, wine club retention, and vintage-level margin are decision domains too entangled for siloed dashboards.",
    struggles: [
      "Distributor performance",
      "Inventory allocation",
      "Channel profitability",
      "Tasting room conversion",
      "Wine club retention",
      "Vintage-level margin",
      "Demand forecasting",
      "Promotion effectiveness",
    ],
    entities: [
      "Distributor",
      "Account",
      "Wine",
      "Vintage",
      "Order",
      "Region",
      "Sales Rep",
      "Inventory",
      "Promotion",
      "Revenue",
      "Margin",
      "Wine Club Member",
    ],
    towers: [
      {
        name: "Distributor Performance Tower",
        purpose:
          "Track and improve distributor sales performance, account coverage, and channel execution.",
        kpis: [
          "Distributor sales",
          "Account activation",
          "Order frequency",
          "Case volume",
          "Revenue per distributor",
          "Margin by distributor",
          "Sell-through rate",
          "Inventory aging",
        ],
        decisions: [
          "Increase allocation",
          "Reduce allocation",
          "Escalate distributor",
          "Launch targeted promotion",
          "Shift inventory to better-performing distributor",
        ],
      },
      {
        name: "Tasting Room Conversion Tower",
        purpose: "Improve tasting room revenue and wine club conversion.",
        kpis: [
          "Visitor count",
          "Tasting-to-purchase conversion",
          "Average order value",
          "Wine club signups",
          "Repeat purchase rate",
          "Customer lifetime value",
        ],
      },
      {
        name: "Wine Club Retention Tower",
        purpose:
          "Reduce churn and increase member lifetime value.",
        signals: [
          "Skipped shipment",
          "Lower engagement",
          "Declining order frequency",
          "Support complaint",
          "Low event participation",
        ],
        decisions: [
          "Retention offer",
          "Personalized outreach",
          "Shipment adjustment",
          "Event invitation",
          "VIP campaign",
        ],
      },
      {
        name: "Inventory Allocation Tower",
        purpose:
          "Optimize wine allocation across distributors, tasting room, direct-to-consumer, and wine club.",
        causal: [
          "Which channel creates the highest margin for each vintage?",
          "Where does allocation produce incremental revenue?",
          "When does inventory aging create markdown risk?",
        ],
      },
    ],
    pitch:
      "Operate through Control Towers for distributor performance, inventory allocation, tasting room conversion, wine club retention, and vintage margin. DatacentrIQ connects inventory, sales, distributors, customers, campaigns, and outcomes — recommending better allocation, pricing, promotion, and retention decisions.",
    outcome: [
      { label: "Club retention", value: "+9.4%", tone: "good" },
      { label: "DTC margin", value: "+₹38/btl", tone: "good" },
      { label: "Aging risk", value: "−21%", tone: "good" },
    ],
  },
  {
    slug: "sales-productivity",
    name: "Sales Productivity",
    domain: "Enterprise B2B sales",
    headline: "Move the bottom of the bell curve, not the leaderboard.",
    tagline:
      "Explain why 30 reps do 0.5 sales/day and 70 do 2 — and recommend the coaching, leads, and territory moves that close the gap.",
    hero: "Sales orgs know who's underperforming. They struggle to know why, and what action will improve it. A Sales Productivity Control Tower converts activity, lead, manager, and territory data into governed coaching and allocation decisions.",
    fitsBecause:
      "Behavior, lead quality, manager coaching, territory imbalance, and pipeline velocity interact in ways that resist single-metric leaderboards. The decision is causal.",
    struggles: [
      "Low conversion despite high activity",
      "Low activity volume",
      "Poor lead quality",
      "Follow-up delay",
      "Pipeline stagnation",
      "Manager coaching gap",
      "Territory imbalance",
    ],
    entities: [
      "Sales Rep",
      "Lead",
      "Account",
      "Activity",
      "Call",
      "Meeting",
      "Pipeline",
      "Opportunity",
      "Manager",
      "Territory",
      "Product",
      "Conversion",
      "Revenue",
      "Outcome",
    ],
    towers: [
      {
        name: "Sales Productivity Tower",
        purpose:
          "Move underperforming reps toward best-quartile productivity through causal coaching, lead allocation, and territory decisions.",
        kpis: [
          "Sales per rep per day",
          "Lead-to-sale conversion",
          "Activity-to-meeting conversion",
          "Meeting-to-sale conversion",
          "Pipeline velocity",
          "Lead quality",
          "Follow-up SLA",
          "Revenue per rep",
          "Win rate",
        ],
        causal: [
          "Are low-performing reps getting poor-quality leads?",
          "Does call volume improve sales, or does call quality matter more?",
          "Are managers affecting rep productivity?",
          "Is territory quality causing performance gaps?",
          "Which behaviors distinguish 2-sales-per-day reps?",
        ],
        decisions: [
          "Reassign leads",
          "Create coaching plan",
          "Change territory allocation",
          "Adjust incentive",
          "Escalate manager intervention",
          "Provide script improvement",
          "Prioritize high-probability leads",
        ],
      },
    ],
    pitch:
      "Move beyond leaderboard dashboards. A Sales Productivity Tower explains why some reps perform better, identifies controllable drivers, recommends coaching or lead allocation changes, tracks execution, and measures whether performance improved.",
    outcome: [
      { label: "Bottom-quartile lift", value: "+0.7/day", tone: "good" },
      { label: "Win-rate", value: "+4.1 pp", tone: "good" },
      { label: "Coaching plans", value: "32", tone: "ink" },
    ],
  },
];

export function getVertical(slug: string): VerticalContent | undefined {
  return VERTICAL_CONTENT.find((v) => v.slug === slug);
}

export const VERTICAL_SLUGS = VERTICAL_CONTENT.map((v) => v.slug);
