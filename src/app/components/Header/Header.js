'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import Logo from '@/app/icons/logo'
import CartIcon from '@/app/icons/cart'
import styles from './Header.module.scss'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { toggleCart } = useCart()


  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide navbar on scrollDown and show on scrollUp
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
    
      setLastScrollY(currentScrollY)
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  

  return ( 
    <nav
      className={`${styles.header} ${showNavbar ? styles.visible : ''}`}
    >
      <Link href="/"><Logo /></Link>
      <ul className={styles.headerContent}>
        <li>Sida 2</li>
      </ul>
      <div
        className={styles.cartIcon}
        onClick={toggleCart}
      >
        <CartIcon width={38} height={38} fill="pink" />
      </div>
    </nav>
  )
}
 
export default Header