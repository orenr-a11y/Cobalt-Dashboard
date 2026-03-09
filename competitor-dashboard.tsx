import { useState } from "react";

const competitors = [
  {
    id: "leanix",
    name: "SAP LeanIX",
    tagline: "The Incumbent",
    logo: "🟦",
    color: "#0070D2",
    founded: 2012,
    hq: "Bonn, Germany",
    employees: "600–800",
    revenue: "$120–150M+ ARR",
    financing: "Acquired by SAP for ~$1.5B (Sept 2023). Previously ~$120M+ raised",
    ownership: "SAP (public)",
    threatLevel: 5,
    aiMaturity: 3,
    closestToCobalt: 3,
    products: [
      { name: "Application Portfolio Mgmt", desc: "Core app catalog — database of all applications with metadata, ownership, lifecycle, dependencies." },
      { name: "SaaS Management Platform", desc: "Discovers SaaS subscriptions — shadow IT, license optimization, renewal tracking." },
      { name: "Value Stream Management", desc: "Maps technology to business value streams." },
      { name: "Cloud Intelligence", desc: "AWS/Azure/GCP resource usage alongside the app catalog." },
    ],
    whatSetsApart: "Market leader by revenue and mindshare. SAP's global sales force. Integrated with SAP Signavio (process mining) and SAP BTP. The default for risk-averse buyers.",
    similarities: "Manually-maintained application catalog. Data quality depends on humans entering and updating. Dependency maps decay within weeks.",
    aiStrategy: "AI chat/NLP on existing catalog. AI-assisted catalog enrichment. Automated survey analysis. The big move: SAP Signavio process mining — analyzes transactional logs from SAP-ecosystem systems to reconstruct process flows. Closest any competitor gets to runtime-informed architecture, but only for SAP-connected systems.",
    aiGap: "Signavio only covers systems with SAP-compatible event logs — ~10–15% of a bank's landscape. Non-SAP systems, vendor platforms, mainframes remain invisible.",
    pricing: "Per-user + per-module. Full user ~$2–4K/yr, viewer ~$500–800/yr. Entry ~$24–30K. Enterprise $100–300K+. Post-SAP: 15–25% price hikes.",
    pricingModel: "Per-user + module",
    geo: {
      primary: ["DE","AT","CH","NO","SE","DK","FI","NL","BE"],
      secondary: ["US","GB","FR"],
      weak: ["AU","JP","SG","BR"]
    },
    geoNote: "DACH fortress. SAP acquisition = global distribution.",
    industries: { "Manufacturing": 5, "Automotive": 5, "Retail": 4, "Pharma": 4, "Financial Services": 3, "Technology": 3, "Energy": 2, "Public Sector": 2, "Healthcare": 1, "Telecom": 3 },
    industryNote: "Follows SAP's customer base. Manufacturing/automotive are core.",
    icp: "5K–100K+ employees. CIO, Head of EA. Top-down (CIO mandates tool). 6–12 month cycle. Sweet spot: large European manufacturer or bank in digital transformation with SAP footprint.",
    gtm: "Enterprise field sales via SAP distribution. Gartner MQ leader. Weekly webinars, quarterly 'EA Connect Days.' Bundled with SAP deals. Consulting partners recommend during SAP transformations.",
    counterPosition: "\"LeanIX gives you a manually-maintained catalog that decays within weeks. Post-SAP, they're raising prices 15–25% while narrowing focus to SAP use cases. If your stack isn't SAP, you're paying more for less relevance.\"",
    recentMoves: "Integrating with SAP Signavio/BTP. Raising renewal prices. Shifting to 'SAP transformation platform.' AI catalog enrichment.",
    events: "Gartner IT Symposium, Gartner EA Summit, SAP Sapphire, EA Connect Days (own)"
  },
  {
    id: "ardoq",
    name: "Ardoq",
    tagline: "The Modern Challenger",
    logo: "🟩",
    color: "#00B67A",
    founded: 2013,
    hq: "Oslo, Norway",
    employees: "250–350",
    revenue: "$30–50M ARR",
    financing: "~$100M+ raised (EQT Growth, Everly, Construct Capital)",
    ownership: "Private (VC-backed)",
    threatLevel: 4,
    aiMaturity: 3,
    closestToCobalt: 4,
    products: [
      { name: "Ardoq Platform", desc: "Unified graph-based architecture platform — discover, model, analyze, govern." },
      { name: "Integration Hub", desc: "20+ pre-built integrations: Jira, GitHub, Terraform, AWS/Azure/GCP, ServiceNow, Okta." },
      { name: "Broadcast Surveys", desc: "Automated surveys to app owners. AI analyzes free-text responses." },
      { name: "Scenario Modeling", desc: "Compare transformation paths side-by-side." },
    ],
    whatSetsApart: "Best UX. Most engineering tool integrations. API-first. Graph-based data model. Most aggressive on automated data ingestion.",
    similarities: "Still a catalog — integrations pull metadata, not runtime behavior. Business processes manually defined.",
    aiStrategy: "AI data quality (flags graph inconsistencies). Automated survey analysis via NLP. Graph analytics & pattern detection. AI copilot for NL queries. 20+ integrations pulling live API data — most in the category.",
    aiGap: "Integrations only reach tools with APIs. Mainframes, vendor-hosted platforms, internal systems often have no API. Covers ~40–60% of a bank's landscape. Pulls metadata, not runtime behavior.",
    pricing: "Per-user. Contributor ~$1.5–3K/yr. Entry ~$15–25K. Enterprise $75–150K+. 20–40% below LeanIX.",
    pricingModel: "Per-user (inclusive)",
    geo: {
      primary: ["NO","SE","DK","FI","GB"],
      secondary: ["US","NL","BE","DE","AT"],
      weak: ["FR","ES","IT","AU","JP","BR"]
    },
    geoNote: "Nordic → UK → US East Coast expansion. Several large UK banking logos.",
    industries: { "Financial Services": 4, "Insurance": 3, "Technology": 3, "Telecom": 2, "Energy": 1, "Public Sector": 1, "Manufacturing": 1, "Healthcare": 1, "Retail": 1 },
    industryNote: "Intentionally targeted FS early — 'data-driven EA' resonates with engineering-heavy banking IT.",
    icp: "2K–50K employees. CTO, VP Engineering. Bottom-up (architects pilot, then expand). 3–9 month cycle. Sweet spot: mid-large Nordic/UK bank with strong engineering culture.",
    gtm: "Product-led growth + content marketing. Developer community building. Webinars, podcast. Growing US sales team. Less consulting-partner-dependent than LeanIX.",
    counterPosition: "\"Ardoq pulls metadata from tool APIs — what Jira says, what your cloud console lists. We observe actual production behavior — including the vendor black boxes and mainframes Ardoq can't reach.\"",
    recentMoves: "Expanding integration library. 'Continuous architecture' messaging. Growing US team. Most likely to attempt runtime discovery.",
    events: "Gartner EA Summit, EA Conference Europe (London), own webinars, Nordic tech events"
  },
  {
    id: "bizzdesign",
    name: "BiZZdesign",
    tagline: "The Standards Purist",
    logo: "🟧",
    color: "#E67E22",
    founded: 2000,
    hq: "Enschede, Netherlands",
    employees: "250–350",
    revenue: "$30–50M ARR",
    financing: "Main Capital Partners (Dutch PE) majority ~2019",
    ownership: "Private (PE-backed)",
    threatLevel: 2,
    aiMaturity: 1,
    closestToCobalt: 1,
    products: [
      { name: "Enterprise Studio", desc: "Desktop modeler — formal ArchiMate models. Think AutoCAD for enterprise architecture." },
      { name: "HoriZZon", desc: "Cloud platform — web access to models, collaboration, dashboards." },
    ],
    whatSetsApart: "Strongest ArchiMate/TOGAF compliance. Deepest modeling. Academic roots. Gold standard for governance-heavy orgs.",
    similarities: "Same core use cases but via formal modeling. Entirely manual data. Same staleness problem.",
    aiStrategy: "AI model generation from text descriptions. AI pattern detection. NL querying. Conservative: AI as 'architect accelerator,' not replacement. Customer base values manual governance.",
    aiGap: "AI-generated models are still interpretations, not observations. Won't pivot to automated discovery — would alienate governance-focused customers.",
    pricing: "Desktop + cloud hybrid. Modeler ~$3–6K/user/yr. Entry ~$50K+. Enterprise $150–400K+. Highest-priced dedicated EA tool.",
    pricingModel: "Per-user (hybrid)",
    geo: {
      primary: ["NL","DE","AT","CH","NO","SE"],
      secondary: ["GB","US","AU","NZ"],
      weak: ["FR","ES","IT","JP","BR"]
    },
    geoNote: "Follows ArchiMate adoption. Strongest where TOGAF is institutionalized (Northern Europe).",
    industries: { "Public Sector": 5, "Financial Services": 3, "Insurance": 3, "Defense": 3, "Healthcare": 2, "Telecom": 2, "Energy": 2, "Manufacturing": 1, "Retail": 1 },
    industryNote: "ArchiMate mandates drive adoption — government, regulated FS, defense.",
    icp: "5K–50K+ employees. Chief Architect, EA Practice Lead. TOGAF/ArchiMate mandates. 6–12+ month cycle. Sweet spot: European govt agency or regulated bank with 5–20 architects.",
    gtm: "Standards community (ArchiMate/Open Group sponsor). Academic content. Consulting firm partnerships (Deloitte, Capgemini recommend for ArchiMate). Limited direct sales force.",
    counterPosition: "\"BiZZdesign is excellent if you have architect headcount to model everything in ArchiMate by hand forever. We automate from production — zero manual modeling, always current.\"",
    recentMoves: "HoriZZon cloud launch. PE driving cloud transition. AI for model generation. Slow to evolve beyond ArchiMate purist position.",
    events: "Open Group / ArchiMate Conferences (primary sponsor), Gartner EA Summit, EA Conference Europe"
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    tagline: "The Infrastructure Giant",
    logo: "🟪",
    color: "#6C3483",
    founded: 2004,
    hq: "Santa Clara, CA",
    employees: "22,000+",
    revenue: "$10B+ overall. ITOM ~$1B+",
    financing: "Public (NYSE: NOW). ~$180B market cap",
    ownership: "Public",
    threatLevel: 4,
    aiMaturity: 4,
    closestToCobalt: 3,
    products: [
      { name: "CMDB", desc: "Configuration Management Database — all IT assets and relationships." },
      { name: "ITOM Discovery", desc: "Agent-based/agentless scanning of infrastructure. Real automated discovery — at infra layer." },
      { name: "Service Mapping", desc: "Maps infrastructure to IT services." },
      { name: "Now Assist (AI)", desc: "Enterprise AI layer. NLP querying, AI incident summaries, AI change impact." },
    ],
    whatSetsApart: "Only competitor with real automated infrastructure discovery. Massive installed base. Biggest AI R&D budget (billions). Platform consolidation play.",
    similarities: "Both believe in automated discovery over manual documentation. But ServiceNow discovers infrastructure; Cobalt discovers business processes.",
    aiStrategy: "Now Assist across platform. AI Service Mapping improves accuracy. Predictive Intelligence flags stale CMDB. Health Log Analytics on app logs. Largest AI investment — but infrastructure-focused, not business architecture.",
    aiGap: "All AI stays at infrastructure layer. No business processes, capabilities, or organizational context. Can't see vendor-managed platforms. 'App X runs on Server Y' but not 'App X is part of payment processing.'",
    pricing: "Per-user/per-node. Basic APM in ITSM. Full ITOM $300K–$1M+.",
    pricingModel: "Platform + per-node",
    geo: {
      primary: ["US","GB","DE","AU"],
      secondary: ["FR","NL","JP","SG","CA"],
      weak: []
    },
    geoNote: "Global — follows ITSM installed base. Not a geo strategy, it's an installed-base strategy.",
    industries: { "Technology": 5, "Financial Services": 4, "Healthcare": 4, "Public Sector": 3, "Manufacturing": 3, "Telecom": 3, "Energy": 2, "Insurance": 2, "Retail": 2 },
    industryNote: "Industry-agnostic. FS is fastest-growing for ITOM.",
    icp: "10K–200K+ employees. VP IT Ops, ServiceNow Platform Owner. Internal expansion — 'we already have ServiceNow.' Sweet spot: Fortune 500 with ServiceNow ITSM deployed.",
    gtm: "Massive field sales. ServiceNow Knowledge (20K+ attendees). Partner ecosystem (Big 4). Land-and-expand within existing ITSM. Not actively selling 'EA.'",
    counterPosition: "\"Don't compete — complement. ServiceNow tells you what infrastructure exists. Cobalt tells you what business processes run across it. We're the business process layer on top of ServiceNow.\"",
    recentMoves: "Massive Now Assist AI rollout. Improving Service Mapping with AI. If they acquire a process mining or business architecture company — most existential threat.",
    events: "ServiceNow Knowledge (own mega-event), Gartner IT Symposium"
  },
  {
    id: "orbus",
    name: "Orbus Software",
    tagline: "The Microsoft Play",
    logo: "🔷",
    color: "#2471A3",
    founded: 2004,
    hq: "London, UK",
    employees: "150–250",
    revenue: "$20–40M ARR",
    financing: "Apax Partners majority ~2023",
    ownership: "Private (PE-backed)",
    threatLevel: 1,
    aiMaturity: 1,
    closestToCobalt: 1,
    products: [
      { name: "OrbusInfinity", desc: "Cloud EA platform — standard EAM within Microsoft ecosystem." },
      { name: "iServer (legacy)", desc: "On-prem Visio plugin. Being sunset." },
    ],
    whatSetsApart: "Deepest Microsoft integration — Visio, Azure DevOps, Power BI, SharePoint. Low switching cost from Visio-based documentation.",
    similarities: "Standard EAM. Manual data. Same staleness. Essentially 'LeanIX for Microsoft shops.'",
    aiStrategy: "AI assistant for NL querying. Some Azure imports. Fast follower. Focus is cloud migration (iServer → OrbusInfinity), not AI.",
    aiGap: "No meaningful AI differentiation. Following the pack. Unlikely to innovate on discovery.",
    pricing: "Per-user. Entry ~$40K+. Enterprise $75–200K.",
    pricingModel: "Per-user",
    geo: {
      primary: ["GB","IE"],
      secondary: ["US","DE","AU","NZ"],
      weak: ["NO","SE","FR","ES","JP","BR"]
    },
    geoNote: "Follows Microsoft density. UK public sector, some US.",
    industries: { "Public Sector": 5, "Financial Services": 2, "Healthcare": 3, "Insurance": 2, "Manufacturing": 1, "Telecom": 1, "Energy": 1 },
    industryNote: "Goes where Microsoft goes. UK public sector + NHS.",
    icp: "3K–30K employees. Head of EA, IT Director. Microsoft-centric IT. 3–6 month cycle. Sweet spot: UK public sector org deep in Microsoft.",
    gtm: "Microsoft ecosystem marketing. Power BI integration guides. Webinars. Limited sales force. Apax PE pushing growth.",
    counterPosition: "\"Orbus works if your entire stack is Microsoft. Banks run 50+ vendor platforms. We discover across all of them.\"",
    recentMoves: "iServer → OrbusInfinity migration. Apax PE acquisition. No significant pivot.",
    events: "EA Conference Europe, Microsoft events, Gartner EA Summit"
  }
];

const cobalt = {
  name: "Cobalt",
  color: "#10B981",
  tagline: "Runtime Architecture Intelligence",
  pricingModel: "Per business process. Foundation (3): $60K. Professional (8): $120K. Enterprise (20): $200K. Enterprise+: $300K+.",
  icp: "Mid-to-large financial institutions (3K–50K employees), US/UK/Israel, heterogeneous multi-vendor environments. CTO / VP Engineering buyer."
};

const allIndustries = ["Financial Services","Insurance","Public Sector","Manufacturing","Technology","Telecom","Healthcare","Energy","Retail","Defense","Automotive"];

const tabs = ["Overview","Products & AI","Pricing & GTM","Geography","Industries","Threat Matrix","Our Position"];

function Stars({count,max=5,color="#F59E0B"}){return <span style={{letterSpacing:2}}>{Array.from({length:max},(_,i)=><span key={i} style={{color:i<count?color:"#374151",opacity:i<count?1:0.25,fontSize:14}}>★</span>)}</span>}

function Badge({children,color="#64748B",bg}){return <span style={{display:"inline-block",padding:"2px 10px",borderRadius:99,fontSize:11,fontWeight:600,background:bg||color+"20",color,marginRight:4,marginBottom:4}}>{children}</span>}

function Card({children,style,onClick,selected}){return <div onClick={onClick} style={{background:selected?"#1E293B":"#0F172A",border:selected?"1.5px solid #3B82F6":"1px solid #1E293B",borderRadius:10,padding:16,cursor:onClick?"pointer":"default",transition:"all 0.15s",...style}}>{children}</div>}

function Section({title,children}){return <div style={{marginBottom:24}}><h3 style={{color:"#94A3B8",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,marginBottom:10,borderBottom:"1px solid #1E293B",paddingBottom:6}}>{title}</h3>{children}</div>}

// World Map SVG with country highlights
function WorldMap({competitors:comps}){
  // Simplified country center coordinates (x,y in SVG viewbox 0-1000, 0-500)
  const countryCoords={
    US:[190,190],CA:[180,140],GB:[440,155],IE:[425,155],FR:[455,195],DE:[478,170],AT:[490,180],CH:[468,185],
    NL:[462,162],BE:[457,168],NO:[475,120],SE:[490,130],DK:[475,150],FI:[510,120],ES:[435,215],IT:[485,205],
    AU:[830,380],NZ:[880,410],JP:[855,195],SG:[765,300],BR:[300,340],IL:[540,225]
  };

  // Build color map per country
  let countryColors = {};
  comps.forEach(c => {
    (c.geo.primary||[]).forEach(cc => {
      if(!countryColors[cc]) countryColors[cc] = [];
      countryColors[cc].push({color:c.color,level:"primary"});
    });
    (c.geo.secondary||[]).forEach(cc => {
      if(!countryColors[cc]) countryColors[cc] = [];
      countryColors[cc].push({color:c.color,level:"secondary"});
    });
  });

  return (
    <div style={{position:"relative",background:"#0A0F1A",borderRadius:10,padding:16,border:"1px solid #1E293B",marginBottom:16}}>
      <svg viewBox="0 0 1000 500" style={{width:"100%",height:"auto"}}>
        {/* Simplified world outline */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15"/><stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/></radialGradient>
        </defs>
        {/* Ocean background */}
        <rect x="0" y="0" width="1000" height="500" fill="#060B14" rx="8"/>
        {/* Continent outlines - simplified */}
        {/* North America */}
        <path d="M80,80 L100,60 L160,55 L220,70 L260,100 L280,140 L270,180 L250,210 L230,230 L200,250 L170,250 L140,230 L110,260 L90,240 L80,200 L60,160 L70,120 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Central America */}
        <path d="M170,250 L180,260 L200,275 L210,290 L200,300 L185,295 L175,285 L165,265 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* South America */}
        <path d="M220,290 L260,280 L300,290 L330,310 L340,340 L335,370 L320,400 L300,420 L280,430 L260,420 L250,390 L260,360 L250,330 L235,310 L220,300 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Europe */}
        <path d="M420,100 L440,90 L480,85 L520,95 L540,110 L530,130 L540,150 L520,170 L500,180 L480,200 L460,210 L440,220 L425,210 L420,190 L430,170 L420,150 L430,130 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* UK */}
        <path d="M430,130 L440,120 L445,135 L438,145 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Africa */}
        <path d="M440,230 L470,225 L510,230 L540,250 L560,280 L560,320 L550,360 L530,390 L500,410 L470,400 L450,380 L440,340 L430,300 L425,260 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Asia */}
        <path d="M540,80 L600,70 L680,75 L750,90 L800,110 L850,130 L870,160 L860,190 L840,210 L800,230 L760,260 L720,270 L680,260 L640,240 L600,220 L560,200 L540,170 L530,140 L535,110 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Southeast Asia */}
        <path d="M760,260 L780,275 L800,290 L790,310 L770,300 L755,290 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Australia */}
        <path d="M780,340 L830,330 L870,340 L890,360 L885,390 L860,410 L830,420 L800,410 L785,390 L780,360 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>
        {/* Japan */}
        <path d="M850,155 L860,165 L865,180 L855,190 L845,180 L848,168 Z" fill="#111827" stroke="#1E293B" strokeWidth="0.5"/>

        {/* Country markers */}
        {Object.entries(countryCoords).map(([cc,[cx,cy]]) => {
          const entries = countryColors[cc] || [];
          const hasPrimary = entries.some(e => e.level === "primary");
          if(entries.length === 0) return null;
          const r = hasPrimary ? 10 : 7;
          return (
            <g key={cc}>
              {hasPrimary && <circle cx={cx} cy={cy} r={r+6} fill={entries[0].color} opacity="0.12"/>}
              {entries.length === 1 ? (
                <circle cx={cx} cy={cy} r={r} fill={entries[0].color} opacity={hasPrimary?0.85:0.5} stroke={entries[0].color} strokeWidth="1"/>
              ) : (
                entries.map((e,i) => {
                  const angle = (i / entries.length) * Math.PI * 2 - Math.PI/2;
                  const startAngle = ((i) / entries.length) * 360;
                  const endAngle = ((i+1) / entries.length) * 360;
                  const s = Math.PI * 2;
                  const a1 = (startAngle - 90) * Math.PI / 180;
                  const a2 = (endAngle - 90) * Math.PI / 180;
                  const x1 = cx + r * Math.cos(a1);
                  const y1 = cy + r * Math.sin(a1);
                  const x2 = cx + r * Math.cos(a2);
                  const y2 = cy + r * Math.sin(a2);
                  const large = endAngle - startAngle > 180 ? 1 : 0;
                  return <path key={i} d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`} fill={e.color} opacity={e.level==="primary"?0.85:0.45}/>;
                })
              )}
              <text x={cx} y={cy+r+12} textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="sans-serif">{cc}</text>
            </g>
          );
        })}
        {/* Cobalt marker */}
        {[["US",190,190],["GB",440,155],["IL",540,225]].map(([label,cx,cy])=>(
          <g key={"cobalt-"+label}>
            <circle cx={cx} cy={cy} r={14} fill="none" stroke={cobalt.color} strokeWidth="2" strokeDasharray="4 2" opacity="0.7"/>
          </g>
        ))}
      </svg>
      {/* Legend */}
      <div style={{display:"flex",flexWrap:"wrap",gap:12,marginTop:8,justifyContent:"center"}}>
        {competitors.map(c => (
          <div key={c.id} style={{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#94A3B8"}}>
            <div style={{width:10,height:10,borderRadius:"50%",background:c.color}}/>
            {c.name}
          </div>
        ))}
        <div style={{display:"flex",alignItems:"center",gap:4,fontSize:11,color:cobalt.color,fontWeight:600}}>
          <div style={{width:14,height:14,borderRadius:"50%",border:`2px dashed ${cobalt.color}`}}/>
          Cobalt (target)
        </div>
      </div>
      <div style={{textAlign:"center",marginTop:6,fontSize:10,color:"#475569"}}>
        Larger/brighter dots = primary market · Smaller/dimmer = secondary · Dashed ring = Cobalt Phase 1 targets
      </div>
    </div>
  );
}

// Industry heatmap
function IndustryHeatmap(){
  const industries = ["Financial Services","Insurance","Technology","Public Sector","Manufacturing","Telecom","Healthcare","Energy","Retail","Defense"];
  const maxVal = 5;
  return (
    <div style={{overflowX:"auto"}}>
      <div style={{minWidth:700}}>
        {/* Header row */}
        <div style={{display:"flex",marginBottom:2}}>
          <div style={{width:130,flexShrink:0}}/>
          {competitors.map(c => (
            <div key={c.id} style={{flex:1,textAlign:"center",fontSize:11,color:c.color,fontWeight:600,padding:"4px 2px"}}>{c.name.replace("SAP ","")}</div>
          ))}
          <div style={{width:60,textAlign:"center",fontSize:11,color:cobalt.color,fontWeight:700,padding:"4px 2px"}}>Cobalt fit</div>
        </div>
        {/* Rows */}
        {industries.map(ind => {
          const cobaltFit = {"Financial Services":5,"Insurance":4,"Technology":1,"Public Sector":2,"Manufacturing":2,"Telecom":3,"Healthcare":2,"Energy":3,"Retail":1,"Defense":1}[ind]||0;
          return (
            <div key={ind} style={{display:"flex",marginBottom:2,alignItems:"center"}}>
              <div style={{width:130,flexShrink:0,fontSize:12,color:"#CBD5E1",paddingRight:8,textAlign:"right"}}>{ind}</div>
              {competitors.map(c => {
                const val = c.industries[ind] || 0;
                const opacity = val / maxVal;
                return (
                  <div key={c.id} style={{flex:1,padding:2,textAlign:"center"}}>
                    <div style={{
                      background: val > 0 ? c.color : "transparent",
                      opacity: val > 0 ? 0.15 + opacity * 0.7 : 0,
                      borderRadius: 4,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      color: val >= 3 ? "#F1F5F9" : "#94A3B8",
                      fontWeight: val >= 4 ? 700 : 400,
                      border: val >= 4 ? `1px solid ${c.color}50` : "1px solid transparent"
                    }}>
                      {val > 0 ? "●".repeat(Math.min(val,5)) : "·"}
                    </div>
                  </div>
                );
              })}
              <div style={{width:60,padding:2,textAlign:"center"}}>
                <div style={{
                  background: cobaltFit > 0 ? cobalt.color : "transparent",
                  opacity: cobaltFit > 0 ? 0.15 + (cobaltFit/5) * 0.7 : 0,
                  borderRadius: 4,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  color: cobaltFit >= 3 ? "#F1F5F9" : "#94A3B8",
                  fontWeight: cobaltFit >= 4 ? 700 : 400,
                  border: cobaltFit >= 4 ? `1px solid ${cobalt.color}50` : "1px solid transparent"
                }}>
                  {cobaltFit > 0 ? "●".repeat(cobaltFit) : "·"}
                </div>
              </div>
            </div>
          );
        })}
        <div style={{display:"flex",marginTop:8,justifyContent:"center",gap:16,fontSize:10,color:"#475569"}}>
          <span>● = low presence</span><span>●●● = moderate</span><span>●●●●● = dominant</span>
        </div>
      </div>
    </div>
  );
}

// Market positioning map using canvas-like SVG
function MarketMap(){
  // Positions: [x (0=manual, 100=automated), y (0=infra, 100=business process)]
  const positions = {
    bizzdesign: [8, 82],
    leanix: [25, 60],
    ardoq: [42, 55],
    orbus: [15, 50],
    servicenow: [85, 15],
    cobalt: [90, 90],
    leanix_signavio: [45, 45],
  };

  const pad = 60;
  const w = 600, h = 400;
  const toX = v => pad + (v/100)*(w - pad*2);
  const toY = v => h - pad - (v/100)*(h - pad*2);

  return (
    <div style={{background:"#0A0F1A",borderRadius:10,padding:16,border:"1px solid #1E293B",marginBottom:16}}>
      <svg viewBox={`0 0 ${w} ${h}`} style={{width:"100%",height:"auto"}}>
        {/* Grid */}
        {[0,25,50,75,100].map(v => (
          <g key={v}>
            <line x1={toX(0)} y1={toY(v)} x2={toX(100)} y2={toY(v)} stroke="#1E293B" strokeWidth="0.5"/>
            <line x1={toX(v)} y1={toY(0)} x2={toX(v)} y2={toY(100)} stroke="#1E293B" strokeWidth="0.5"/>
          </g>
        ))}
        {/* Axis labels */}
        <text x={w/2} y={h-8} textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif">Manual data ←————→ Automated discovery</text>
        <text x={12} y={h/2} textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif" transform={`rotate(-90,12,${h/2})`}>Infrastructure ←————→ Business Process</text>

        {/* Cobalt zone - glowing area */}
        <ellipse cx={toX(90)} cy={toY(90)} rx={45} ry={35} fill={cobalt.color} opacity="0.08"/>
        <ellipse cx={toX(90)} cy={toY(90)} rx={30} ry={22} fill={cobalt.color} opacity="0.06"/>

        {/* Empty quadrant highlight */}
        <rect x={toX(55)} y={toY(100)} width={toX(100)-toX(55)} height={toY(45)-toY(100)} fill={cobalt.color} opacity="0.03" rx="8"/>
        <text x={toX(77)} y={toY(75)} textAnchor="middle" fill={cobalt.color} fontSize="9" opacity="0.4" fontFamily="sans-serif">EMPTY QUADRANT</text>

        {/* Competitors */}
        {competitors.map(c => {
          const pos = positions[c.id];
          if(!pos) return null;
          return (
            <g key={c.id}>
              <circle cx={toX(pos[0])} cy={toY(pos[1])} r={c.id==="servicenow"?18:14} fill={c.color} opacity="0.2"/>
              <circle cx={toX(pos[0])} cy={toY(pos[1])} r={c.id==="servicenow"?12:9} fill={c.color} opacity="0.7"/>
              <text x={toX(pos[0])} y={toY(pos[1])+(c.id==="servicenow"?28:22)} textAnchor="middle" fill={c.color} fontSize="9" fontWeight="600" fontFamily="sans-serif">{c.name.replace("SAP ","")}</text>
            </g>
          );
        })}

        {/* LeanIX + Signavio arrow */}
        <line x1={toX(25)} y1={toY(60)} x2={toX(43)} y2={toY(47)} stroke="#0070D2" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        <circle cx={toX(45)} cy={toY(45)} r={7} fill="#0070D2" opacity="0.3" stroke="#0070D2" strokeWidth="1" strokeDasharray="2 2"/>
        <text x={toX(45)} y={toY(45)+16} textAnchor="middle" fill="#0070D2" fontSize="7" opacity="0.7" fontFamily="sans-serif">+Signavio</text>

        {/* Cobalt */}
        <circle cx={toX(90)} cy={toY(90)} r={18} fill={cobalt.color} opacity="0.25"/>
        <circle cx={toX(90)} cy={toY(90)} r={12} fill={cobalt.color} opacity="0.9"/>
        <text x={toX(90)} y={toY(90)+4} textAnchor="middle" fill="#000" fontSize="10" fontWeight="800" fontFamily="sans-serif">C</text>
        <text x={toX(90)} y={toY(90)+26} textAnchor="middle" fill={cobalt.color} fontSize="10" fontWeight="700" fontFamily="sans-serif">COBALT</text>

        {/* Quadrant labels */}
        <text x={toX(15)} y={toY(95)} textAnchor="middle" fill="#334155" fontSize="8" fontFamily="sans-serif">Manual +</text>
        <text x={toX(15)} y={toY(92)} textAnchor="middle" fill="#334155" fontSize="8" fontFamily="sans-serif">Business Process</text>
        <text x={toX(85)} y={toY(5)} textAnchor="middle" fill="#334155" fontSize="8" fontFamily="sans-serif">Automated +</text>
        <text x={toX(85)} y={toY(2)} textAnchor="middle" fill="#334155" fontSize="8" fontFamily="sans-serif">Infrastructure</text>
      </svg>
    </div>
  );
}

function OverviewTab({selected,setSelected}){
  return (
    <div>
      <p style={{color:"#94A3B8",marginBottom:16,fontSize:13,lineHeight:1.6}}>Click any competitor for details. Threat level = competitive risk to Cobalt. Proximity = how close they are to our runtime discovery approach.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:12}}>
        {competitors.map(c=>(
          <Card key={c.id} onClick={()=>setSelected(selected===c.id?null:c.id)} selected={selected===c.id}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
              <div>
                <span style={{fontSize:16,marginRight:6}}>{c.logo}</span>
                <span style={{fontWeight:700,color:"#F1F5F9",fontSize:15}}>{c.name}</span>
                <div style={{color:c.color,fontSize:11,fontWeight:600,marginTop:2}}>{c.tagline}</div>
              </div>
            </div>
            <div style={{fontSize:11,color:"#64748B",marginBottom:6}}>{c.hq} · {c.founded} · {c.employees} emp</div>
            <div style={{fontSize:12,color:"#94A3B8",marginBottom:8,fontWeight:600}}>{c.revenue}</div>
            <div style={{display:"flex",flexDirection:"column",gap:3,fontSize:12}}>
              <span style={{color:"#94A3B8"}}>Threat <Stars count={c.threatLevel} color="#EF4444"/></span>
              <span style={{color:"#94A3B8"}}>AI maturity <Stars count={c.aiMaturity} color="#3B82F6"/></span>
              <span style={{color:"#94A3B8"}}>Proximity <Stars count={c.closestToCobalt} color="#F59E0B"/></span>
            </div>
            {selected===c.id&&(
              <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid #334155",fontSize:12}}>
                <div style={{color:"#94A3B8",marginBottom:4}}><strong style={{color:"#E2E8F0"}}>Financing:</strong> {c.financing}</div>
                <div style={{color:"#94A3B8",marginBottom:4}}><strong style={{color:"#E2E8F0"}}>Ownership:</strong> {c.ownership}</div>
                <div style={{color:"#F59E0B",marginTop:8,fontStyle:"italic",lineHeight:1.6}}>{c.whatSetsApart}</div>
              </div>
            )}
          </Card>
        ))}
      </div>
      <Section title="Market Positioning Map">
        <MarketMap/>
        <Card style={{borderLeft:`3px solid ${cobalt.color}`}}>
          <p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.7,margin:0}}>
            <strong style={{color:cobalt.color}}>Cobalt sits in the empty quadrant</strong> — automated discovery at the business process level. Every manual tool (LeanIX, Ardoq, BiZZdesign, Orbus) lives in the left half. ServiceNow automates discovery but only at infrastructure level (bottom-right). Nobody occupies the top-right: automated business process discovery from runtime. The dashed LeanIX+Signavio marker shows where SAP's process mining integration could move them — bounded to SAP-ecosystem systems.
          </p>
        </Card>
      </Section>
    </div>
  );
}

function ProductsAITab(){
  const [exp,setExp]=useState(null);
  return (
    <div>
      <Section title="What all EAM tools share">
        <Card style={{marginBottom:16}}>
          <p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.7,margin:0}}>Every EAM tool maintains a <strong style={{color:"#F1F5F9"}}>catalog of applications and relationships</strong> — a structured database with metadata. The workflow: someone enters data → tool visualizes it → stakeholders use it for planning. Data decays because humans don't update it. <strong style={{color:"#EF4444"}}>No competitor discovers dependencies from runtime production behavior.</strong></p>
        </Card>
      </Section>
      {competitors.map(c=>(
        <Card key={c.id} style={{marginBottom:10}} onClick={()=>setExp(exp===c.id?null:c.id)} selected={exp===c.id}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <span style={{marginRight:6}}>{c.logo}</span><span style={{fontWeight:700,color:"#F1F5F9",fontSize:14}}>{c.name}</span>
              <span style={{color:"#475569",fontSize:12,marginLeft:8}}>{c.products.length} products · AI: <Stars count={c.aiMaturity} color="#3B82F6"/></span>
            </div>
            <span style={{color:"#475569",fontSize:16}}>{exp===c.id?"▾":"▸"}</span>
          </div>
          {exp===c.id&&(
            <div style={{marginTop:14}}>
              <Section title="Key Products">
                {c.products.map((p,i)=><div key={i} style={{marginBottom:10}}><div style={{fontWeight:600,color:c.color,fontSize:13}}>{p.name}</div><div style={{color:"#94A3B8",fontSize:12,lineHeight:1.6}}>{p.desc}</div></div>)}
              </Section>
              <Section title="What Sets Them Apart"><p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.6,margin:0}}>{c.whatSetsApart}</p></Section>
              <Section title="AI & Automation Strategy"><p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.6,margin:0}}>{c.aiStrategy}</p>
                <div style={{marginTop:10,padding:"8px 12px",background:"#0A1628",borderRadius:6,borderLeft:`3px solid ${cobalt.color}`}}>
                  <div style={{color:cobalt.color,fontSize:10,fontWeight:700,marginBottom:4}}>COBALT'S GAP TO EXPLOIT</div>
                  <p style={{color:"#94A3B8",fontSize:12,lineHeight:1.6,margin:0}}>{c.aiGap}</p>
                </div>
              </Section>
              <Section title="Recent Moves"><p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.6,margin:0}}>{c.recentMoves}</p></Section>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

function PricingGTMTab(){
  const [exp,setExp]=useState(null);
  return (
    <div>
      <Section title="Pricing Comparison">
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:600}}>
            <thead><tr>{["Vendor","Model","Entry","Enterprise","Trend"].map((h,i)=><th key={i} style={{textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #334155",color:"#94A3B8",fontWeight:600}}>{h}</th>)}</tr></thead>
            <tbody>
              {competitors.map(c=>(
                <tr key={c.id} style={{borderBottom:"1px solid #1E293B"}}>
                  <td style={{padding:"8px 10px",fontWeight:600,color:c.color}}>{c.logo} {c.name}</td>
                  <td style={{padding:"8px 10px",color:"#CBD5E1"}}>{c.pricingModel}</td>
                  <td style={{padding:"8px 10px",color:"#CBD5E1"}}>{c.id==="leanix"?"~$24–30K":c.id==="ardoq"?"~$15–25K":c.id==="bizzdesign"?"~$50K+":c.id==="servicenow"?"In ITSM":"~$40K+"}</td>
                  <td style={{padding:"8px 10px",color:"#CBD5E1"}}>{c.id==="leanix"?"$100–500K+":c.id==="ardoq"?"$75–150K+":c.id==="bizzdesign"?"$150–400K+":c.id==="servicenow"?"$300K–$1M+":"$75–200K"}</td>
                  <td style={{padding:"8px 10px"}}>{c.id==="leanix"?<Badge color="#EF4444">↑ 15–25% hikes</Badge>:c.id==="ardoq"?<Badge color="#22C55E">Competitive</Badge>:c.id==="servicenow"?<Badge color="#F59E0B">Bundling</Badge>:<Badge color="#64748B">Stable</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card style={{marginTop:12,borderLeft:`3px solid ${cobalt.color}`}}>
          <div style={{color:cobalt.color,fontSize:11,fontWeight:700,marginBottom:4}}>COBALT — PER BUSINESS PROCESS (UNIQUE)</div>
          <p style={{color:"#CBD5E1",fontSize:13,margin:0,lineHeight:1.6}}>{cobalt.pricingModel}</p>
          <p style={{color:"#64748B",fontSize:11,margin:"4px 0 0"}}>No competitor prices by process because no competitor can map them automatically.</p>
        </Card>
      </Section>
      <Section title="Go-to-Market & ICP">
        {competitors.map(c=>(
          <Card key={c.id} style={{marginBottom:10}} onClick={()=>setExp(exp===c.id?null:c.id)} selected={exp===c.id}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span><span style={{marginRight:6}}>{c.logo}</span><span style={{fontWeight:600,color:"#F1F5F9"}}>{c.name}</span></span>
              <span style={{color:"#475569",fontSize:16}}>{exp===c.id?"▾":"▸"}</span>
            </div>
            {exp===c.id&&(
              <div style={{marginTop:12}}>
                <Section title="ICP"><p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.7,margin:0}}>{c.icp}</p></Section>
                <Section title="Go-to-Market"><p style={{color:"#CBD5E1",fontSize:13,lineHeight:1.7,margin:0}}>{c.gtm}</p></Section>
                <Section title="Events">{c.events}</Section>
                <div style={{padding:"8px 12px",background:"#0A1628",borderRadius:6,borderLeft:"3px solid #EF4444"}}>
                  <div style={{color:"#EF4444",fontSize:10,fontWeight:700,marginBottom:4}}>COUNTER-POSITIONING</div>
                  <p style={{color:"#94A3B8",fontSize:12,lineHeight:1.6,margin:0,fontStyle:"italic"}}>{c.counterPosition}</p>
                </div>
              </div>
            )}
          </Card>
        ))}
      </Section>
    </div>
  );
}

function GeoTab(){
  return (
    <div>
      <Section title="Global Competitor Presence">
        <WorldMap competitors={competitors}/>
      </Section>
      <Section title="Geographic Detail">
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr>{["Vendor","Primary Markets","Secondary","Strategy Note"].map((h,i)=><th key={i} style={{textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #334155",color:"#94A3B8",fontWeight:600}}>{h}</th>)}</tr></thead>
            <tbody>{competitors.map(c=>(
              <tr key={c.id} style={{borderBottom:"1px solid #1E293B"}}>
                <td style={{padding:"8px 10px",fontWeight:600,color:c.color,whiteSpace:"nowrap"}}>{c.logo} {c.name}</td>
                <td style={{padding:"8px 10px"}}>{c.geo.primary.map(g=><Badge key={g} color={c.color}>{g}</Badge>)}</td>
                <td style={{padding:"8px 10px",color:"#94A3B8"}}>{c.geo.secondary.join(", ")}</td>
                <td style={{padding:"8px 10px",color:"#64748B",fontStyle:"italic",fontSize:11}}>{c.geoNote}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Section>
      <Card style={{borderLeft:`3px solid ${cobalt.color}`}}>
        <div style={{color:cobalt.color,fontSize:11,fontWeight:700,marginBottom:6}}>COBALT'S GEOGRAPHIC STRATEGY</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:12}}>
          <div style={{background:"#0A1628",borderRadius:6,padding:10}}>
            <div style={{color:"#22C55E",fontSize:11,fontWeight:700,marginBottom:4}}>PHASE 1 — NOW</div>
            <div style={{color:"#CBD5E1",fontSize:12,lineHeight:1.6}}>US East Coast + UK + Israel. Largest SAM, fastest TTM, weakest incumbent in banking.</div>
          </div>
          <div style={{background:"#0A1628",borderRadius:6,padding:10}}>
            <div style={{color:"#F59E0B",fontSize:11,fontWeight:700,marginBottom:4}}>PHASE 2 — 12–24 MO</div>
            <div style={{color:"#CBD5E1",fontSize:12,lineHeight:1.6}}>EU (DACH, Benelux, Nordics). DORA drives demand. Need reference logos first.</div>
          </div>
          <div style={{background:"#0A1628",borderRadius:6,padding:10}}>
            <div style={{color:"#64748B",fontSize:11,fontWeight:700,marginBottom:4}}>PHASE 3 — 24+ MO</div>
            <div style={{color:"#CBD5E1",fontSize:12,lineHeight:1.6}}>APAC, France/S. Europe. Requires local presence, strong reference base.</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function IndustryTab(){
  return (
    <div>
      <Section title="Industry Presence Heatmap">
        <Card><IndustryHeatmap/></Card>
      </Section>
      <Section title="Industry Notes by Competitor">
        {competitors.map(c=>(
          <div key={c.id} style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
            <span style={{color:c.color,fontWeight:700,fontSize:12,minWidth:100,flexShrink:0}}>{c.logo} {c.name.replace("SAP ","")}</span>
            <span style={{color:"#94A3B8",fontSize:12,lineHeight:1.6}}>{c.industryNote}</span>
          </div>
        ))}
      </Section>
      <Card style={{borderLeft:`3px solid ${cobalt.color}`}}>
        <div style={{color:cobalt.color,fontSize:11,fontWeight:700,marginBottom:6}}>WHY BANKING FIRST</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:10}}>
          {[
            {icon:"🏦",label:"Highest complexity",desc:"500–2,000 apps, 50+ vendor platforms per bank"},
            {icon:"📋",label:"DORA tailwind",desc:"Regulation mandates process-centric dependency mapping"},
            {icon:"💰",label:"Deepest budgets",desc:"Banks spend 7–10% of revenue on IT"},
            {icon:"🔓",label:"Weakest lock-in",desc:"No EAM vendor owns global banking. LeanIX = manufacturing, MEGA = French only"},
            {icon:"🔗",label:"Network effects",desc:"Banking CIOs talk to each other — 5 logos accelerate the next 20"},
          ].map((item,i)=>(
            <div key={i} style={{background:"#0A1628",borderRadius:6,padding:10}}>
              <div style={{fontSize:18,marginBottom:4}}>{item.icon}</div>
              <div style={{color:"#F1F5F9",fontSize:12,fontWeight:600,marginBottom:2}}>{item.label}</div>
              <div style={{color:"#64748B",fontSize:11,lineHeight:1.5}}>{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ThreatTab(){
  const sorted=[...competitors].sort((a,b)=>b.closestToCobalt-a.closestToCobalt);
  return (
    <div>
      <Section title="Who's Moving Closest to Cobalt">
        <p style={{color:"#94A3B8",fontSize:13,marginBottom:16,lineHeight:1.6}}>"Proximity" = how close to offering runtime, automated, business-process-level discovery.</p>
        {sorted.map((c,i)=>(
          <Card key={c.id} style={{marginBottom:10,borderLeft:`3px solid ${i===0?"#EF4444":i===1?"#F59E0B":"#1E293B"}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <div><span style={{marginRight:6}}>{c.logo}</span><span style={{fontWeight:700,color:"#F1F5F9"}}>{c.name}</span>{i===0&&<Badge color="#EF4444" bg="#EF444420">WATCH CLOSEST</Badge>}{i===1&&<Badge color="#F59E0B" bg="#F59E0B20">MONITOR</Badge>}</div>
              <span style={{color:"#94A3B8",fontSize:12}}>Proximity: <Stars count={c.closestToCobalt} color="#F59E0B"/></span>
            </div>
            <p style={{color:"#94A3B8",fontSize:12,lineHeight:1.6,margin:0}}>
              {c.id==="ardoq"&&"Most philosophically aligned. Integration-first, graph-based, 'continuous architecture.' 20+ API integrations. Most likely to eventually attempt runtime discovery. Watch acqui-hires and product launches."}
              {c.id==="leanix"&&"SAP Signavio = the most credible runtime-adjacent response. Process mining is legitimate but bounded to SAP-ecosystem event logs (~10–15% of a bank's landscape). Increasingly 'SAP transformation platform,' less general-purpose."}
              {c.id==="servicenow"&&"Already does real automated infra discovery. Billions in AI R&D. If they acquire a process mining or business architecture company → most existential threat. 2–4 year risk. Position as complementary now."}
              {c.id==="bizzdesign"&&"Will not pivot to automated discovery — would alienate governance-focused customers. Standards-purist positioning is orthogonal to Cobalt. Not a competitive threat."}
              {c.id==="orbus"&&"Niche Microsoft play. No meaningful discovery innovation. PE may push M&A but unlikely to move toward runtime. Not a threat in banking."}
            </p>
          </Card>
        ))}
      </Section>
      <Section title="Scenario Planning">
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:10}}>
          {[
            {level:"HIGH",color:"#EF4444",title:"ServiceNow acquires process mining / business architecture co",desc:"Combines infra discovery + installed base + AI budget with business process mapping. Most existential scenario. 2–4 yr timeline."},
            {level:"MED",color:"#F59E0B",title:"Ardoq adds runtime or network-level discovery",desc:"Most technically aligned. If they invest beyond API metadata, they become direct competitor. Watch product + hiring signals."},
            {level:"MED",color:"#F59E0B",title:"LeanIX+Signavio expands beyond SAP",desc:"If SAP invests in non-SAP connectors for Signavio, the combination becomes more credible for heterogeneous environments."},
            {level:"OPP",color:"#22C55E",title:"LeanIX continues SAP-centricity + price hikes",desc:"Every price hike pushes non-SAP customers toward alternatives. Cobalt's window widens as LeanIX narrows to SAP."},
          ].map((s,i)=>(
            <Card key={i} style={{borderLeft:`3px solid ${s.color}`}}>
              <div style={{color:s.color,fontSize:10,fontWeight:700,marginBottom:6}}>{s.level==="OPP"?"OPPORTUNITY":`${s.level} RISK`}</div>
              <div style={{color:"#F1F5F9",fontWeight:600,fontSize:13,marginBottom:6}}>{s.title}</div>
              <p style={{color:"#64748B",fontSize:12,lineHeight:1.6,margin:0}}>{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

function PositionTab(){
  return (
    <div>
      <Section title="Cobalt's Position">
        <Card style={{borderLeft:`4px solid ${cobalt.color}`,marginBottom:16}}>
          <div style={{color:cobalt.color,fontSize:18,fontWeight:800,marginBottom:8}}>Runtime Architecture Intelligence</div>
          <p style={{color:"#E2E8F0",fontSize:14,lineHeight:1.7,margin:"0 0 10px"}}>The first enterprise architecture platform that discovers what actually runs in production — replacing months of manual documentation with runtime truth across every vendor platform.</p>
          <p style={{color:"#94A3B8",fontSize:13,lineHeight:1.6,margin:0}}>Every existing EAM tool relies on humans to document what they believe exists. Cobalt discovers it automatically. Not incremental — a category shift from "architecture documentation" to "architecture intelligence."</p>
        </Card>
      </Section>
      <Section title="Positioning Pillars">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <Card style={{borderTop:"3px solid #22C55E"}}>
            <div style={{color:"#22C55E",fontSize:11,fontWeight:700,marginBottom:8}}>DO SAY</div>
            <div style={{color:"#CBD5E1",fontSize:13,lineHeight:2}}>• "Runtime production truth"<br/>• "Zero manual effort"<br/>• "Cross-vendor visibility"<br/>• "Business process dependencies"<br/>• "Architecture intelligence" (new category)<br/>• "Complementary to ServiceNow"<br/>• "DORA / operational resilience"<br/>• Price at parity or above LeanIX</div>
          </Card>
          <Card style={{borderTop:"3px solid #EF4444"}}>
            <div style={{color:"#EF4444",fontSize:11,fontWeight:700,marginBottom:8}}>DON'T SAY</div>
            <div style={{color:"#CBD5E1",fontSize:13,lineHeight:2}}>• "Better EA tool" (invites feature comparison)<br/>• "AI-powered" (everyone claims AI)<br/>• "Automation" as primary (Ardoq claims too)<br/>• TOGAF/ArchiMate language (BiZZdesign's turf)<br/>• Competitive with ServiceNow<br/>• Undercut pricing (signals "point tool")<br/>• "We replace your EA tool"</div>
          </Card>
        </div>
      </Section>
      <Section title="Counter-Positioning Cheat Sheet">
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr><th style={{textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #334155",color:"#94A3B8",fontWeight:600}}>Against</th><th style={{textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #334155",color:"#94A3B8",fontWeight:600}}>Counter-Position</th></tr></thead>
            <tbody>{competitors.map(c=>(
              <tr key={c.id} style={{borderBottom:"1px solid #1E293B"}}>
                <td style={{padding:"8px 10px",fontWeight:600,color:c.color,whiteSpace:"nowrap"}}>{c.logo} {c.name}</td>
                <td style={{padding:"8px 10px",color:"#94A3B8",fontStyle:"italic",lineHeight:1.6}}>{c.counterPosition}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Section>
      <Section title="Key Takeaways">
        <div style={{display:"grid",gap:8}}>
          {[
            {n:"1",t:"Nobody does runtime discovery",d:"Category distinction, not incremental. Protect this."},
            {n:"2",t:"LeanIX is the incumbent to beat",d:"In every deal. SAP acquisition = threat (distribution) + opportunity (price hikes, narrowing focus)."},
            {n:"3",t:"Ardoq is moving our direction",d:"Most aligned. Watch for runtime discovery attempts in 2–3 years."},
            {n:"4",t:"ServiceNow is the sleeping giant",d:"Infra discovery + AI budget. Acquisition up-stack = existential risk. Complement, don't compete."},
            {n:"5",t:"Banking is the right beachhead",d:"Highest complexity, regulatory tailwind, deepest budgets, weakest incumbent lock-in."},
            {n:"6",t:"Competitor AI is lipstick on manual data",d:"Chatbots on stale catalogs. AI on bad data = fast wrong answers. We give correct data first."},
            {n:"7",t:"Price at parity or above",d:"Market clusters at $100–300K. Per-process model supports $60K entry → $200K+ expand. Don't go below $40K."},
          ].map(item=>(
            <Card key={item.n}>
              <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                <div style={{background:cobalt.color,color:"#000",borderRadius:"50%",width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:12,flexShrink:0}}>{item.n}</div>
                <div><div style={{fontWeight:700,color:"#F1F5F9",fontSize:13,marginBottom:2}}>{item.t}</div><div style={{color:"#64748B",fontSize:12,lineHeight:1.5}}>{item.d}</div></div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default function App(){
  const [tab,setTab]=useState(0);
  const [selected,setSelected]=useState(null);
  return (
    <div style={{background:"#020617",color:"#E2E8F0",minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
      <div style={{padding:"20px 24px 0"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:2}}>
          <div style={{background:cobalt.color,borderRadius:8,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,color:"#000"}}>C</div>
          <div><h1 style={{margin:0,fontSize:20,fontWeight:800,color:"#F1F5F9"}}>Competitive Intelligence</h1><p style={{margin:0,fontSize:12,color:"#475569"}}>Cobalt vs. EAM Market — March 2026</p></div>
        </div>
      </div>
      <div style={{padding:"12px 24px",overflowX:"auto",whiteSpace:"nowrap",borderBottom:"1px solid #1E293B"}}>
        {tabs.map((t,i)=>(
          <button key={i} onClick={()=>setTab(i)} style={{background:"none",border:"none",color:tab===i?"#F1F5F9":"#475569",fontSize:13,fontWeight:tab===i?700:500,padding:"6px 14px",cursor:"pointer",borderBottom:tab===i?`2px solid ${cobalt.color}`:"2px solid transparent",marginRight:2,whiteSpace:"nowrap"}}>{t}</button>
        ))}
      </div>
      <div style={{padding:24,maxWidth:1100}}>
        {tab===0&&<OverviewTab selected={selected} setSelected={setSelected}/>}
        {tab===1&&<ProductsAITab/>}
        {tab===2&&<PricingGTMTab/>}
        {tab===3&&<GeoTab/>}
        {tab===4&&<IndustryTab/>}
        {tab===5&&<ThreatTab/>}
        {tab===6&&<PositionTab/>}
      </div>
    </div>
  );
}
