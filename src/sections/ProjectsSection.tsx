import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import ProjectVisual from '../components/ProjectVisual';
import type { Project } from '@/types/project';
import { PROJECTS } from '@/data/projects';

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
