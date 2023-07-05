import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [count, setCount] = useState();

    const incrementarStock = () => {
        if (items < count) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const agregarAlCarrito = () => {
        if (items <= count) {
            setCount(count - items);
            setItems(1);
        }
    }

    useEffect(() => {
        setCount(stock);
    }, [stock])

    return (
        <div>
            <div>
                <button className="button is-danger is-light" onClick={decrementarStock}>-</button>
                <button className="button is-danger is-light">{items}</button>
                <button className="button is-danger is-light" onClick={incrementarStock}>+</button>
            </div>
            <div>
                <button className="button is-danger is-light" onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;