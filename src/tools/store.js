

export const getItemsStore = () => {
    return JSON.parse(localStorage.getItem('CAR_STORE')) || []
}
export const setItemsStore = (items) => {
    localStorage.setItem('CAR_STORE', JSON.stringify(items))
}