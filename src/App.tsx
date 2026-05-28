import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="bg-[#000000] font-kanit relative" style={{ overflowX: 'clip' }}>
      {/* Immersive scaled backdrop layout */}
      <div
        className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"
        style={{
          transform: selectedProject ? 'scale(0.96)' : 'scale(1)',
          filter: selectedProject ? 'blur(12px) brightness(0.4)' : 'none',
          pointerEvents: selectedProject ? 'none' : 'auto',
        }}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ProjectsSection onOpenProject={setSelectedProject} activeProject={selectedProject} />
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </main>
  );
}

