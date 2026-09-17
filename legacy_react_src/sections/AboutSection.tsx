import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const DECORATIVE_IMAGES = {
  topLeft: {
    src: '/lego_icon.png',
    alt: 'Lego icon',
    className: 'w-[120px] sm:w-[160px] md:w-[200px] lg:w-[220px] absolute top-[6%] left-[2%] sm:left-[4%] md:left-[6%]',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  topRight: {
    src: '/oculus.svg',
    alt: 'Oculus VR headset',
    className: 'w-[140px] sm:w-[180px] md:w-[230px] lg:w-[260px] absolute top-[6%] right-[2%] sm:right-[4%] md:right-[6%]',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  bottomLeft: {
    src: '/lightning.svg',
    alt: 'Lightning bolt',
    className: 'w-[80px] sm:w-[110px] md:w-[140px] lg:w-[160px] absolute bottom-[8%] left-[4%] sm:left-[8%] md:left-[10%]',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  bottomRight: {
    src: '/cursor_3d.png',
    alt: '3D Cursor',
    className: 'w-[110px] sm:w-[150px] md:w-[190px] lg:w-[210px] absolute bottom-[8%] right-[4%] sm:right-[8%] md:right-[10%]',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
};

const ABOUT_TEXT =
  "7 years building at the intersection of strategy and AI, from agentic platforms to growth strategies for some of the world's most iconic brands. I turn complex business challenges into scalable, intelligent solutions. Builder by nature, strategist by training.";

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
