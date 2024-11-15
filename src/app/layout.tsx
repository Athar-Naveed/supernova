import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { Provider } from 'react-redux/es/exports';
// import { store } from '@/redux/store';

export const metadata: Metadata = {
  title: 'Supernova an ecommerce store',
  description: 'Designed and Developed by Athar Naveed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-w-[320px]'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
