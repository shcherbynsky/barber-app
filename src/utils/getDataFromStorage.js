export const getDataFromStorage = (item) => {
    const data = sessionStorage.getItem(item)
    return parseInt(data)
}
