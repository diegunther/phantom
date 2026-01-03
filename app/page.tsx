'use client'

import Background from '@/components/Background'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SystemStats from '@/components/SystemStats'
import SkullDisplay from '@/components/SkullDisplay'
import MusicPlayer from '@/components/MusicPlayer'
import { Weather, Network, Crypto, ActivityLog, QuickActions } from '@/components/Widgets'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[260px_1fr_260px] grid-rows-[auto_1fr_auto] gap-2.5 p-2.5 min-h-screen relative z-10">
        <Header />

        {/* Left Column */}
        <div className="flex flex-col gap-2.5">
          <SystemStats />
          <Weather />
          <Network />
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-2.5 md:col-span-2 lg:col-span-1 md:order-first lg:order-none">
          <SkullDisplay />
          <QuickActions />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2.5">
          <MusicPlayer />
          <Crypto />
          <ActivityLog />
        </div>

        <Footer />
      </div>
    </main>
  )
}
