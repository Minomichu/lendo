import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import '../styles.scss'

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
        <div className='surroundingContainer'>
          <Header />
          <main className='surroundAllPages'>
            <div className='globalMargin'>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
