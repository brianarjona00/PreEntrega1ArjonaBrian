import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="column has-text-left">
                    <h3 className="is-size-4">{item.nombre}</h3>
                    <p className="is-size-3 has-text-weight-bold">${item.precio}</p>
                    <p className="mb-5">{item.descripcion}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;