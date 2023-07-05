// importo img svg carrito
import cart from "./img/cart.svg"

// creo componente carrito
const CartWidget = () => {
    return(
        <div>
               <img  src={cart} alt="cart-widget"/>
               0
        </div>
    )
}
// exporto img de carrito (componente)
export default CartWidget;