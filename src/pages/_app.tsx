
import type { AppProps } from 'next/app'
import "../styles/globals.css"
import CartProvider from '@/components/store/Cart'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>

  )
}
