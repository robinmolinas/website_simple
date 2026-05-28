import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const DECORATIVE_IMAGES = {
  topLeft: {
    src: '/vision_pro.png',
    alt: 'Apple Vision Pro',
    className: 'w-[180px] sm:w-[240px] md:w-[320px] lg:w-[360px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  bottomLeft: {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D Cursor',
    className: 'w-[130px] sm:w-[170px] md:w-[220px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  topRight: {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  bottomRight: {
    src: '/lightning.png',
    alt: 'Lightning bolt',
    className: 'w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
};

const ABOUT_TEXT =
  "7 years building at the intersection of strategy and AI — from agentic platforms to growth strategies for some of the world's most iconic brands. I turn complex business challenges into scalable, intelligent solutions. Builder by nature, strategist by training.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative corner images */}
      {Object.values(DECORATIVE_IMAGES).map((img) => (
        <FadeIn
          key={img.alt}
          delay={img.fadeProps.delay}
          x={img.fadeProps.x}
          y={img.fadeProps.y}
          duration={img.fadeProps.duration}
          className={img.className}
        >
          <img src={img.src} alt={img.alt} className="w-full" draggable={false} />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="h-10 sm:h-14 md:h-16" />

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <div className="h-16 sm:h-20 md:h-24" />

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
