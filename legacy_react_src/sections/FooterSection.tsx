import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const CURRENT_YEAR = new Date().getFullYear();

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative bg-[#0C0C0C] pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12"
    >
      {/* CTA block */}
      <div className="px-5 sm:px-8 md:px-10 max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s build
          </h2>
        </FadeIn>

        <div className="h-10 sm:h-12 md:h-14" />

        <FadeIn delay={0.15} y={20}>
          <div className="flex justify-center">
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      {/* Spacer before bottom bar */}
      <div className="h-24 sm:h-32 md:h-40" />

      {/* Bottom bar: thin top border, sparse layout */}
      <div className="border-t border-[#D7E2EA]/10 mx-5 sm:mx-8 md:mx-10">
        <div className="max-w-7xl mx-auto pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: copyright */}
          <span className="text-[#D7E2EA]/40 text-xs sm:text-sm font-light tracking-wider uppercase order-3 sm:order-1">
            &copy; {CURRENT_YEAR} Robin Molinas
          </span>

          {/* Right: social links */}
          <div className="flex gap-6 sm:gap-8 order-2 sm:order-3">
            <a
              href="mailto:robin.molinas@outlook.com"
              className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-100 hover:text-[#D7E2EA]"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/robinmolinas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-100 hover:text-[#D7E2EA]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
