import { motion } from 'framer-motion';
import type { Project } from '@/types/project';

interface ProjectGalleryProps {
  /** Gallery items: a path, or { src, label } for a captioned card. */
  items: NonNullable<Project['gallery']>;
  /** Resolved accent colour (hex/rgb) for glows, borders and captions. */
  accentColor: string;
}

/**
 * ProjectGallery — the modal's "real media" viewport.
 *
 * Renders up to three GIF/image cards as a depth-staggered cascade that lives
 * inside ProjectModal's preserve-3d parallax container, so cursor movement
 * pushes the cards through real 3D space. Designed to drop in wherever the
 * generative <ProjectVisual /> motion used to sit.
 */

// Per-slot choreography. Index 0 sits back, the middle card leans forward most,
// the third anchors the foreground — a diagonal cascade rather than a flat grid.
const SLOTS = [
  { top: '2%', left: '0%', rotate: -6, z: 0, w: '64%', float: -7 },
  { top: '30%', left: '34%', rotate: 4, z: 64, w: '66%', float: 8 },
  { top: '60%', left: '6%', rotate: -3, z: 30, w: '60%', float: -5 },
] as const;

export default function ProjectGallery({ items, accentColor }: ProjectGalleryProps) {
  const cards = items.slice(0, 3).map((item) =>
    typeof item === 'string' ? { src: item, label: undefined } : item,
  );

  return (
    <div
      className="relative w-full h-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {cards.map((card, i) => {
        const slot = SLOTS[i] ?? SLOTS[SLOTS.length - 1];
        return (
          <motion.figure
            key={`${card.src}-${i}`}
            className="absolute aspect-video rounded-2xl overflow-hidden m-0"
            style={{
              top: slot.top,
              left: slot.left,
              width: slot.w,
              transform: `translateZ(${slot.z}px) rotate(${slot.rotate}deg)`,
              transformStyle: 'preserve-3d',
              border: `1px solid ${accentColor}33`,
              background: '#050505',
              boxShadow: `0 24px 60px -20px rgba(0,0,0,0.85), 0 0 38px -14px ${accentColor}55`,
              zIndex: i === 1 ? 3 : i === 2 ? 2 : 1,
            }}
            initial={{ opacity: 0, y: 26, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.12 + i * 0.12,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Gentle holographic float, offset per card for organic life. */}
            <motion.div
              className="w-full h-full relative"
              animate={{ y: [0, slot.float, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6 + i,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              <img
                src={card.src}
                alt={card.label ?? ''}
                loading="lazy"
                className="w-full h-full object-cover"
                draggable={false}
              />

              {/* Bottom legibility veil so captions never fight the footage. */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

              {/* Inner edge highlight for that glassy panel feel. */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />

              {card.label && (
                <figcaption className="absolute bottom-3 left-3.5 flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#D7E2EA]/85">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                  />
                  {card.label}
                </figcaption>
              )}

              {/* Per-card frame index, echoing the SYS overlays elsewhere. */}
              <span className="absolute top-2.5 right-3 font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-[#D7E2EA]/30 uppercase">
                REC.0{i + 1}
              </span>
            </motion.div>
          </motion.figure>
        );
      })}
    </div>
  );
}
