'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Panel from './Panel'

const tracks = [
  { title: "Cyberpunk Dreams", artist: "DIGITAL GHOST", duration: "3:45" },
  { title: "Neural Network", artist: "BINARY CODE", duration: "4:12" },
  { title: "Dark Protocol", artist: "PHANTOM BYTE", duration: "5:01" },
  { title: "System Override", artist: "HEX COLLECTIVE", duration: "3:28" }
]

export default function MusicPlayer() {
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(70)
  const [vizData, setVizData] = useState(Array(14).fill(2))

  const currentTrack = tracks[trackIndex]

  // Update visualizer
  useEffect(() => {
    const interval = setInterval(() => {
      setVizData(prev => prev.map(() => 
        isPlaying ? Math.random() * 20 + 2 : 2
      ))
    }, 70)
    return () => clearInterval(interval)
  }, [isPlaying])

  // Update progress
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTrackIndex(i => (i + 1) % tracks.length)
          return 0
        }
        return prev + 0.35
      })
    }, 350)

    return () => clearInterval(interval)
  }, [isPlaying])

  const formatTime = (percentage: number) => {
    const [m, s] = currentTrack.duration.split(':').map(Number)
    const totalSeconds = m * 60 + s
    const currentSeconds = Math.floor(totalSeconds * percentage / 100)
    const mins = Math.floor(currentSeconds / 60)
    const secs = currentSeconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Panel title="Player" icon="♪">
      {/* Track Display */}
      <motion.div 
        className="text-center mb-3 p-3 border border-phantom bg-black/40 relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
      >
        <motion.div 
          className="absolute top-0 w-full h-full"
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
            left: '-100%'
          }}
          animate={{ left: ['100%'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="text-[10px] text-phantom-bright tracking-wider mb-1 text-shadow-glow">
          {currentTrack.title}
        </div>
        <div className="text-[9px] text-phantom-mid tracking-[0.125em]">
          {currentTrack.artist}
        </div>
      </motion.div>

      {/* Visualizer */}
      <div className="flex justify-center items-end gap-0.5 h-[25px] mb-3">
        {vizData.map((height, i) => (
          <motion.div
            key={i}
            className="w-[3px] bg-phantom-bright"
            style={{ boxShadow: '0 0 6px rgba(255,255,255,0.4)' }}
            animate={{ height: `${height}px` }}
            transition={{ duration: 0.08 }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="h-[3px] bg-phantom-text-dark mb-2 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 3px,
              rgba(0,0,0,0.2) 3px,
              rgba(0,0,0,0.2) 6px
            )`
          }}
        />
        <motion.div 
          className="h-full bg-phantom-bright"
          style={{ 
            width: `${progress}%`,
            boxShadow: '0 0 8px rgba(255,255,255,0.5)'
          }}
        />
      </div>

      {/* Time Display */}
      <div className="flex justify-between text-[9px] text-phantom-mid mb-3 tracking-wider">
        <span>{formatTime(progress)}</span>
        <span>{currentTrack.duration}</span>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-1.5 mb-3">
        <motion.button
          className="bg-transparent border border-phantom-dim text-phantom-bright w-[30px] h-[30px] text-[10px] relative overflow-hidden"
          whileHover={{ 
            borderColor: 'rgb(200, 204, 208)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setTrackIndex(i => (i - 1 + tracks.length) % tracks.length)
            setProgress(0)
          }}
        >
          ◄◄
        </motion.button>

        <motion.button
          className="bg-transparent border border-phantom-dim text-phantom-bright w-[38px] h-[38px] text-[10px] relative overflow-hidden"
          whileHover={{ 
            borderColor: 'rgb(200, 204, 208)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? '▮▮' : '▶'}
        </motion.button>

        <motion.button
          className="bg-transparent border border-phantom-dim text-phantom-bright w-[30px] h-[30px] text-[10px] relative overflow-hidden"
          whileHover={{ 
            borderColor: 'rgb(200, 204, 208)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setTrackIndex(i => (i + 1) % tracks.length)
            setProgress(0)
          }}
        >
          ►►
        </motion.button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2 text-[9px] text-phantom-mid tracking-wider">
        <span>VOL</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="flex-1 h-[3px] bg-phantom-text-dark appearance-none cursor-pointer"
          style={{
            accentColor: 'white'
          }}
        />
        <span className="w-6 text-right">{volume}</span>
      </div>
    </Panel>
  )
}
