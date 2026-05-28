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
    category: 'AI PROJECT',
    name: "THE TRENDS\nATLAS",
    description:
      "A RAG-powered knowledge graph ingesting 70+ macro trend reports — so the whole team can query 2026's biggest signals like a strategist, with citations.",
    buttonLabel: 'Explore the Atlas',
    buttonHref: 'https://trends-lime.vercel.app/',
    buttonSubtitle: '70+ documents live',
    tags: ['RAG', 'KNOWLEDGE GRAPH', 'STRATEGY', 'KARPATHY'],
    images: {
      col2: '/trends_atlas.gif',
    },
  },
  {
    number: '02',
    category: 'AI PROJECT',
    name: "SIGMA\nAI",
    description:
      'An autonomous multi-agent platform that turns complex research into boardroom-ready strategic insights — in minutes.',
    buttonLabel: 'Craft Insights',
    buttonHref: 'https://sigmai.lovable.app/',
    tags: ['AI AGENT', 'MULTI-AGENT', 'FORESIGHT', 'N8N'],
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
