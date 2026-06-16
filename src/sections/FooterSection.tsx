export default function FooterSection() {
  return (
    <footer
      className="relative bg-[#0C0C0C] pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12"
    >
      <div className="px-5 sm:px-8 md:px-10 max-w-7xl mx-auto flex flex-col items-center gap-10 sm:gap-14">
        {/* Heading */}
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          LET'S BUILD
        </h2>

        {/* Contact button */}
        <a
          href="mailto:robin.molinas@accenture.com"
          className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-10 py-4 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
        >
          Get in touch
        </a>

        {/* Copyright */}
        <p className="text-[#D7E2EA]/30 text-xs sm:text-sm uppercase tracking-widest font-light text-center">
          © {new Date().getFullYear()} Robin Molinas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
