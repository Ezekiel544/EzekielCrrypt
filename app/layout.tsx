import type { Metadata } from 'next'
import { Space_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// 👇 add your floating button import
import WhatsAppButton from "@/components/WhatsAppButton"

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'EzekielCrrypt | Full Stack Developer | Ezekiel Chikezie | Web3 Enthusiast| Blockchain Developer| Software Engineer| Crypto Innovator',
  description: 'Full-stack developer passionate about creating digital experiences that bridge creativity and functionality.',
  keywords: ['developer', 'portfolio','Ezekiel chikezie' ,'full-stack','backend-developer','mobile-developer', 'react', 'nextjs', 'typescript',"web development", "software engineering", "programming", "coding", "technology", "innovation", "web design", "user experience","blockchain", "web3", "cryptocurrency", "decentralized applications", "smart contracts", "solidity", "node.js", "express.js", "mongodb", "firebase", "tailwindcss", "react.js", "next.js", "typescript", "javascript", "python", "telegram bot", "wax blockchain", "prediction markets", "vechain", "decentralized finance", "defi", "nft", "non-fungible tokens", "crypto trading", "crypto analytics", "portfolio management", "price alerts", "web3 marketing", "community growth", "content strategy", "viral content", "blockchain ecosystem"],
  icons: {
    icon: [
      {
        url: '/Ezekielcrrypt.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Ezekielcrrypt.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Ezekielcrrypt.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Ezekielcrrypt.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        
        {/* Page content */}
        {children}

        {/* Floating WhatsApp Button (shows on all pages) */}
        <WhatsAppButton />

        {/* Analytics (only production) */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}