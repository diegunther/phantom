'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <>
      {/* Animated Grid Background */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Secondary grid for depth */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />
      </motion.div>

      {/* Scanlines */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1000]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.12) 2px,
            rgba(0, 0, 0, 0.12) 4px
          )`
        }}
      />

      {/* Vignette */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)'
        }}
      />
    </>
  )
}
