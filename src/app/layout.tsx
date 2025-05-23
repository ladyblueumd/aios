import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI/OS - AI Automation Platform | Sadie the Tech Lady Services',
  description: 'AI automation management provided by Sadie the Tech Lady Services. Intelligent AI solutions, automated workflows, and cutting-edge technology management.',
  keywords: ['AI automation', 'artificial intelligence', 'workflow automation', 'AI solutions', 'tech automation', 'AI services', 'intelligent systems'],
  authors: [{ name: 'Sadie Thornton', url: 'https://aios.tech' }],
  openGraph: {
    title: 'AI/OS - AI Automation Platform',
    description: 'AI automation management provided by Sadie the Tech Lady Services. Intelligent solutions for modern businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AI/OS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI/OS - AI Automation Platform',
    description: 'AI automation management provided by Sadie the Tech Lady Services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00BFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} h-full bg-sadie-light text-sadie-text-light font-metro antialiased`}>
        <div className="min-h-full flex flex-col">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
        
        {/* Background pattern for Metro UI feel */}
        <div className="fixed inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-sky-blue via-transparent to-emerald-green"></div>
        </div>
      </body>
    </html>
  )
}