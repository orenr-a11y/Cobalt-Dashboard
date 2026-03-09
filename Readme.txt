# 🟢 Cobalt — Competitive Intelligence Dashboard

> Internal strategic tool for analyzing the Enterprise Architecture Management (EAM) market and positioning Cobalt against incumbents.

![Status](https://img.shields.io/badge/status-internal_use_only-red)
![Updated](https://img.shields.io/badge/last_updated-March_2026-blue)

---

## Overview

This is an interactive React-based dashboard that consolidates Cobalt's competitive research across the EAM market. It's designed for internal presentations to the founding team, investors, and future GTM leadership — providing a single source of truth on competitors, positioning, and market strategy.

### What's Inside

| Tab | Contents |
|-----|----------|
| **Overview** | Competitor cards with threat/AI/proximity ratings + interactive market positioning map |
| **Products & AI** | Expandable deep-dives on each competitor's products, AI strategy, and gaps Cobalt exploits |
| **Pricing & GTM** | Pricing comparison table, go-to-market approaches, ICP profiles, counter-positioning lines |
| **Geography** | World map visualization of competitor presence, Cobalt's phased geographic strategy |
| **Industries** | Heatmap of competitor industry focus, Cobalt's "banking first" thesis with supporting rationale |
| **Threat Matrix** | Competitors ranked by proximity to Cobalt's differentiation, scenario planning (risks + opportunities) |
| **Our Position** | Full positioning recommendation: market map, messaging pillars, counter-positioning cheat sheet, key takeaways |

### Competitors Covered

| Competitor | Threat Level | Why They Matter |
|---|---|---|
| **SAP LeanIX** | ★★★★★ | The incumbent. Market leader. SAP distribution + Signavio process mining |
| **Ardoq** | ★★★★☆ | Modern challenger. Most likely to move toward runtime discovery |
| **BiZZdesign** | ★★☆☆☆ | Standards purist (ArchiMate/TOGAF). Manual-first, won't pivot |
| **ServiceNow** | ★★★★☆ | Infrastructure discovery giant. Existential risk if they acquire up-stack |
| **Orbus Software** | ★☆☆☆☆ | Niche Microsoft play. Not a threat in banking |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone git@github.com:cobalt-internal/competitive-intelligence.git
cd competitive-intelligence
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

Static output in `dist/` — can be deployed to any internal hosting (Vercel, Netlify, S3, etc.).

---

## Project Structure

```
competitive-intelligence/
├── src/
│   └── App.jsx            # Main dashboard component (single-file React app)
├── public/
├── package.json
├── vite.config.js
└── README.md
```

The dashboard is intentionally built as a single React component for portability. It can be dropped into any React project, embedded in Notion via iframe, or run standalone.

### Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `react-dom` | DOM rendering |

No external UI libraries. All components (cards, tables, maps, heatmaps) are built from scratch with inline styles for zero-dependency portability.

---

## Data Sources & Methodology

### Competitive Intelligence

| Data Point | Sources | Confidence |
|---|---|---|
| Revenue estimates | G2 reviews, Gartner Peer Insights, analyst reports, competitive intelligence | Medium — no vendor publishes pricing |
| Employee counts | LinkedIn, press releases, Glassdoor | Medium-High |
| Pricing | G2 reviews, prospect conversations, competitive analysis | Medium — enterprise pricing is opaque |
| AI/product capabilities | Product documentation, release notes, G2 reviews, demos | High |
| Geographic presence | Customer logos, case studies, job postings, conference presence | High |
| Industry focus | Customer logos, marketing materials, analyst reports | High |

### Market Sizing (TAM)

- Global EAM market: **~$1.5B** (2025), growing to **~$3B** by 2030 at 12–16% CAGR
- Financial services EAM TAM: **~$500–690M** globally
- Cobalt Year 1 SAM (US + UK + Israel, FinServ): **~$47–79M**
- Sources: Gartner, Forrester, internal analysis, IT spending benchmarks

### Freshness

> ⚠️ Data is current as of **March 2026**. Revenue estimates, headcounts, and event calendars should be refreshed quarterly. AI/product capabilities should be refreshed after major vendor announcements.

---

## Key Strategic Findings

### 1. The Empty Quadrant

Every EAM competitor lives in the **manual data + business process** quadrant (LeanIX, Ardoq, BiZZdesign, Orbus) or the **automated discovery + infrastructure** quadrant (ServiceNow). **Nobody occupies automated discovery + business process** — that's Cobalt.

### 2. Competitor AI Is Mostly Superficial

All competitors have added "AI features" (chatbots, NLP queries, auto-classification). None use AI for fundamental architecture discovery. They're adding AI on top of stale manual data — fast wrong answers.

### 3. Banking Is the Right Beachhead

- Highest vendor heterogeneity (50+ vendor platforms per bank)
- Strongest regulatory tailwind (DORA, FCA operational resilience)
- Deepest IT budgets (7–10% of revenue)
- Weakest incumbent lock-in (no EAM vendor owns global banking)

### 4. Watch List

1. **Ardoq** — Most likely to attempt runtime discovery (2–3 yr risk)
2. **ServiceNow** — If they acquire up-stack into business processes, it's existential
3. **LeanIX + Signavio** — Process mining is real but bounded to SAP ecosystem

---

## Usage Guidelines

### For Investor Presentations

Use the **Overview** tab (market map) and **Our Position** tab (positioning + key takeaways). The market map visual is the single most effective slide for showing Cobalt's differentiation.

### For Sales Enablement

Use the **Pricing & GTM** tab for counter-positioning cheat sheet. Each competitor has a one-liner ready for competitive deals.

### For Product Strategy

Use the **Products & AI** tab to understand exactly what each competitor ships and where their gaps are. The "Cobalt's Gap to Exploit" callouts are product-level insights.

### For Board / Team Presentations

Walk through tabs left-to-right. The dashboard is designed to tell a narrative: here's the market → here's what they do → here's how they price and sell → here's where they are geographically → here's where they're strong by industry → here's who's closest to us → here's how we win.

---

## Updating This Dashboard

### Adding a Competitor

Add a new object to the `competitors` array in `App.jsx`. Required fields:

```javascript
{
  id: "vendor_id",
  name: "Vendor Name",
  tagline: "One-line descriptor",
  logo: "🔵",           // Emoji marker
  color: "#HEX",        // Brand color
  founded: 2020,
  hq: "City, Country",
  employees: "100–200",
  revenue: "$XM ARR",
  financing: "...",
  ownership: "...",
  threatLevel: 3,        // 1–5 (competitive risk to Cobalt)
  aiMaturity: 2,         // 1–5 (how advanced their AI/automation is)
  closestToCobalt: 2,    // 1–5 (proximity to runtime discovery)
  products: [...],
  geo: { primary: ["US","GB"], secondary: ["DE"], weak: ["JP"] },
  industries: { "Financial Services": 4, "Manufacturing": 2, ... },
  // ... all other fields (see existing entries for template)
}
```

### Updating Ratings

Threat level, AI maturity, and proximity ratings should be reviewed quarterly. Criteria:

- **Threat Level**: How likely is this vendor to win a deal against Cobalt? (1 = never compete, 5 = in every deal)
- **AI Maturity**: How advanced is their AI/automation for reducing manual data entry? (1 = chatbot only, 5 = real automated discovery)
- **Proximity to Cobalt**: How close to offering runtime, automated, business-process-level discovery? (1 = entirely manual, 5 = near-equivalent)

---

## Contributing

This is an internal tool maintained by the founding team. To suggest updates:

1. Open a PR with data changes and source citations
2. Tag `@oren` for review
3. Include the source/evidence for any factual claims (pricing, capabilities, etc.)

---

## License

**CONFIDENTIAL — Internal Use Only**

This repository contains proprietary competitive intelligence. Do not share externally, with prospects, or in any public forum. Counter-positioning language is for internal sales enablement only — never share verbatim with customers.

---

<p align="center"><em>Built by the Cobalt founding team · March 2026</em></p>
