import React, { useEffect, useRef } from 'react';

const POINTS = 32; // densité du mesh
const SPEED = 0.3; // vitesse d'animation

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function AnimatedMeshBackground({
  className = '',
  color = '#818cf8', // bleu-violet
  lineColor = '#a5b4fc', // bleu clair
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  lineColor?: string;
  opacity?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const points = useRef(
    Array.from({ length: POINTS }, () => ({
      x: random(0, 100),
      y: random(0, 100),
      dx: random(-SPEED, SPEED),
      dy: random(-SPEED, SPEED),
    }))
  );

  useEffect(() => {
    let frame: number;
    const animate = () => {
      points.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > 100) p.dx *= -1;
        if (p.y < 0 || p.y > 100) p.dy *= -1;
      });
      if (ref.current) {
        ref.current.innerHTML = ref.current.innerHTML; // force rerender
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg
      ref={ref}
      className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      style={{ opacity }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {points.current.map((p, i) =>
        points.current.map((q, j) => {
          if (i < j) {
            const dist = Math.hypot(p.x - q.x, p.y - q.y);
            if (dist < 18) {
              return (
                <line
                  key={`l${i}-${j}`}
                  x1={p.x}
                  y1={p.y}
                  x2={q.x}
                  y2={q.y}
                  stroke={lineColor}
                  strokeWidth={0.3}
                  opacity={0.3}
                />
              );
            }
          }
          return null;
        })
      )}
      {points.current.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={0.8}
          fill={color}
          opacity={0.7}
        />
      ))}
    </svg>
  );
} 