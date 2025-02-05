'use client'
import { useState } from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = ({ onSearch }) => {
  const [searchFor, setSearchFor] = useState('')

  const handleChange = (e) => {
    setSearchFor(e.target.value)
    onSearch(e.target.value)
  }
  
  return ( 
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        value={searchFor}
        onChange={handleChange}
      />
    </div>
  )
}
 
export default SearchBar