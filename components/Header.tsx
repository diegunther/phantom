'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [time, setTime] = useState('00:00:00')
  const [date, setDate] = useState('0000-00-00')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en', { hour12: false }))
      setDate(now.toISOString().split('T')[0])
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="col-span-full flex justify-between items-center px-4 py-3 border-b border-phantom relative">
      {/* Animated line under header */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div 
        className="text-xs text-phantom-bright tracking-[0.25em] text-shadow-glow"
        animate={{
          textShadow: [
            '0 0 30px rgba(255,255,255,0.2)',
            '0 0 30px rgba(255,255,255,0.2)',
            '-2px 0 #ff3366, 2px 0 #33ffff',
            '2px 0 #ff3366, -2px 0 #33ffff',
            '0 0 30px rgba(255,255,255,0.2)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          times: [0, 0.94, 0.95, 0.96, 0.97]
        }}
      >
        &gt;PHANTOM://
      </motion.div>

      <div className="flex gap-5 text-[11px] text-phantom-mid tracking-[0.125em]">
        <div className="flex items-center gap-1.5">
          <motion.div 
            className="w-1.5 h-1.5 bg-phantom-bright"
            style={{ boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>SECURE</span>
        </div>
        <div>{time}</div>
        <div>{date}</div>
      </div>
    </header>
  )
}
