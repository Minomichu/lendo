export const basicSort = (productList) => {
  return [...productList].sort((a, b) => {
    // First sort by inStock
    if (a.available !== b.available) {
      return a.available ? -1 : 1
    }
    // Then sort by lowest price
    return parseFloat(a.price) - parseFloat(b.price)
  })
}
