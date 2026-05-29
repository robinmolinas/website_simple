import type { Project } from '@/types/project';

/**
 * PROJECTS — master list of portfolio work items.
 *
 * This is the single source of truth for all project data.
 * To add, edit, or remove a project, change only this file.
 * The ProjectsSection component imports and renders this array.
 */
export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'AI TOOL · STRATEGIC INTELLIGENCE',
    name: "2026 TRENDS\nATLAS",
    description:
      "A RAG-powered knowledge graph ingesting 70+ macro trend reports — so the whole team can query 2026's biggest signals like a strategist, with citations.",
    buttonLabel: 'Explore the Atlas',
    buttonHref: 'https://trends-lime.vercel.app/',
    tags: ['LLM-Wiki Architecture', 'Knowledge Graphs', 'Trends 2026'],
    client: 'Self-built · Compounding Trend Intelligence Knowledge Graph',
    intro:
      "Every strategist starts the year drowning in the same 60+ trend reports — Accenture, Gartner, Deloitte, McKinsey, WGSN, GWI and dozens more — each siloed in its own PDF, none of them talking to each other. The standard fix is RAG: dump the PDFs into a vector database and retrieve chunks at query time. But that approach re-derives everything from scratch on every question and accumulates nothing — the connections between reports, which is where the real insight lives, are never actually built. I took a different approach, based on Andrej Karpathy's \"LLM-Wiki\" pattern. Instead of retrieving raw chunks on demand, the system has an LLM incrementally build and maintain a persistent, interlinked wiki that sits between the user and the raw reports. As each source is ingested, the LLM reads it, extracts the key claims, files them into structured pages, and updates the cross-references and synthesis across the whole wiki. The knowledge is compiled once and kept current — so it compounds with every source added. On top of that living wiki I built an interactive knowledge graph and a query layer: ask a strategic question in plain language, and the Atlas reads its own index, drills into the relevant pages, and returns a synthesized answer with every claim mapped back to its source evidence. The result is a static pile of PDFs turned into a compounding, interrogable intelligence system — no vector database required.",
    metrics: [
      ['63', 'trend reports ingested'],
      ['17', 'cross-domain concepts mapped'],
      ['0', 'vector DBs (index-based retrieval)'],
      ['1', 'compounding knowledge graph'],
    ],
    role: [
      'Designed and built the full application end-to-end as an interactive Next.js web app, deployed on Vercel',
      'Implemented the Karpathy LLM-Wiki pattern: a three-layer architecture of immutable raw sources, an LLM-maintained markdown wiki, and a schema file governing ingest and synthesis conventions',
      'Built the ingest workflow so the LLM extracts claims from each report, files them into structured source/concept/entity pages, and maintains cross-references and contradiction flags across the wiki',
      'Engineered index-based retrieval — the query engine reads a content catalog (index.md) first, then drills into linked pages — deliberately avoiding embedding/vector-DB infrastructure, which is unnecessary at this scale (63 sources)',
      "Built the graph visualization layer from the wiki's Obsidian-style links: nodes, weighted connections, type filtering, search and navigation",
      'Engineered a dual-mode query engine: a deterministic retrieval-and-ranking mode and an optional LLM-grounded mode (via OpenRouter)',
      'Designed the evidence-grounding system so every answer maps its claims to specific source pages with inline citations — guarding against unsupported AI output',
    ],
    impact: [
      'Replaces query-time RAG with a knowledge layer that compounds — every source added makes the whole system richer, not just larger',
      'Surfaces cross-domain connections that linear report-reading and chunk-retrieval both miss — the actual source of strategic insight',
      'Cuts the front-end of any strategy or innovation project from days of manual reading to minutes of querying',
      'Every synthesized answer is auditable back to its evidence, making it usable in real client and boardroom contexts',
      'Demonstrates a repeatable pattern: turning any large, messy knowledge corpus into a navigable, self-maintaining graph',
    ],
    images: {
      col2: '/trends_atlas.gif',
    },
  },
  {
    number: '02',
    category: 'AI TOOL · AUTONOMOUS STRATEGY',
    name: "SIGMA\nAI",
    description:
      'An autonomous multi-agent platform that turns complex research into boardroom-ready strategic insights — in minutes.',
    buttonLabel: 'Craft Insights',
    buttonHref: 'https://sigmai.lovable.app/',
    tags: ['Multi-Agent Systems', 'Prompt Engineering', 'n8n', 'AI Evaluation'],
    client: 'Self-built · Multi-Agent Strategic Insight Engine',
    intro:
      "The most valuable — and most manual — part of strategy consulting is turning a mountain of research into a handful of insights sharp enough to change a decision. It's slow, it's subjective, and it doesn't scale. Sigma AI is my attempt to operationalize that craft. It's an autonomous multi-agent platform that takes a company and a research brief and runs the entire foresight workflow end-to-end: it decomposes the topic into 18 MECE sub-briefs, launches parallel research agents, consolidates findings across a proprietary six-lens framework (SCHEMA: Structures, Culture, Humans, Economics, Machinery, Actors), then generates insights by deliberately cross-combining those lenses — Culture × Economics, Humans × Technology — to surface the non-obvious tensions and paradoxes where real insight lives. Crucially, it doesn't stop at a first draft. Every insight is scored against an FPET rubric (Fresh, Potent, Energizing, True), and weak insights are critiqued and rewritten in an autonomous quality loop until they clear a threshold. The output isn't raw text — it's a polished, presentation-ready insight deck. Sigma AI isn't \"AI that summarizes research.\" It's a system that encodes a strategic methodology and runs it at scale.",
    metrics: [
      ['18', 'MECE sub-briefs per run'],
      ['6', 'SCHEMA research lenses'],
      ['4-point', 'FPET quality scoring'],
      ['End-to-End', 'research → deck pipeline'],
    ],
    role: [
      'Designed the full multi-agent strategic intelligence architecture, from research orchestration to deck output',
      'Developed the proprietary SCHEMA framework decomposing any topic into six strategic research dimensions',
      'Engineered the orchestration logic: MECE decomposition into 18 sub-briefs, parallelized research agents, and SCHEMA-based consolidation',
      'Built the insight-generation engine that cross-combines dimensions pairwise to surface hidden tensions and opportunity spaces',
      'Created the FPET evaluation system (Fresh, Potent, Energizing, True) and the autonomous QA loop that scores, critiques, rewrites and version-tracks insights until quality thresholds are met',
      'Built large-scale n8n orchestration pipelines integrating OpenRouter, GPT models and Perplexity for parallelized research and synthesis',
      'Automated the final deliverable: Google Sheets and Google Slides integration for templated, presentation-ready insight decks',
    ],
    impact: [
      'Automates the slowest, most senior-dependent step of strategy work — research-to-insight synthesis',
      'Codifies a consulting methodology into a repeatable system, removing reliance on individual intuition',
      'Parallelized architecture compresses what is normally days of analyst work into a single orchestrated run',
      'The self-improving QA loop raises insight quality without manual review cycles',
      'Outputs boardroom-ready decks, not raw notes — operationalizing the entire consulting deliverable pipeline',
      'Positions the work at the intersection of strategy, AI systems design and foresight automation',
    ],
    images: {
      col2: '/sigma_ai.gif',
    },
  },
  {
    id: 'power-claims',
    number: '03',
    category: 'AI PLATFORM · PRODUCT DESIGN',
    name: "POWER\nCLAIMS",
    client: "L'Oréal · Global Claims Transformation",
    accent: '#6C5CE7',
    accentRgb: '108, 92, 231',
    description:
      "An AI-powered platform reinventing how the world's largest beauty company creates, substantiates, and activates product claims.",
    buttonLabel: 'Learn more →',
    tags: ['AI Platform', 'Product Design', 'Process Reinvention'],
    intro:
      "L'Oréal's claims process — the backbone of every product promise on every pack, page, and ad — was fragmented across siloed tools, manual handoffs, and disconnected teams. Indie brands and K-Beauty disruptors were outpacing legacy speed. I led the product design and AI strategy for Power Claims: a unified platform managing the full claims lifecycle from competitive intelligence and brief creation through scientific substantiation, regulatory review, and local activation. The MVP targets skincare across eight pilot countries (France, USA, Brazil, India, Indonesia, Mexico, Germany, UK), with 20+ AI agents orchestrating the end-to-end flow. The platform architecture spans five core modules — Claim Knowledge, Claim Project, Predict Claim, Risk Escalation, and Claim Dossier — each designed around persona-based workflows for Marketing (DMI), Regulatory (SRCM), Scientific (Valo), EI Officers, and Local teams.",
    metrics: [
      ['20+', 'AI agents designed'],
      ['8', 'pilot countries'],
      ['5', 'core modules'],
      ['130+', 'champions trained'],
    ],
    role: [
      'Led product design and strategy for the full Power Claims platform — from vision through MVP delivery and post-MVP roadmap',
      'Designed the end-to-end claims lifecycle architecture: Claim Knowledge → Claim Project → Predict Claim → Risk Escalation → Claim Dossier',
      'Architected the AI agent ecosystem: 20+ agents including Claim List Creator orchestrator, Consumer Relevancy, Competition Agent, Scientific Grounding (Valo), and Risk Guardian',
      'Built the Power Claims Generator plugin on Claude Cowork — a 7-step pipeline from territory mapping through ranked claim output with parallel sub-agents for consumer, competitive, and risk analysis',
      'Designed persona-based workflows for five user types (DMI, SRCM, Valo, EI, Local) with role-specific views, permissions, and notification triggers',
      'Created the competitive intelligence integration layer connecting Claim Watch (Mintel, Revuze), One Intelligence consumer insights, and TalkWalker social listening',
      'Defined the post-MVP roadmap across three axes: horizontal process extension, vertical AI consolidation, and scale across categories and divisions',
    ],
    impact: [
      "Platform selected as L'Oréal's global claims transformation backbone — replacing fragmented legacy tooling",
      '130+ champions (R&I & DMI) trained on the new E2E process',
      '3 CPD Skincare pilot projects onboarded on MVP',
      'Claim Committee rollout initiated in 11 priority countries',
      'Scaling roadmap defined: CPD Skincare → PPD → Luxe → LDB divisions through 2027',
      'AI agent architecture adopted as the reference model for L\'Oréal Beauty Tech agentic platform',
      'Designed to deliver on three KPIs: Bolder Claims (stronger purchase intent), Faster Time-to-Claim, and Smarter Collaboration',
    ],
    competencies: ['AI AGENTS', 'PRODUCT DESIGN', 'BEAUTY TECH', 'ENTERPRISE'],
    images: {
      col2: '/power_claims.gif',
    },
  },
  {
    number: '04',
    category: 'GENAI · INNOVATION',
    accent: 'blue',
    name: "INNOVATION\nx GenAI",
    description:
      "Reinvented Forvia's innovation process by mapping 60+ GenAI use cases and prioritizing the 10 highest-value ones into built POCs.",
    buttonLabel: 'Learn more →',
    client: 'Forvia · R&D Process Reinvention',
    tags: ['GenAI', 'Process Design', 'Value Case', 'Roadmap'],
    intro:
      "Forvia's innovation and R&D teams knew GenAI could help — but didn't know where. I led a structured diagnosis of their innovation process across departments, mapped where GenAI could genuinely assist, and built a value case to separate hype from real impact. The result was a prioritized, build-ready roadmap.",
    role: [
      'Identified pain points across all innovation teams and departments',
      'Uncovered 60+ GenAI use cases spanning research, ideation, product development and handover',
      'Assessed R&D pain points and overall GenAI maturity',
      'Built an 8-point criteria matrix to score and prioritize use cases',
      'Developed the POC-to-MVP roadmap and handover plan',
    ],
    impact: [
      'Narrowed 60+ use cases down to 10 prioritized bets',
      '10 selected use cases built as POCs for global testing at Forvia',
      'Gave leadership a clear, evidence-based GenAI investment path',
    ],
    metrics: [
      ['60+', 'use cases mapped'],
      ['10', 'POCs built'],
      ['8-pt', 'scoring matrix'],
      ['4 mo', 'engagement'],
    ],
  },
  {
    number: '05',
    category: 'AI PROJECT',
    accent: 'blue',
    name: "SONG GenAI\nPLATFORM",
    description:
      "Built the product strategy for Song's global internal GenAI platform — from practitioner research to a live Alpha released worldwide.",
    buttonLabel: 'Learn more →',
    client: 'Accenture Song · Global Internal Product',
    tags: ['Product Strategy', 'GenAI', 'Internal Tools', 'Backlog'],
    intro:
      "Accenture Song wanted a GenAI platform that actually fit how its creatives and strategists work — not a generic tool bolted on. I built the product strategy from the ground up, grounding it in deep practitioner research to design modules people would genuinely adopt.",
    role: [
      'Built the product strategy for a global internal GenAI platform',
      'Ran in-depth interviews with practitioners to map real workflows and tools',
      'Designed tailored GenAI modules around those workflows',
      'Defined and structured the platform backlog',
    ],
    impact: [
      'Alpha version released globally',
      'Beta in active development',
      'Modules designed around real practitioner needs, not assumptions',
    ],
    metrics: [
      ['Global', 'rollout'],
      ['Alpha', 'live'],
      ['Beta', 'in dev'],
    ],
  },
  {
    number: '06',
    category: 'METAVERSE · GAMING',
    accent: 'amber',
    name: "QUEST FOR\nHOPE",
    description:
      'A decentralized conservation campaign turning endangered Arabian leopards into playable Roblox & Decentraland adventures — launched on the first ever UN International Arabian Leopard Day.',
    buttonLabel: 'Learn more →',
    buttonHref: 'https://questforhope.com/',
    caseStudyLink: 'https://www.frog.co/work/leaping-into-decentralized-conservation',
    client: 'RCU Saudi Arabia · AlUla Activation',
    tags: ['Roblox', 'Conservation', 'Gaming', 'NFT'],
    intro:
      "Fewer than 200 Arabian leopards exist in the wild. The Royal Commission for AlUla wanted to turn that urgency into global engagement — not with another awareness film, but with something people would actually play. I conceptualized Quest for Hope: a decentralized conservation campaign built across Roblox and Decentraland, launched on the first-ever UN International Day of the Arabian Leopard (10 February 2024). The concept: 18 Arabian leopards become digital twins inside a metaverse recreation of AlUla's mountains, Old Town and Hegra. Players explore, photograph and collect these leopards — and each one maps to a real animal being reintroduced into AlUla's wilderness. The game mechanics are designed around play-to-learn: reward-earning activities teach players about biodiversity loss while they race through Valley Rush, navigate the Old Town Maze and cross the Cosmic Crossing. Rare leopard collectibles function as both in-game rewards and symbolic adoption links to the real conservation programme run by RCU, Panthera, Catmosphere and the Arabian Leopard Fund. The campaign was amplified by billboard activations in New York, London, Paris and Beijing, a campaign film, and a 7km Community Catwalk Trail event in AlUla itself — tying the virtual experience to a physical conservation moment on the ground.",
    role: [
      'Conceptualized and developed the full creative concept end-to-end',
      'Designed the decentralized conservation mechanic linking digital leopard twins to real-world reintroduction tracking',
      'Built the gaming experience across both Roblox and Decentraland platforms',
      "Digitally recreated key AlUla landmarks — Hegra, the Old Town, the mountain landscapes — as explorable in-game environments",
      'Designed play-to-learn game mechanics: Valley Rush, Old Town Maze, Cosmic Crossing, leopard photography quests',
      'Created the rare leopard collectible / NFT adoption system tying gameplay to the real conservation programme',
      'Coordinated the campaign to launch on the first UN International Arabian Leopard Day (10 Feb 2024)',
    ],
    impact: [
      '19.1M press coverage views globally',
      '20.9K social media views',
      '3K Roblox game visits at launch',
      'Billboard activations across New York, London, Paris and Beijing',
      'Launched as part of the global "Leap of Hope" campaign alongside a campaign film and 7km Community Catwalk in AlUla',
      'Featured in Arab News, Fast Company Middle East, and global PR coverage',
      "Brought AlUla's conservation mission to younger, gaming-native audiences worldwide",
    ],
    metrics: [
      ['19.1M', 'press views'],
      ['18', 'digital leopard twins'],
      ['2', 'platforms'],
      ['4', 'global billboards'],
    ],
    images: {
      col2: '/quest_for_hope.gif',
    },
  },
];
