import React from 'react'
import { Basket } from '../SVGIcons'


/** typed the info for use */
type ShoppingCartIconProps = {
    cartCount: number
    name: string
}

/** pass the corresponding props to use */

const ShoppingCartIcon = ({ cartCount, name }: ShoppingCartIconProps) => {

    /**create the function to show the counter */
    const showCartCount = () => {
        if (!cartCount) {
            return `(0)`
        }
        if (cartCount > 9) {
            return (
                <span>
                    9<sup>+</sup>
                </span>
            )
        }
        return `(${cartCount})`
    }

    return (
        <div>
            <Basket />
            <div>
                {` ${name} `}
                {showCartCount()}
            </div>
        </div>
    )
}

export default ShoppingCartIcon