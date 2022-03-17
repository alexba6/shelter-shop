
import '../styles/itemsStore.css'

export const ItemsStore = ({imgPath, name, description, price, onClick}) => {
    return <div className="itemStoreContainer">
        <div className="itemStoreImgFrame">
            <img src={imgPath} alt={name}/>
        </div>
        <div className="itemStoreContent">
            <div className="header">
                <div>
                    <h2>{name}</h2>
                </div>
                <div className="price">
                    <strong>{price} $</strong>
                </div>
            </div>
            <div className="description">
                <p>
                    {description}
                </p>
            </div>
            <div className="footer">
                <button onClick={onClick}>
                    Add to car
                </button>
            </div>
        </div>
    </div>
}