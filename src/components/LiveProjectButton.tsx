interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export default function LiveProjectButton({
  label = 'View Project',
  href,
  className = '',
}: LiveProjectButtonProps) {
  const baseClasses = `
    inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    transition-colors duration-200
    hover:bg-[#D7E2EA]/10
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
      </a>
    );
  }

  return (
    <button className={baseClasses} type="button">
      {label}
    </button>
  );
}
