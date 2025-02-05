import ProductItem from './components/ProductItem/ProductItem'
import products from './data/inventory.json'
import styles from './startpage.module.scss'

export default function Home() {
  return (
    <div className={styles.productsContainer}>
      {products.items.map((product) => (
        <ProductItem
          key={product.id}
          brand={product.brand}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  )
}
