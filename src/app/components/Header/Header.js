'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import CartIcon from '@/app/icons/cart'
import styles from './Header.module.scss'
import Logo from '@/app/icons/logo'
import { useCart } from '@/context/CartContext'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { toggleCart, cartItems } = useCart()
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)


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
        <p className={styles.itemsInCart}>{totalQuantity}</p>
        <CartIcon width={38} height={38} fill="#28C166" />
      </div>
    </nav>
   )
}
 
export default Header