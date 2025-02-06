'use client'
import { useCart } from '@/context/CartContext'
import ProductList from '../ProductList/ProductList'
import styles from './CartSlider.module.scss'


const CartSlider = () => {
  const { showCart, cartItems } = useCart()

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className={styles.cartSliderContainer}
      style={{
        transition: `${!showCart ? '0.5s' : '0.8s'} ease-in-out`,
        transform: showCart ? 'translateX(0)' : 'translateX(+100%)'
      }}
    >
      {cartItems.length ? (
        <>
          <ProductList
            productsInList={cartItems}
            productItemWidth="100%"
            cartView
          />
          <div className={styles.bottomBlock}>
            <p className={styles.totalPrice}>Total: <span>{totalPrice} kr</span></p>
            <button>Go to checkout</button>
          </div>
        </>
      ) : (
        <p className={styles.nothingInCart}>Your shopping cart is empty.</p>
      )}
    </div>
  )
}
 
export default CartSlider