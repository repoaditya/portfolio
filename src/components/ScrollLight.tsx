import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollLight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lightOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const lightScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Spotlight gradient */}
      <motion.div
        style={{
          opacity: lightOpacity,
          scale: lightScale,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent" />
      </motion.div>

      {/* Text reveal */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-4 text-shadow-lg">
          ADITYA ANKUR
        </h1>
        <p className="text-xl text-blue-400 mb-2">
          DevOps Engineer
        </p>
        <p className="text-gray-400">
          Cloud & Automation Specialist
        </p>
      </motion.div>
    </div>
  );
} 