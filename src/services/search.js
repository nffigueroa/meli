import { get } from "./axios"

/**
 * It returns the payload from search API
 * @param {*} value Endpoint Url.  
 */
export const doSearchResults = (value) => {
    return  get(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
}
export const doSearchItemDescription = (value) => {
    return  get(`https://api.mercadolibre.com/items/${value}/description`)
}

export const doSearchById= (id) => {
    return  get(`https://api.mercadolibre.com/items/${id}`)
}

export const doSearchCategoryById = (idCategory) => {
    return  get(`https://api.mercadolibre.com/categories/${idCategory}`)
}