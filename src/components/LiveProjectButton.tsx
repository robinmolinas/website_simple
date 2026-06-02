import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export default function LiveProjectButton({
  label = 'Launch Live App',
  href,
  className = '',
}: LiveProjectButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-full
    bg-[#D7E2EA] text-[#0C0C0C] hover:bg-[#BBCCD7]
    font-bold uppercase tracking-widest
    px-8 py-3.5 sm:px-10 sm:py-4
    text-sm sm:text-base
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]
    shadow-lg hover:shadow-xl
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    );
  }

  return (
    <button className={baseClasses} type="button">
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </button>
  );
}
