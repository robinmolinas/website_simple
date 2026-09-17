import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const activationDistance = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < activationDistance) {
      setIsActive(true);
      setTransform(`translate3d(${distX / strength}px, ${distY / strength}px, 0)`);
    } else {
      setIsActive(false);
      setTransform('translate3d(0, 0, 0)');
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setTransform('translate3d(0, 0, 0)');
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
