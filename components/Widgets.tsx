'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Panel from './Panel'

// Weather Component
export function Weather() {
  const [weather, setWeather] = useState({
    temp: 0,
    desc: '---',
    humidity: 0,
    wind: 0
  })

  useEffect(() => {
    const updateWeather = () => {
      const conditions = ['CLEAR', 'CLOUDY', 'OVERCAST', 'RAIN']
      setWeather({
        temp: Math.floor(Math.random() * 18 + 6),
        desc: conditions[Math.floor(Math.random() * conditions.length)],
        humidity: Math.floor(Math.random() * 35 + 40),
        wind: Math.floor(Math.random() * 20 + 5)
      })
    }
    updateWeather()
  }, [])

  return (
    <Panel title="Weather" icon="◇">
      <div className="text-center py-2 relative">
        <motion.div 
          className="text-2xl text-phantom-bright tracking-[0.125em] text-shadow-glow mb-1"
          animate={{ textShadow: ['0 0 15px rgba(255,255,255,0.3)', '0 0 25px rgba(255,255,255,0.5)', '0 0 15px rgba(255,255,255,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {weather.temp}°
        </motion.div>
        <motion.div 
          className="text-[9px] text-phantom-mid mt-1 tracking-[0.125em]"
          animate={{ 
            transform: ['translate(0)', 'translate(-1px, 0)', 'translate(1px, 0)', 'translate(0)'],
            color: ['#c8ccd0', '#ff3366', '#33ffff', '#c8ccd0']
          }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.97, 0.98, 0.99] }}
        >
          {weather.desc}
        </motion.div>
        
        <div className="flex justify-around mt-3 pt-3 border-t border-phantom text-[8px]">
          <div>
            <div className="text-phantom-bright mb-0.5">{weather.humidity}%</div>
            <div className="text-phantom-mid tracking-wider">HUMID</div>
          </div>
          <div>
            <div className="text-phantom-bright mb-0.5">{weather.wind}</div>
            <div className="text-phantom-mid tracking-wider">WIND</div>
          </div>
        </div>
      </div>
    </Panel>
  )
}

// Network Component
export function Network() {
  const [graphData, setGraphData] = useState(Array(20).fill(3))
  const [speeds, setSpeeds] = useState({ download: 0, upload: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setGraphData(prev => [...prev.slice(1), Math.random() * 40 + 3])
      setSpeeds({
        download: Math.floor(Math.random() * 350 + 50),
        upload: Math.floor(Math.random() * 120 + 20)
      })
    }, 350)
    return () => clearInterval(interval)
  }, [])

  return (
    <Panel title="Network" icon="◈">
      <div className="h-[50px] flex items-end gap-px mt-2 relative">
        <motion.div 
          className="absolute top-0 w-0.5 h-full bg-white/10"
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {graphData.map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-phantom-mid"
            style={{ 
              height: `${height}px`,
              boxShadow: '0 0 4px rgba(255,255,255,0.2)'
            }}
            animate={{ height: `${height}px` }}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2.5 text-[9px] text-phantom-mid tracking-wider">
        <span>↓ {speeds.download} KB/s</span>
        <span>↑ {speeds.upload} KB/s</span>
      </div>
    </Panel>
  )
}

// Crypto Component
export function Crypto() {
  const [cryptoData, setCryptoData] = useState([
    { name: 'BTC', price: 43000, change: 0 },
    { name: 'ETH', price: 2300, change: 0 },
    { name: 'XMR', price: 160, change: 0 }
  ])

  useEffect(() => {
    const updateCrypto = () => {
      setCryptoData([
        { name: 'BTC', price: 43000 + Math.random() * 2000, change: Math.random() * 6 - 3 },
        { name: 'ETH', price: 2300 + Math.random() * 200, change: Math.random() * 8 - 4 },
        { name: 'XMR', price: 160 + Math.random() * 20, change: Math.random() * 10 - 5 }
      ])
    }
    updateCrypto()
    const interval = setInterval(updateCrypto, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Panel title="Crypto" icon="◆">
      <div>
        {cryptoData.map((crypto) => (
          <motion.div
            key={crypto.name}
            className="flex justify-between items-center py-2 border-b border-phantom last:border-b-0 text-[8px] transition-all"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            <span className="text-phantom-mid tracking-[0.125em] w-[35px]">{crypto.name}</span>
            <motion.span 
              className="text-phantom-bright flex-1 text-center"
              animate={{ opacity: [1, 0.6, 1, 0.8, 1] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.92, 0.94, 0.95, 1] }}
            >
              ${crypto.price.toLocaleString('en', { maximumFractionDigits: 0 })}
            </motion.span>
            <span className="w-[45px] text-right text-[9px] text-phantom-mid">
              {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(1)}%
            </span>
          </motion.div>
        ))}
      </div>
    </Panel>
  )
}

// Activity Log Component
export function ActivityLog() {
  const [logs, setLogs] = useState<Array<{ time: string; message: string }>>([])

  const logMessages = ['Connected', 'Port scan', 'Encrypted', 'Routed', 'Firewall OK', 'VPN active', 'Synced', 'Hash OK']

  const addLog = () => {
    const time = new Date().toLocaleTimeString('en', { hour12: false })
    const message = logMessages[Math.floor(Math.random() * logMessages.length)]
    setLogs(prev => [{ time, message }, ...prev.slice(0, 11)])
  }

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      setTimeout(addLog, i * 120)
    }
    const interval = setInterval(addLog, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Panel title="Log" icon="▤">
      <div className="max-h-[120px] overflow-y-auto text-[9px]">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            className="flex gap-2.5 py-1.5 border-b border-phantom"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-phantom-mid tracking-wider min-w-[50px]">{log.time}</span>
            <span className="text-phantom-bright relative">
              {log.message}
              {i === 0 && (
                <motion.span
                  className="ml-0.5"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  █
                </motion.span>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </Panel>
  )
}

// Quick Actions Component
export function QuickActions({ onAddLog }: { onAddLog?: () => void }) {
  const actions = [
    { label: 'SCAN', action: () => console.log('Scan initiated') },
    { label: 'CLEAR', action: () => console.log('Cleared') },
    { label: 'SYNC', action: () => console.log('Syncing...') },
    { label: 'PING', action: onAddLog || (() => console.log('Ping')) }
  ]

  return (
    <Panel title="Actions" icon="▣">
      <div className="flex gap-1.5 flex-wrap">
        {actions.map((action) => (
          <motion.button
            key={action.label}
            className="bg-transparent border border-phantom-dim text-phantom-mid px-3 py-2 text-[9px] tracking-[0.125em] relative overflow-hidden"
            whileHover={{ 
              borderColor: 'rgb(200, 204, 208)',
              color: 'rgb(200, 204, 208)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              boxShadow: '0 0 10px rgba(255,255,255,0.15)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={action.action}
          >
            {action.label}
          </motion.button>
        ))}
      </div>
    </Panel>
  )
}
