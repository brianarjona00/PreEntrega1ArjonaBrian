import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="columns">
            {items.map(item => (
                <div key={item.idx} className="column is-3">
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default ItemList;