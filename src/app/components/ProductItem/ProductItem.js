import Image from 'next/image'
import styles from './ProductItem.module.scss'

const ProductItem = ({ brand, name, price }) => {

  const itemAdded = false
  const horizontal = false

  const image = "/images/productImage.jpg"
  const alt = "alt"
  return ( 
    <div
      className={horizontal ? styles.productContainerHorizontal : styles.productContainerVertical}
    >
      <Image
        src={image}
        className={styles.productImage}
        width={150}
        height={226}
        alt={alt}
      />
      <div className={styles.productInfo}>
        <div className={styles.text}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price} kr</p>
        </div>
        <div className={styles.buttonContainer}>
          {!itemAdded ? (
            <button className={styles.addToCart}></button>
          ) : (
            <>
              <button>-</button>
              <input 
                type="number"
                className={styles.userInputNumber}
              />
              <button>+</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
 
export default ProductItem