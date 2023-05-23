import React from 'react'
import Link from 'next/link'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '../store/Cart'
import styles from "./Navbar.module.css"

export default function Navbar() {

  const {count: cartCount}= useCart()
  return (
    <nav className={styles.containerNav}>
      <menu className={styles.contianerLinks}>
        <div className={styles.containerButton}>
        <Link href="/">
          <p>Home</p>
        </Link>
        </div>
        <Link href="/cart">
          <ShoppingCartIcon cartCount={cartCount} name="Canasta"/>
        </Link>
      </menu>
    </nav>
  )
}