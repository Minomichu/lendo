import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import '../styles.scss'
import CartSlider from './components/CartSlider/CartSlider'
import { CartProvider } from '@/context/CartContext'
import ScrollController from './components/ScrollController'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Tjoho',
    default: 'Hej hopp',
  },
  description: 'Här är en sida',
}

export const viewport = {
  themeColor: '#FFC0CB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ScrollController />
        <div className='surroundingContainer'>
          <Header />
          <CartSlider />
          <main className='surroundAllPages'>
            <div className='globalMargin'>
              {children}
            </div>
          </main>
          <Footer />
        </div>
        </CartProvider>
      </body>
    </html>
  )
}
