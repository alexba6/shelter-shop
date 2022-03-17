

export const ItemsStoreRow = ({name, price, onDelete}) => {
    return <tr>
        <td>{name}</td>
        <td>{price} $</td>
        <td>
            <button className="btn btn-danger" onClick={onDelete}>
                Remove
            </button>
        </td>
    </tr>
}