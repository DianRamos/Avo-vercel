import React from 'react'
import { GetStaticProps } from 'next';
import ProductList from '@/components/ProductList/ProductList';
import Layout from '@/components/Layout/Layout';
import styles from "../styles/Home.module.css"



/** create the function getStaticProps to realize 
 * the fetch of the info
 */

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    }
  }
}


/** pass like prop the object porductList to be used in other component ProductList */
const HomePage = ({ productList }: { productList: TProduct[] }) => {

  return (
    <Layout>
      <div>

        <ProductList products={productList} />
      </div>
    </Layout>
  )
}

export default HomePage
