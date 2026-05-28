import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import ProjectVisual from '../components/ProjectVisual';

interface Project {
  id?: string;
  number: string;
  category: string;
  name: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  caseStudyLink?: string;
  buttonSubtitle?: string;
  tags?: string[];
  accent?: string;
  accentRgb?: string;
  // Modal detail view fields
  client?: string;
  intro?: string;
  role?: string[];
  impact?: string[];
  metrics?: [string, string][];
  competencies?: string[];
  images?: {
    col2: string;
  };
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'AI PROJECT',
    name: "THE TRENDS\nATLAS",
    description: "A RAG-powered knowledge graph ingesting 70+ macro trend reports — so the whole team can query 2026's biggest signals like a strategist, with citations.",
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
    description: 'An autonomous multi-agent platform that turns complex research into boardroom-ready strategic insights — in minutes.',
    buttonLabel: 'Craft Insights',
    buttonHref: 'https://sigmai.lovable.app/',
    tags: ['AI AGENT', 'MULTI-AGENT', 'FORESIGHT', 'N8N'],
    images: {
      col2: '/sigma_ai.gif',
    },
  },
  {
    id: "power-claims",
    number: '03',
    category: "AI PLATFORM · PRODUCT DESIGN",
    name: "POWER\nCLAIMS",
    client: "L'Oréal · Global Claims Transformation",
    accent: "#6C5CE7",
    accentRgb: "108, 92, 231",
    description:
      "An AI-powered platform reinventing how the world's largest beauty company creates, substantiates, and activates product claims.",
    buttonLabel: 'Learn more →',
    tags: ["AI Platform", "Product Design", "Process Reinvention"],
    intro:
      "L'Oréal's claims process — the backbone of every product promise on every pack, page, and ad — was fragmented across siloed tools, manual handoffs, and disconnected teams. Indie brands and K-Beauty disruptors were outpacing legacy speed. I led the product design and AI strategy for Power Claims: a unified platform managing the full claims lifecycle from competitive intelligence and brief creation through scientific substantiation, regulatory review, and local activation. The MVP targets skincare across eight pilot countries (France, USA, Brazil, India, Indonesia, Mexico, Germany, UK), with 20+ AI agents orchestrating the end-to-end flow. The platform architecture spans five core modules — Claim Knowledge, Claim Project, Predict Claim, Risk Escalation, and Claim Dossier — each designed around persona-based workflows for Marketing (DMI), Regulatory (SRCM), Scientific (Valo), EI Officers, and Local teams.",
    metrics: [
      ["20+", "AI agents designed"],
      ["8", "pilot countries"],
      ["5", "core modules"],
      ["130+", "champions trained"],
    ],
    role: [
      "Led product design and strategy for the full Power Claims platform — from vision through MVP delivery and post-MVP roadmap",
      "Designed the end-to-end claims lifecycle architecture: Claim Knowledge → Claim Project → Predict Claim → Risk Escalation → Claim Dossier",
      "Architected the AI agent ecosystem: 20+ agents including Claim List Creator orchestrator, Consumer Relevancy, Competition Agent, Scientific Grounding (Valo), and Risk Guardian",
      "Built the Power Claims Generator plugin on Claude Cowork — a 7-step pipeline from territory mapping through ranked claim output with parallel sub-agents for consumer, competitive, and risk analysis",
      "Designed persona-based workflows for five user types (DMI, SRCM, Valo, EI, Local) with role-specific views, permissions, and notification triggers",
      "Created the competitive intelligence integration layer connecting Claim Watch (Mintel, Revuze), One Intelligence consumer insights, and TalkWalker social listening",
      "Defined the post-MVP roadmap across three axes: horizontal process extension, vertical AI consolidation, and scale across categories and divisions",
    ],
    impact: [
      "Platform selected as L'Oréal's global claims transformation backbone — replacing fragmented legacy tooling",
      "130+ champions (R&I & DMI) trained on the new E2E process",
      "3 CPD Skincare pilot projects onboarded on MVP",
      "Claim Committee rollout initiated in 11 priority countries",
      "Scaling roadmap defined: CPD Skincare → PPD → Luxe → LDB divisions through 2027",
      "AI agent architecture adopted as the reference model for L'Oréal Beauty Tech agentic platform",
      "Designed to deliver on three KPIs: Bolder Claims (stronger purchase intent), Faster Time-to-Claim, and Smarter Collaboration",
    ],
    competencies: [
      "AI AGENTS",
      "PRODUCT DESIGN",
      "BEAUTY TECH",
      "ENTERPRISE",
    ],
  },
  {
    number: '04',
    category: 'GENAI · INNOVATION',
    accent: 'blue',
    name: "INNOVATION\nx GenAI",
    description: "Reinvented Forvia's innovation process by mapping 60+ GenAI use cases and prioritizing the 10 highest-value ones into built POCs.",
    buttonLabel: 'Learn more →',
    client: 'Forvia · R&D Process Reinvention',
    tags: ['GenAI', 'Process Design', 'Value Case', 'Roadmap'],
    intro: "Forvia's innovation and R&D teams knew GenAI could help — but didn't know where. I led a structured diagnosis of their innovation process across departments, mapped where GenAI could genuinely assist, and built a value case to separate hype from real impact. The result was a prioritized, build-ready roadmap.",
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
    metrics: [['60+', 'use cases mapped'], ['10', 'POCs built'], ['8-pt', 'scoring matrix'], ['4 mo', 'engagement']],
  },
  {
    number: '05',
    category: 'AI PROJECT',
    accent: 'blue',
    name: "SONG GenAI\nPLATFORM",
    description: "Built the product strategy for Song's global internal GenAI platform — from practitioner research to a live Alpha released worldwide.",
    buttonLabel: 'Learn more →',
    client: 'Accenture Song · Global Internal Product',
    tags: ['Product Strategy', 'GenAI', 'Internal Tools', 'Backlog'],
    intro: 'Accenture Song wanted a GenAI platform that actually fit how its creatives and strategists work — not a generic tool bolted on. I built the product strategy from the ground up, grounding it in deep practitioner research to design modules people would genuinely adopt.',
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
    metrics: [['Global', 'rollout'], ['Alpha', 'live'], ['Beta', 'in dev']],
  },
  {
    number: '06',
    category: 'METAVERSE · GAMING',
    accent: 'amber',
    name: "QUEST FOR\nHOPE",
    description: "A decentralized conservation campaign turning endangered Arabian leopards into playable Roblox & Decentraland adventures — launched on the first ever UN International Arabian Leopard Day.",
    buttonLabel: 'Learn more →',
    buttonHref: 'https://questforhope.com/',
    caseStudyLink: 'https://www.frog.co/work/leaping-into-decentralized-conservation',
    client: 'RCU Saudi Arabia · AlUla Activation',
    tags: ['Roblox', 'Conservation', 'Gaming', 'NFT'],
    intro: "Fewer than 200 Arabian leopards exist in the wild. The Royal Commission for AlUla wanted to turn that urgency into global engagement — not with another awareness film, but with something people would actually play. I conceptualized Quest for Hope: a decentralized conservation campaign built across Roblox and Decentraland, launched on the first-ever UN International Day of the Arabian Leopard (10 February 2024). The concept: 18 Arabian leopards become digital twins inside a metaverse recreation of AlUla's mountains, Old Town and Hegra. Players explore, photograph and collect these leopards — and each one maps to a real animal being reintroduced into AlUla's wilderness. The game mechanics are designed around play-to-learn: reward-earning activities teach players about biodiversity loss while they race through Valley Rush, navigate the Old Town Maze and cross the Cosmic Crossing. Rare leopard collectibles function as both in-game rewards and symbolic adoption links to the real conservation programme run by RCU, Panthera, Catmosphere and the Arabian Leopard Fund. The campaign was amplified by billboard activations in New York, London, Paris and Beijing, a campaign film, and a 7km Community Catwalk Trail event in AlUla itself — tying the virtual experience to a physical conservation moment on the ground.",
    role: [
      'Conceptualized and developed the full creative concept end-to-end',
      'Designed the decentralized conservation mechanic linking digital leopard twins to real-world reintroduction tracking',
      'Built the gaming experience across both Roblox and Decentraland platforms',
      'Digitally recreated key AlUla landmarks — Hegra, the Old Town, the mountain landscapes — as explorable in-game environments',
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
      'Brought AlUla\'s conservation mission to younger, gaming-native audiences worldwide',
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

function ProjectCard({
  project,
  index,
  totalCards,
  onOpenModal,
}: {
  project: Project;
  index: number;
  totalCards: number;
  onOpenModal: (project: Project) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this card's container to scale it down as you scroll past it
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const isConsultingCard = parseInt(project.number) >= 3;

  const handleCardClick = () => {
    if (isConsultingCard) {
      onOpenModal(project);
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sticky top-24 md:top-32 flex items-start justify-center origin-top w-full"
      style={{
        top: `${96 + index * 28}px`, // Stacks with a clean offset showing the tops of older cards
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="w-full origin-top cursor-pointer md:cursor-default"
        style={{
          scale,
        }}
        onClick={handleCardClick}
      >
        {/* Consulting cards have identical desktop sizing: md:h-[55vh] md:min-h-[460px] md:max-h-[500px] */}
        <div
          className={`rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#000000] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl transition-all duration-300 ${
            isConsultingCard
              ? 'w-full h-auto md:h-[55vh] md:min-h-[460px] md:max-h-[500px] hover:border-[#D7E2EA]/60'
              : 'w-full h-auto'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch h-full">
            {/* Left Column: Text copy and Action button */}
            <div className="flex-1 flex flex-col justify-between gap-8 h-full min-h-[280px] md:min-h-[350px]">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="hero-heading font-black leading-none text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
                    {project.number}
                  </span>
                  <div className="pt-2 sm:pt-4">
                    {/* Category Label: Gradient for 01 & 02 AI Projects, Solid White for Consulting / Strategy */}
                    <span
                      className={`text-xs sm:text-sm uppercase tracking-widest block mb-1.5 ${
                        project.category === 'AI PROJECT' && !isConsultingCard
                          ? 'font-extrabold'
                          : 'font-semibold text-[#D7E2EA]/80'
                      }`}
                      style={
                        project.category === 'AI PROJECT' && !isConsultingCard
                          ? {
                              background: 'linear-gradient(90deg, #B600A8 0%, #7621B0 50%, #BE4C00 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }
                          : undefined
                      }
                    >
                      {project.category}
                    </span>
                    <h3 className="text-[#D7E2EA] font-bold uppercase tracking-tight leading-[1.1] text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] whitespace-pre-line">
                      {project.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg md:text-xl max-w-[480px] leading-relaxed line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Tag badges */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#D7E2EA]/60 border border-[#D7E2EA]/20 px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-semibold bg-transparent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button & Subtitle */}
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap mt-auto">
                {isConsultingCard ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(project);
                    }}
                    className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
                  >
                    {project.buttonLabel}
                  </button>
                ) : (
                  <LiveProjectButton label={project.buttonLabel} href={project.buttonHref} />
                )}
                {project.buttonSubtitle && (
                  <span className="text-[#D7E2EA]/50 text-xs sm:text-sm tracking-wider uppercase font-light">
                    {project.buttonSubtitle}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Dynamic SVG Line-Art Visualizer for consulting, image/GIF for Trends/Sigma */}
            <div className="flex-1 md:max-w-[50%] h-[250px] sm:h-[350px] md:h-auto min-h-[280px] md:min-h-[350px] rounded-[30px] sm:rounded-[40px] overflow-hidden flex items-stretch">
              {project.images ? (
                <img
                  src={project.images.col2}
                  alt={`${project.name} showcase`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <ProjectVisual
                  num={project.number}
                  accent={project.accent || 'blue'}
                  accentRgb={project.accentRgb}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectsSectionProps {
  onOpenProject: (project: Project | null) => void;
  activeProject: Project | null;
}

export default function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const handleOpenModal = (project: Project) => {
    onOpenProject(project);
  };

  return (
    <section
      id="work"
      className="bg-[#000000] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pb-[15vh]"
    >
      <div className="px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Work
          </h2>
        </FadeIn>

        {/* Vertical stacking container with scroll buffer for the final sticky card */}
        <div className="relative flex flex-col gap-12 sm:gap-16 md:gap-20 pb-[5vh]">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

