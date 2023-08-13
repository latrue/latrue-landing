import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Latrue Magazine',
  description: 'La revista de arte emergente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <div className='font-Space tracking-wider'>
        <Navbar/>
        <Hero/>
        <body>{children}</body>
        <About/>
        <Footer/>
      </div>
    </html>
  )
}
