'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [sessionId, setSessionId] = useState('--------')

  useEffect(() => {
    const chars = '0123456789abcdef'
    let id = ''
    for (let i = 0; i < 8; i++) {
      id += chars[Math.floor(Math.random() * 16)]
    }
    setSessionId(id)
  }, [])

  return (
    <footer className="col-span-full flex justify-between px-4 py-2.5 border-t border-phantom text-[9px] text-phantom-mid tracking-[0.125em]">
      <div>PHANTOM v1.0</div>
      <div>{sessionId}</div>
    </footer>
  )
}
