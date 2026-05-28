import { motion } from 'framer-motion';

interface ProjectVisualProps {
  num: string;
  accent: string;
  accentRgb?: string;
}

export default function ProjectVisual({ num, accent, accentRgb }: ProjectVisualProps) {
  const isCustomColor = accent.startsWith('#') || accent.startsWith('rgb') || accent.startsWith('hsl');

  // Define color palette based on accent
  const colors = isCustomColor
    ? {
        primary: accent,
        glow: `rgba(${accentRgb || '108, 92, 231'}, 0.15)`,
        lines: `rgba(${accentRgb || '108, 92, 231'}, 0.3)`,
        text: '#D7E2EA',
      }
    : {
        pink: {
          primary: '#B600A8',
          glow: 'rgba(182, 0, 168, 0.15)',
          lines: 'rgba(182, 0, 168, 0.3)',
          text: '#D7E2EA',
        },
        blue: {
          primary: '#0052FF',
          glow: 'rgba(0, 82, 255, 0.15)',
          lines: 'rgba(0, 82, 255, 0.3)',
          text: '#D7E2EA',
        },
        teal: {
          primary: '#00F5D4',
          glow: 'rgba(0, 245, 212, 0.15)',
          lines: 'rgba(0, 245, 212, 0.3)',
          text: '#D7E2EA',
        },
        amber: {
          primary: '#FF9F1C',
          glow: 'rgba(255, 159, 28, 0.15)',
          lines: 'rgba(255, 159, 28, 0.3)',
          text: '#D7E2EA',
        },
      }[accent as 'pink' | 'blue' | 'teal' | 'amber'] || {
        primary: '#0052FF',
        glow: 'rgba(0, 82, 255, 0.15)',
        lines: 'rgba(0, 82, 255, 0.3)',
        text: '#D7E2EA',
      };

  // Helper to render accent-specific SVG elements
  const renderVisualContent = () => {
    const style = ['pink', 'blue', 'teal', 'amber'].includes(accent)
      ? accent
      : (num === '03' || num === '07' ? 'pink' : 'blue');

    switch (style) {
      case 'pink': // radar / foresight grid
        return (
          <>
            {/* Concentric Radar Rings */}
            <circle cx="200" cy="200" r="140" fill="none" stroke={colors.lines} strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="100" fill="none" stroke={colors.lines} strokeWidth="1" />
            <circle cx="200" cy="200" r="60" fill="none" stroke={colors.lines} strokeWidth="1" strokeDasharray="8 4" />
            
            {/* Crosshairs */}
            <line x1="40" y1="200" x2="360" y2="200" stroke={colors.lines} strokeWidth="0.5" />
            <line x1="200" y1="40" x2="200" y2="360" stroke={colors.lines} strokeWidth="0.5" />
            
            {/* Rotating Scanning Vector */}
            <motion.line
              x1="200"
              y1="200"
              x2="200"
              y2="60"
              stroke={colors.primary}
              strokeWidth="2.5"
              style={{ originX: '200px', originY: '200px' }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />

            {/* Floating Coordinate Blips */}
            <motion.circle cx="120" cy="140" r="4" fill={colors.primary} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} />
            <motion.circle cx="280" cy="120" r="3.5" fill={colors.primary} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1 }} />
            <motion.circle cx="250" cy="280" r="5" fill={colors.primary} animate={{ opacity: [0.1, 0.8, 0.1] }} transition={{ repeat: Infinity, duration: 4, delay: 1.8 }} />
            
            {/* Circular Orbiting Node */}
            <motion.circle
              cx="200"
              cy="100"
              r="6"
              fill="none"
              stroke={colors.primary}
              strokeWidth="2"
              style={{ originX: '200px', originY: '200px' }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            />
          </>
        );
      case 'blue': // multi-agent node network
        return (
          <>
            {/* Connection Matrix Grid Lines */}
            <path
              d="M 80,120 L 200,80 L 320,120 L 290,260 L 200,320 L 110,260 Z"
              fill="none"
              stroke={colors.lines}
              strokeWidth="1"
            />
            <path d="M 80,120 L 200,200 L 320,120 M 200,80 L 200,320 M 110,260 L 200,200 L 290,260" fill="none" stroke={colors.lines} strokeWidth="0.75" />
            
            {/* Interactive Decision Nodes */}
            <circle cx="200" cy="200" r="30" fill="none" stroke={colors.lines} strokeWidth="1" />
            <motion.circle cx="200" cy="200" r="8" fill={colors.primary} animate={{ scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />

            {/* Peripheral Nodes with glow rings */}
            {[
              { x: 80, y: 120 },
              { x: 200, y: 80 },
              { x: 320, y: 120 },
              { x: 290, y: 260 },
              { x: 200, y: 320 },
              { x: 110, y: 260 },
            ].map((node, i) => (
              <g key={i}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="0.5"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4, delay: i * 0.6 }}
                />
                <circle cx={node.x} cy={node.y} r="4" fill={colors.primary} />
              </g>
            ))}

            {/* Glowing Flow Pulses */}
            <motion.circle
              cx="80"
              cy="120"
              r="3"
              fill={colors.primary}
              animate={{
                cx: [80, 200, 320, 290, 200, 110, 80],
                cy: [120, 80, 120, 260, 320, 260, 120],
              }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            />
          </>
        );
      case 'teal': // cryptographic hexagonal grid
        return (
          <>
            {/* Isometric Hex Grid */}
            <g transform="translate(200, 200)">
              {/* Central Hexagons */}
              <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke={colors.primary} strokeWidth="2" />
              <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="none" stroke={colors.lines} strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="0,-160 138,-80 138,80 0,160 -138,80 -138,-80" fill="none" stroke={colors.lines} strokeWidth="0.5" />
              
              {/* Vector Rays */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="-160"
                  stroke={colors.lines}
                  strokeWidth="0.75"
                  transform={`rotate(${deg})`}
                />
              ))}

              {/* Orbiting cryptographic coordinates */}
              <motion.circle
                cx="0"
                cy="-120"
                r="6"
                fill={colors.primary}
                animate={{
                  transform: [
                    'rotate(0deg) translate(0px, 0px)',
                    'rotate(60deg) translate(0px, 0px)',
                    'rotate(120deg) translate(0px, 0px)',
                    'rotate(180deg) translate(0px, 0px)',
                    'rotate(240deg) translate(0px, 0px)',
                    'rotate(300deg) translate(0px, 0px)',
                    'rotate(360deg) translate(0px, 0px)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              />

              {/* Micro Hexagonal Node Network */}
              {[-60, 60, 180].map((deg, idx) => (
                <motion.polygon
                  key={idx}
                  points="0,-15 13,-7 13,7 0,15 -13,7 -13,-7"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="1.5"
                  transform={`rotate(${deg}) translate(0, -120)`}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
                  transition={{ repeat: Infinity, duration: 3, delay: idx * 0.8 }}
                />
              ))}
            </g>
          </>
        );
      case 'amber': // isometric dimensional viewport (metaverse / matrix)
        return (
          <>
            {/* Isometric Projection Grid */}
            <g transform="translate(200, 190) scale(1, 0.58)">
              {/* Back Walls */}
              <line x1="-150" y1="-150" x2="0" y2="0" stroke={colors.lines} strokeWidth="1" />
              <line x1="150" y1="-150" x2="0" y2="0" stroke={colors.lines} strokeWidth="1" />
              <line x1="0" y1="300" x2="0" y2="0" stroke={colors.lines} strokeWidth="1" />

              {/* Outer Wireframe Box */}
              <motion.rect
                x="-120"
                y="-120"
                width="240"
                height="240"
                fill="none"
                stroke={colors.primary}
                strokeWidth="2.5"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              />

              {/* Inner floating grids */}
              <motion.polygon
                points="-70,-70 70,-70 70,70 -70,70"
                fill="none"
                stroke={colors.lines}
                strokeWidth="1.5"
                strokeDasharray="4 2"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              />

              {/* Vertical Corner Posts */}
              {[-120, 120].map((x) =>
                [-120, 120].map((y) => (
                  <line
                    key={`${x}-${y}`}
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={y + 100}
                    stroke={colors.lines}
                    strokeWidth="0.5"
                  />
                ))
              )}
            </g>

            {/* Glowing Floating Coordinates & Matrix Data streams */}
            <g>
              <motion.circle cx="100" cy="130" r="5" fill={colors.primary} animate={{ y: [0, -30, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
              <motion.circle cx="300" cy="270" r="4" fill={colors.primary} animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }} />
              <motion.circle cx="280" cy="110" r="6" fill={colors.primary} animate={{ y: [0, -25, 0], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 2 }} />
            </g>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#050505]/40 rounded-[30px] sm:rounded-[40px] overflow-hidden border border-[#D7E2EA]/5 relative group aspect-video md:aspect-auto">
      {/* Decorative Vector Grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(215,226,234,0.03),rgba(0,0,0,0))]" />
      
      {/* Dynamic Glow Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-700 opacity-60 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle 180px at 50% 50%, ${colors.glow}, transparent 70%)`,
        }}
      />

      {/* Main Vector SVG */}
      <svg
        className="w-[85%] h-[85%] select-none pointer-events-none z-10 transition-transform duration-700 group-hover:scale-[1.03]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderVisualContent()}
      </svg>

      {/* Decorative Tech Metrics Overlays */}
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <span className="text-[10px] tracking-[0.25em] text-[#D7E2EA]/30 uppercase font-mono">
          SYS.VISUAL // {accent.toUpperCase()}
        </span>
      </div>

      <div className="absolute bottom-4 right-6 flex items-center gap-2 font-mono text-[9px] text-[#D7E2EA]/20">
        <span>LOC.TRK // 0{num}</span>
      </div>
    </div>
  );
}
