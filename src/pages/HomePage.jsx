
import {ItemsStore} from "../components/Items";

import '../styles/home.css'

import items from '../config/items.json'
import {Template} from "../template";
import {getItemsStore, setItemsStore} from "../tools/store";

export const HomePage = () => {

    const addToCard = (id) => {
        const itemsCar = getItemsStore()
        if (itemsCar.indexOf(id) >= 0) {
            return alert('Already added !')
        }
        itemsCar.push(id)
        setItemsStore(itemsCar)
    }

    return (
        <Template>
            <div className="items-container">
                {items.map((item, key) => <ItemsStore
                    onClick={() => addToCard(item.id)}
                    key={key}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    imgPath={`/img/${item.imgPath}`}
                />)}
            </div>
        </Template>
    )
}