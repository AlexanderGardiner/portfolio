import './globals.css'
import Navbar from './components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex Gardiner | Computer Science Portfolio',
  description:
    'The computer science and video production portfolio of Alex Gardiner, featuring software engineering, AI/ML, robotics, and media projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='max-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
