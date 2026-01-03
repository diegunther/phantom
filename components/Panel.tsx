'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PanelProps {
  title: string
  icon?: string
  children: ReactNode
  className?: string
}

export default function Panel({ title, icon = '◻', children, className = '' }: PanelProps) {
  return (
    <motion.div 
      className={`bg-panel border border-phantom p-3 relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top border glow */}
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
      />
      
      {/* Sweep effect */}
      <motion.div 
        className="absolute top-0 w-1/2 h-full"
        style={{ 
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)',
          left: '-50%'
        }}
        animate={{ left: ['150%'] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Panel Header */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-phantom">
        <motion.span 
          className="text-[10px] text-phantom-mid tracking-[0.1875em] uppercase"
          whileHover={{ 
            animation: 'text-glitch 0.3s steps(2)' 
          }}
        >
          {title}
        </motion.span>
        <motion.span 
          className="text-[10px] text-phantom-mid"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {icon}
        </motion.span>
      </div>

      {/* Panel Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
