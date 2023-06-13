import NavBar from '@/components/layout/navbar'
import './globals.css'
import { Playfair_Display } from 'next/font/google'
import Whatsapp from '@/components/layout/whatsapp'
import Footer from '@/components/layout/footer'
import Footers from '@/components/layout/footers'


const font = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Jhunjhunwala Diamonds',
  description: 'Jhunjhunwala Diamonds',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={` relative ${font.className}`}>
        <div className='flex justify-center w-full'>
        <NavBar />
        </div>
        <div>
        {children}
        </div>
        <Whatsapp />
        <Footers />

        </body>
    </html>
  )
}
