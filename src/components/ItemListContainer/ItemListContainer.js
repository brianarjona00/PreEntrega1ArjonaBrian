import { useEffect, useState } from "react";
import productos from "../json/productos.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(prod => prod.categoria === id) : productos);
            }, 2000);
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;