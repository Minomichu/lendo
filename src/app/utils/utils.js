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


export const createSlug = ( name ) => {
  
  const nameWithoutExtraWhitespace = name.replace(/\s+/g, ' ').trim()
  const lowercaseName = nameWithoutExtraWhitespace.toLowerCase()

  const replaceCharacters = {
    'ø': 'o',
    'œ': 'o',
  }

  // Activates replaceCharacters for the name
  let updatedName = lowercaseName.replace(/./g, (match) => {
    return replaceCharacters[match] ? replaceCharacters[match] : match
  })

  // Makes for example é to two separate characters, e + \`, so we can remove the apostrophe in the next step
  const separateDiacriticMarks = updatedName.normalize("NFD")

  // Standardized replacement of all characters not being in the English alphabet
  const slugFriendlyName = separateDiacriticMarks.replace(/[\u0300-\u036f]/g, "")

  // Replace whitespace with dash
  const slug = slugFriendlyName.replace(/\s+/g, "-")

  // The slug can only contain lowercase letters from the standard English alphabet, digits and dashes
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("slug contains non-alphabetic or non-digit characters")
  }

  return slug
}
