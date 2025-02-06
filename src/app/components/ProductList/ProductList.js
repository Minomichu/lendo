import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.scss'


const ProductList = ({ columnView, productsInList, horizontal, productItemWidth, cartView, useProductSlug }) => {
  return ( 
    <ul className={columnView ? styles.columnContainer : styles.rowContainer}>
      {productsInList.map((product) => (
        <li
          key={product.id}
          style={{
            width: productItemWidth || ''
          }}
        >
          <ProductItem
            id={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            inStock={product.available}
            horizontal={horizontal}
            productItemWidth={productItemWidth}
            cartView={cartView}
            useProductSlug={useProductSlug}
          />
        </li>
      ))}
    </ul>
   )
}
 
export default ProductList