function ProductCart () {
    let productsInCart = [
        {
            name: 'Triple Karmeliet',
            price: 6.00, 
            quantity: 1,
            isAvailable: true,
        },
        {
            name: 'Leffe Rituel',
            price: 5.30, 
            quantity: 1,
            isAvailable: true,
        },
        {
            name: 'Adelscott',
            price: 4.80, 
            quantity: 1,
            isAvailable: true,
        },
        {
            name: 'Bière de Noël',
            price: 7.50, 
            quantity: 4,
            isAvailable: false,
        }
    ]
    return (
        <ul>
           {productsInCart.map((productInCart, index) => (<li key={`${productInCart.name}-${index}`}>{ productInCart.quantity} x { productInCart.name } = { productInCart.price } € {productInCart.isAvailable ? <span>✔️</span> : <span>❌</span>}</li>)) }
        </ul>
    )
}

export default ProductCart;