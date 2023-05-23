
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../../styles/Home.module.css"

/** typed the interface to use the data */

type ProductListProps = {
  products: TProduct[]
}


/** create the function to do the map of the info recived for props
 * to render a card for each product
 */

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <>
      <div className={styles.card}>
      <Link key={id} href={`/product/${id}`} passHref>
        <div className={styles.imagen}>
        <Image src={image} width={200} alt='avo image' height={200} />
        </div>
        <div className={styles.description}>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </Link>
      </div>
    </>
  ))


/** call the new function tjat reived the prop products to pass this
 * in the function parameter
 */

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.grid}>
      {mapProductsToCards(products)}
    </div>
  )
}

export default ProductList