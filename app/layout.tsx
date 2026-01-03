import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'PHANTOM:// Dashboard',
  description: 'Cyberpunk terminal dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.variable}>{children}</body>
    </html>
  )
}
