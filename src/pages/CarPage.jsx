import {Template} from "../template";
import {useEffect, useState} from "react";
import {getItemsStore, setItemsStore} from "../tools/store";

import items from '../config/items.json'
import {ItemsStoreRow} from "../components/StoreRow";


export const CarPage = () => {
    const [itemsCar, setItemsCar] = useState(undefined)

    useEffect(() => {
        const itemsIds = getItemsStore()
        if (itemsIds !== null && !itemsCar) {
            const itemsCarStore = []
            for (const itemsId of itemsIds) {
                const item = items.find(item => item.id === itemsId)
                if (item) {
                    itemsCarStore.push(item)
                }
            }
            setItemsCar(itemsCarStore)
        }
    }, [itemsCar])

    const deleteHandler = (item) => {
        const newItems = itemsCar.filter(oldItems => oldItems.id !== item.id)
        setItemsStore(newItems.map(item => item.id))
        setItemsCar(newItems)
    }

    return (
        <Template>
            <div>
                {itemsCar ? <table className="table">
                    <thead>
                    <tr>
                        <th>Bunker</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemsCar.map((item, key) => <ItemsStoreRow
                        key={key}
                        name={item.name}
                        price={item.price}
                        onDelete={() => deleteHandler(item)}
                    />)}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{itemsCar.reduce((price, item) => price + item.price, 0)}$</td>
                    </tr>
                    </tbody>
                </table>: undefined}

            </div>
        </Template>
    )
}