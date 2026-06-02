interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <a
      href="mailto:robin.molinas@outlook.com"
      className={`
        inline-block rounded-full font-bold uppercase tracking-widest text-[#0C0C0C] bg-[#D7E2EA]
        px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5
        text-xs sm:text-sm md:text-base
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-[#D7E2EA]/90 hover:shadow-[0_0_30px_rgba(215,226,234,0.15)]
        ${className}
      `}
    >
      Contact Me
    </a>
  );
}
