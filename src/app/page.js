'use client'
import { useState, useEffect } from 'react'
import products from './data/inventory.json'
import { basicSort } from './utils/utils'
import ProductItem from './components/ProductItem/ProductItem'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './startpage.module.scss'

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const sortedProducts = basicSort(products.items)
    setFilteredProducts(sortedProducts)
  }, [])

  const handleSearch = (query) => {
    const searchTerms = query.toLowerCase().split(' ')

    let filtered = products.items.filter((product) => {
      const productName = product.name.toLowerCase()
      return searchTerms.every(allSearchContent => productName.includes(allSearchContent))
    })

    setFilteredProducts(basicSort(filtered))
  }
  

  return (
    <div className={styles.startPageContainer}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            inStock={product.available}
          />
        ))}
      </div>
    </div>
  )
}
