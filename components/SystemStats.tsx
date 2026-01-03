'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Panel from './Panel'

interface Stat {
  label: string
  value: number
  base: number
  range: number
}

export default function SystemStats() {
  const [stats, setStats] = useState<Stat[]>([
    { label: 'CPU', value: 0, base: 25, range: 45 },
    { label: 'MEM', value: 0, base: 40, range: 35 },
    { label: 'NET', value: 0, base: 10, range: 55 },
    { label: 'DSK', value: 0, base: 55, range: 20 },
  ])

  useEffect(() => {
    const updateStats = () => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: Math.floor(Math.random() * stat.range + stat.base)
      })))
    }

    updateStats()
    const interval = setInterval(updateStats, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Panel title="System" icon="◻">
      <div className="space-y-2.5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center text-[8px] relative">
            {/* Scan effect */}
            <motion.div 
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <span className="w-8 text-phantom-mid tracking-wider">{stat.label}</span>
            
            <div className="flex-1 h-1 bg-phantom-text-dark mx-2 relative overflow-hidden">
              {/* Pattern overlay */}
              <div 
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(0,0,0,0.3) 2px,
                    rgba(0,0,0,0.3) 4px
                  )`
                }}
              />
              
              <motion.div 
                className="h-full bg-phantom-bright"
                style={{ boxShadow: '0 0 8px rgba(255,255,255,0.3)' }}
                initial={{ width: 0 }}
                animate={{ width: `${stat.value}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            <motion.span 
              className="w-8 text-right text-phantom-bright text-[9px]"
              animate={{ opacity: [1, 0.5, 1, 0.7, 1] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                times: [0, 0.95, 0.96, 0.98, 1]
              }}
            >
              {stat.value}%
            </motion.span>
          </div>
        ))}
      </div>
    </Panel>
  )
}
