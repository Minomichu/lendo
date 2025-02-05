'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/checkout') {
      setShowCart(false)
    }
  }, [pathname])

  const toggleCart = () => setShowCart(prev => !prev)

  return (
    <CartContext.Provider value={{ showCart, setShowCart, toggleCart, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
