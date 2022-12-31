import axios from "axios"
import { FETCH_ALL_PRODUCTS_CONTENT, FETCH_SELECTED_PRODUCT_CONTENT, REMOVE_SELECTED_PRODUCT_CONTENT, SET_ALL_PRODUCTS_CONTENT, SET_SELECTED_PRODUCT_CONTENT } from "../constants/constants"
export const setAllProductsContent = (allProducts) => {
    return {
        type: SET_ALL_PRODUCTS_CONTENT,
        payload: allProducts
    }
}

export const setSelectedProductContent = (product) => {
    return {
        type: SET_SELECTED_PRODUCT_CONTENT,
        payload: product
    }
}

export const removeSelectedProductsContent = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT_CONTENT
    }
}

export const fetchAllProductsContent = () => async (dispatch) => {
    const allProducts = await axios.get("https://fakestoreapi.com/products").catch(err => console.log(err));
    dispatch({
        type: FETCH_ALL_PRODUCTS_CONTENT,
        payload: allProducts.data
    })
}

export const fetchSelectedProductsContent = (id) => async (dispatch) => {
    const selectedProduct = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => console.log(err));
    dispatch({
        type: FETCH_SELECTED_PRODUCT_CONTENT,
        payload: selectedProduct.data
    })
}
