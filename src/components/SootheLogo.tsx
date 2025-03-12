import React, { useEffect, useRef } from 'react';
import Zdog from 'zdog';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface SootheLogoProps {
  width?: number;
  height?: number;
}

const SootheLogo: React.FC<SootheLogoProps> = ({ width = 240, height = 240 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const illustrationRef = useRef<any>(null);
  const animationRef = useRef<number | null>(null);
  const isSpinning = useRef<boolean>(true);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create Zdog illustration
    const illustration = new Zdog.Illustration({
      element: canvasRef.current,
      dragRotate: true,
      zoom: 0.8,
      onDragStart: () => {
        isSpinning.current = false;
      },
      onDragEnd: () => {
        isSpinning.current = true;
      },
    });

    illustrationRef.current = illustration;

    // Main heart shape with gradient
    const heart = new Zdog.Shape({
      addTo: illustration,
      path: [
        { x: 0, y: -10 },
        { arc: [{ x: -10, y: -10 }, { x: -10, y: 0 }] },
        { arc: [{ x: -10, y: 10 }, { x: 0, y: 20 }] },
        { arc: [{ x: 10, y: 10 }, { x: 10, y: 0 }] },
        { arc: [{ x: 10, y: -10 }, { x: 0, y: -10 }] },
      ],
      closed: true,
      color: '#FF6B6B',
      fill: true,
      stroke: 4,
      backface: '#FF5252',
    });

    // Glow effect
    const glow = new Zdog.Ellipse({
      addTo: heart,
      diameter: 60,
      quarters: 4,
      stroke: 0,
      color: 'rgba(255,107,107,0.3)',
      fill: true,
      translate: { z: -2 },
    });



    // Dynamic eyes with follow effect
    const createEye = (xPos: number) => {
      const eyeGroup = new Zdog.Group({
        addTo: illustration,
        translate: { x: xPos, y: -2, z: 10 },
      });

      new Zdog.Ellipse({
        addTo: eyeGroup,
        width: 8,
        height: 8,
        stroke: 1,
        color: '#FFFFFF',
        fill: true,
      });

      const pupil = new Zdog.Ellipse({
        addTo: eyeGroup,
        width: 3,
        height: 3,
        stroke: 1,
        color: '#2D3436',
        translate: { z: 0.5 },
      });

      return { eyeGroup, pupil };
    };

    const leftEye = createEye(-6);
    const rightEye = createEye(6);

    // Floating particles
    const particles = Array.from({ length: 8 }).map(() => {
      return new Zdog.Ellipse({
        addTo: illustration,
        diameter: Math.random() * 2 + 1,
        translate: {
          x: (Math.random() - 0.5) * 40,
          y: (Math.random() - 0.5) * 40,
          z: (Math.random() - 0.5) * 40,
        },
        stroke: 0.5,
        color: '#FFE9EC',
      });
    });

    // Animation loop
    const animate = () => {
      const time = Date.now() / 1000;

      // Cursor follow effect
      const targetX = (smoothX.get() - width/2) * 0.02;
      const targetY = (smoothY.get() - height/2) * 0.02;
      
      leftEye.pupil.translate.x = targetX * 0.5;
      leftEye.pupil.translate.y = targetY * 0.5;
      rightEye.pupil.translate.x = targetX * 0.5;
      rightEye.pupil.translate.y = targetY * 0.5;

      // Dynamic rotation
      if (isSpinning.current) {
        illustration.rotate.y += 0.005;
        illustration.rotate.x = Math.sin(time * 0.5) * 0.1;
      }

      // Heartbeat animation
      heart.scale.x = heart.scale.y = 1 + Math.sin(time * 5) * 0.03;
      glow.scale = heart.scale;

      // Particle animation
      particles.forEach((particle, index) => {
        particle.translate.z = Math.sin(time * 2 + index) * 10;
        particle.rotate.z += 0.03;
      });

      // Gentle bounce
      illustration.translate.y = Math.sin(time * 1.5) * 2;

      illustration.updateRenderGraph();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }; 
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  return (
    <motion.div
      className="border border-gray-200 flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      onMouseMove={handleMouseMove}
      style={{ width: '100%', height: '100%' }}
    >
      <motion.canvas
        ref={canvasRef}
        width={width}
        height={height}
        className=" shadow-xl"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default SootheLogo;