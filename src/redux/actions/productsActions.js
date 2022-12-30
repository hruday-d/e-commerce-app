import { REMOVE_SELECTED_PRODUCT_CONTENT, SET_ALL_PRODUCTS_CONTENT, SET_SELECTED_PRODUCT_CONTENT } from "../constants/constants"

export const setAllProductsContent = (allProducts) => {
    return {
        type:SET_ALL_PRODUCTS_CONTENT,
        payload: allProducts
    }
}

export const setSelectedProductContent = (product) => {
    return {
        type:SET_SELECTED_PRODUCT_CONTENT,
        payload: product
    }
}

export const removeSelectedProductsContent = () => {
    return {
        type:REMOVE_SELECTED_PRODUCT_CONTENT
    }
}