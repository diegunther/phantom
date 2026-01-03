'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Panel from './Panel'

const skullLines = [
  "            │",
  "       pN▒g▒p▒g▒▒g▒ge",
  "      ▒▒▒▒▒▒▒░░▒░▒░▒▒▒",
  "    _0▒░▒░▒░░▒▒▒▒▒▒▒▒▒▒!",
  "    4▒▒░░▒▒▒░░░▒░░▒▒▒▒▒▒Y",
  "   /`   \\~~#00░░0     M│",
  "         \\`gM░M7        |",
  "  #▒        g▒0░░P       0",
  "  #▒0g_p# ░04▒▒&,__M#  ▒",
  "   0▒▒░░▒▒00    ]0▒▒░░▒▒00",
  "    │00j▒▒▒0'  `0▒▒▒▒▒▒4M'",
  "  │#▒ ▒▒▒▒&▒▒gg▒▒▒▒▒▒0& │",
  "   \"▒▒ ▒▒00▒▒▒▒00▒▒▒▒'d",
  "     %  ¼▒  ~P▒¼▒▒│¼¼│",
  "    M▒9              ▒j",
  "    l▒g▒   @ 9     ▒¼",
  "     ~▒0▒▒ p ▒g▒▒ ▒%",
  "       @░▒▒▒▒▒  ▒▒░",
  "        M0░░  ░░^",
  "           \\`"
]

const messages = [
  "We are watching...",
  "System vulnerable.",
  "Access granted.",
  "No system is safe.",
  "We don't forget.",
  "Encryption is freedom.",
  "Ghosts in the machine.",
  "Firewall bypassed.",
  "Root obtained.",
  "Trace blocked."
]

export default function SkullDisplay() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [typedMessage, setTypedMessage] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // Type out skull on mount
  useEffect(() => {
    skullLines.forEach((line, i) => {
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, line])
      }, i * 60)
    })
  }, [])

  // Show random messages
  useEffect(() => {
    const showRandomMessage = () => {
      const message = messages[Math.floor(Math.random() * messages.length)]
      setCurrentMessage(message)
      setShowMessage(true)
      setTypedMessage('')

      // Type out message
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < message.length) {
          setTypedMessage(prev => prev + message[i])
          i++
        } else {
          clearInterval(typeInterval)
        }
      }, 20)

      setTimeout(() => {
        setShowMessage(false)
      }, 3500)

      setTimeout(showRandomMessage, 6000 + Math.random() * 7000)
    }

    const timeout = setTimeout(showRandomMessage, 1200)
    return () => clearTimeout(timeout)
  }, [])

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current && Math.random() > 0.94) {
        const transforms = [
          'translate(-12px, 8px)',
          'translate(12px, -8px)',
          'translate(-8px, -4px)',
          'translate(0, 0)'
        ]
        
        containerRef.current.style.transform = transforms[Math.floor(Math.random() * transforms.length)]
        containerRef.current.style.filter = 'hue-rotate(180deg) brightness(1.3)'
        
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transform = ''
            containerRef.current.style.filter = ''
          }
        }, 120)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <Panel title="" icon="">
      <div className="relative flex items-center justify-center min-h-[450px] overflow-hidden">
        {/* Scan line */}
        <motion.div 
          className="absolute left-0 w-full h-0.5"
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            top: '-2px'
          }}
          animate={{ top: ['100%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Speech bubble */}
        <AnimatePresence>
          {showMessage && (
            <motion.div 
              className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-phantom-dark border border-phantom px-4 py-2.5 text-[10px] text-phantom-bright max-w-[250px] text-center z-20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <div className="text-phantom-mid text-[8px] mb-1.5 tracking-[0.125em]">[PHANTOM]</div>
              <div>{typedMessage}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ASCII Skull */}
        <motion.div 
          ref={containerRef}
          className="font-mono text-[clamp(8px,1.4vw,14px)] leading-[1.15] whitespace-pre text-phantom-bright text-shadow-strong"
          animate={{
            transform: [
              'translate(0px, 0px)',
              'translate(2px, -2px)',
              'translate(-2px, -3px)',
              'translate(-3px, 1px)',
              'translate(2px, 2px)',
              'translate(3px, -1px)',
              'translate(-1px, -2px)',
              'translate(1px, 2px)',
              'translate(0px, 0px)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {displayedLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.03, delay: i * 0.03 }}
            >
              {line.split('').map((char, j) => {
                const isGlitchChar = ['▒', '░', '█', '#', '0'].includes(char) && Math.random() > 0.82
                return isGlitchChar ? (
                  <motion.span
                    key={j}
                    className="inline-block"
                    animate={{
                      opacity: [1, 0.8, 1, 0.8, 1],
                      transform: [
                        'translate(0)',
                        'translate(-2px, 1px)',
                        'translate(2px, -1px)',
                        'translate(-1px, 0)',
                        'translate(0)'
                      ],
                      color: [
                        '#ffffff',
                        '#ff3366',
                        '#33ffff',
                        '#ffffff',
                        '#ffffff'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      times: [0, 0.88, 0.9, 0.96, 1]
                    }}
                  >
                    {char}
                  </motion.span>
                ) : (
                  <span key={j}>{char}</span>
                )
              })}
            </motion.div>
          ))}
        </motion.div>

        {/* Glitch blocks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-phantom-bright pointer-events-none"
            style={{
              width: `${Math.random() * 80 + 15}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              boxShadow: '0 0 10px rgba(255,255,255,0.5)'
            }}
            animate={{
              opacity: [0, 0, 0.8, 0, 0.6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              times: [0, 0.93, 0.94, 0.95, 0.96, 1]
            }}
          />
        ))}
      </div>
    </Panel>
  )
}
