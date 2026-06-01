import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import ProjectVisual from './ProjectVisual';
import ProjectGallery from './ProjectGallery';
import type { Project } from '@/types/project';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Prevent scrolling of background page when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const accentColor = {
    pink: '#B600A8',
    blue: '#0052FF',
    teal: '#00F5D4',
    amber: '#FF9F1C',
  }[project.accent || 'blue'] || project.accent || '#0052FF';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // Range: -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // Range: -0.5 to 0.5
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Cinematic Volumetric Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/70 backdrop-blur-md cursor-pointer"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Immersive Volumetric Portal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 200 }}
            className="relative w-full max-w-6xl min-h-[70vh] md:min-h-[80vh] bg-[#030303]/90 border border-[#D7E2EA]/10 shadow-2xl rounded-[35px] flex flex-col md:flex-row items-stretch overflow-hidden z-10 origin-center"
            style={{
              boxShadow: `0 30px 100px -15px ${accentColor}15, 0 0 60px -15px ${accentColor}10`
            }}
          >
            {/* Close Trigger Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/50 hover:text-[#D7E2EA] p-3 hover:bg-[#D7E2EA]/5 rounded-full transition-all duration-300 z-30"
              aria-label="Close project panel"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Aspect: 3D Holographic Parallax Graphic Viewport */}
            <div
              className="flex-1 min-h-[300px] md:min-h-0 bg-[#050505]/45 relative flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-[#D7E2EA]/5 overflow-hidden group select-none cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Radial Glow light spill */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-500 group-hover:opacity-30"
                style={{
                  background: `radial-gradient(circle 280px at 50% 50%, ${accentColor}35, transparent 80%)`
                }}
              />

              {/* 3D Holographic Transform Container */}
              <motion.div
                className="w-[85%] h-[85%] flex items-center justify-center relative"
                style={{
                  rotateX: coords.y * -24,
                  rotateY: coords.x * 24,
                  transformStyle: 'preserve-3d',
                  perspective: 1200
                }}
              >
                <div style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }} className="w-full h-full">
                  {project.gallery && project.gallery.length > 0 ? (
                    <ProjectGallery items={project.gallery} accentColor={accentColor} />
                  ) : (
                    <ProjectVisual
                      num={project.number}
                      accent={project.accent || 'blue'}
                      accentRgb={project.accentRgb}
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Aspect: Detailed Description Panel */}
            <div className="flex-1 flex flex-col p-8 sm:p-12 md:p-16 overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
              {/* Header */}
              <div className="mb-8">
                <span
                  className="font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-1"
                  style={{ color: accentColor }}
                >
                  {project.category}
                </span>
                <h2 className="text-[#D7E2EA] font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] uppercase tracking-tight leading-[1.05] whitespace-pre-line">
                  {project.name}
                </h2>
                {project.client && (
                  <p className="text-[#D7E2EA]/40 text-xs sm:text-sm font-semibold uppercase tracking-widest mt-2 border-l border-[#D7E2EA]/20 pl-3">
                    {project.client}
                  </p>
                )}
              </div>

              {/* Fluid Layout Modules */}
              <div className="space-y-8 flex-1">
                {/* Intro Summary */}
                {project.intro && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/30 uppercase block">
                      [01] // Executive Summary
                    </span>
                    <p className="text-[#D7E2EA] font-light text-base sm:text-lg leading-relaxed">
                      {project.intro}
                    </p>
                  </div>
                )}

                {/* Micro-metrics Isometric Stat Blocks */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/30 uppercase block">
                      [02] // Key Outcomes
                    </span>
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      {project.metrics.map(([val, label], idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-5 rounded-2xl bg-[#09090c]/60 border border-[#D7E2EA]/5 flex flex-col justify-center shadow-lg transition-all"
                        >
                          <span
                            className="font-black text-2xl sm:text-3xl leading-none mb-1 block"
                            style={{ color: '#D7E2EA' }}
                          >
                            {val}
                          </span>
                          <span className="text-[#D7E2EA]/50 text-[10px] sm:text-xs uppercase tracking-wider font-medium">
                            {label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Role Details */}
                {project.role && project.role.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/30 uppercase block">
                      [03] // What I Did
                    </span>
                    <ul className="space-y-3 pl-4">
                      {project.role.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-[#D7E2EA]/80 text-sm sm:text-base font-light leading-relaxed list-disc marker:text-[#D7E2EA]/30"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact */}
                {project.impact && project.impact.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/30 uppercase block">
                      [04] // Business Impact
                    </span>
                    <ul className="space-y-3 pl-4">
                      {project.impact.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-[#D7E2EA]/80 text-sm sm:text-base font-light leading-relaxed list-disc marker:text-[#D7E2EA]/30"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skill badges */}
                {(project.competencies || project.tags) && (project.competencies || project.tags)!.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/30 uppercase block">
                      [05] // Competencies
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {(project.competencies || project.tags)!.map((tag) => (
                        <span
                          key={tag}
                          className="text-[#D7E2EA]/75 border border-[#D7E2EA]/10 bg-[#0A0A0C]/80 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {(project.buttonHref || project.caseStudyLink) && (
                <div className="pt-8 flex flex-wrap gap-4 mt-auto">
                  {project.buttonHref && (
                    <a
                      href={project.buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#D7E2EA] text-[#000000] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-transform duration-200 hover:scale-105 shadow-xl"
                    >
                      Visit live product
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.caseStudyLink && (
                    <a
                      href={project.caseStudyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-[#D7E2EA] text-[#D7E2EA] font-bold uppercase tracking-widest text-xs px-8 py-3.5 transition-colors duration-200 hover:bg-[#D7E2EA]/10 rounded-full shadow-xl"
                    >
                      Read Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
