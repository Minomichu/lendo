'use client'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'

const ScrollController = () => {
  const { showCart } = useCart()

  useEffect(() => {
    document.body.style.overflow = showCart ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showCart])

  return null
}

export default ScrollController
