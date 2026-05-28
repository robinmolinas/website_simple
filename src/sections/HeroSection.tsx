import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';

const PORTRAIT_URL = '/avatar_skeptical.svg';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#000000]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-center gap-8 md:gap-12 pt-6 md:pt-8">
          <a
            href="#about"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            About
          </a>
          <a
            href="#work"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Work
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center">
          Hi, i&apos;m Robin
        </h1>
      </FadeIn>

      {/* Spacer to push bottom bar down */}
      <div className="flex-1" />

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-8 sm:px-12 md:px-16 lg:px-24">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a strategist and ai builder turning complex business challenges into intelligent, scalable products
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="flex gap-6 sm:gap-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg">
            <a
              href="mailto:robin.molinas@outlook.com"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/robinmolinas/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Hero Portrait Wrapper (statically centers the image to prevent Framer Motion transform overrides from pulling it off-center) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="Robin Molinas portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
