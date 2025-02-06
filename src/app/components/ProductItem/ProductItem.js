import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { createSlug } from '@/app/utils/utils'
import BinIcon from '@/app/icons/bin'
import styles from './ProductItem.module.scss'

const ProductItem = ({ 
  id, 
  brand, 
  name, 
  price, 
  inStock=true,
  horizontal=true, 
  productItemWidth, 
  cartView=false, 
  singlePage, 
  useProductSlug=false,
}) => {
  const { cartItems, setCartItems, getCartItemQuantity } = useCart()

  const productInCart = cartItems.find(item => item.id === id)
  const quantityInCart = getCartItemQuantity(id)

  const image = "/images/productImage.jpg"
  const alt = "alt"
  const totalItemPrice = price * quantityInCart


  const handleFullItemDelete = () => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const handleAddToCart = () => {
    if (productInCart) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setCartItems(prev => [...prev, { id, name, brand, price, quantity: 1 }])
    }
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 0) return
    setCartItems(prev => {
      if (newQuantity === 0) {
        return prev.filter(item => item.id !== id)
      }
      return prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    })
  }


  return ( 
    <div
      className={`
        ${horizontal ? singlePage ? styles.largeProductItemWide : styles.productItemWide : styles.productItemTall}
        ${!inStock ? styles.outOfStock : ''}
      `}
      style={{
        width: productItemWidth || '',
      }}
    >
      <Link
        href={useProductSlug ? `/product/${id}/${createSlug(name)}` : '#'}
        onClick={(e) => {
          if (!useProductSlug) {
            e.preventDefault()
          }
        }}
      >
        <Image
          src={image}
          className={`${styles.productImage} ${useProductSlug ? styles.popOnHover : ''}`}
          width={150}
          height={226}
          alt={alt}
        />
      </Link>
      <div className={styles.productInfo}>
        {cartView && (
          <button
            className={styles.deleteButton}
            onClick={handleFullItemDelete}
          >
            <BinIcon />
          </button>
        )}
        
        <div className={styles.text}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price} kr</p>
        </div>
        <div className={styles.buttonContainer}>
          {cartView && (
            <p className={styles.totalItemPrice}>Total: {totalItemPrice}</p>
          )}
          {!productInCart ? (
            <button
              className={styles.addToCart}
              onClick={handleAddToCart}
              disabled={!inStock}
            >{inStock ? 'Buy' : 'Out of stock'}</button>
              ) : (
            <>
              <button className={styles.addSubtractButton} onClick={() => handleQuantityChange(quantityInCart - 1)}>-</button>
              <input 
                type="number"
                className={styles.editableInput}
                value={quantityInCart}
                min="0"
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 0)}
              />
              <button className={styles.addSubtractButton} onClick={() => handleQuantityChange(quantityInCart + 1)}>+</button>
            </>
          )}
        </div>
      </div>
    </div>
   )
}
 
export default ProductItem