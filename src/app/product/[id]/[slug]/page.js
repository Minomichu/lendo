
import Link from 'next/link'
import products from '../../../data/inventory.json'
import styles from './single-product.module.scss'
import ProductDetails from '@/app/components/ProductDetails'


export default async function SingleProduct({ params }) {
  const { id } = await params

  const product = products.items.find((item) => item.id === parseInt(id))

  if (!product) {
    return (
      <div className={styles.productMissing}>
        <p>This product seems to be missing</p>
        <Link href="/">Back to startpage</Link>
      </div>
    )
  }


  return (
    <div className={styles.singleProductContainer}>
      <ProductDetails product={product} />
    </div>
  )
}
