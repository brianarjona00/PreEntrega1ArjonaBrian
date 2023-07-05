//Importo componente carrito 
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


//Creo la barra de navegación  
const NavBar = () => {
    return (
        <nav className = "Nav">
            <Link to={"/"}>
                <h3>Lupita Store</h3>
            </Link>
            <div>
                <Link to={"/category/abrigos"} className="button is-danger is-light">Abrigos</Link>
                <Link to={"/category/chalecos"} className="button is-danger is-light">Chalecos</Link>
                <Link to={"/category/pantalones"} className="button is-danger is-light">Pantalones</Link>
            </div>
            <CartWidget/>
        </nav>

    )
}
//Exporto el componente
export default NavBar