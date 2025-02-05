'use client'
import { useCart } from '@/context/CartContext'
import styles from './CartSlider.module.scss'


const CartSlider = () => {
  const { showCart } = useCart()

  return (
    <ul
      className={styles.cartSliderContainer}
      style={{
        transition: `${!showCart ? '0.5s' : '0.8s'} ease-in-out`,
        transform: showCart ? 'translateX(0)' : 'translateX(+100%)'
      }}
    >
      <li>Vara 1</li>
      <li>Vara 2</li>
    </ul>
  )
}
 
export default CartSlider