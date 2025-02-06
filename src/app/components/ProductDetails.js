'use client'
import ProductItem from '@/app/components/ProductItem/ProductItem'

const ProductDetails = ({ product }) => {
  return ( 
    <ProductItem
      id={product.id}
      brand={product.brand}
      name={product.name}
      price={product.price}
      inStock={product.available}
      singlePage
    />
   )
}
 
export default ProductDetails