import './globals.css'
import Navbar from './components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex Gardiner',
  description: 'My Portfolio',
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
