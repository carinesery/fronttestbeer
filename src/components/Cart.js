import "../styles/Cart.css";
import iconCart from "../assets/icon-cart.webp";

import ShoppingList from "./ShoppingList.js";
import ProductCart from "./ProductCart.js";


function Cart () {
    return(
        <>
            <figure className="cart">
                <img className="icon-cart" src={ iconCart } alt="Icône du panier"/>
                <figcaption>Panier</figcaption>
            </figure>
            <span className="cart-contains">
                <ProductCart />
            </span>
        </>
        
    )
}

export default Cart;