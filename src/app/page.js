'use client'
import { useState, useEffect } from 'react'
import products from './data/inventory.json'
import { basicSort } from './utils/utils'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './startpage.module.scss'
import ProductList from './components/ProductList/ProductList'

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
      <ProductList
        productsInList={filteredProducts}
        columnView={false}
        horizontal={false}
      />
    </div>
  )
}
