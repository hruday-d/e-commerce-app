import { REMOVE_SELECTED_PRODUCT_CONTENT, SET_ALL_PRODUCTS_CONTENT, SET_SELECTED_PRODUCT_CONTENT } from "../constants/constants"

const initialState = {}

export const setAllProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_ALL_PRODUCTS_CONTENT:
            return payload

        default:
            return state
    }
}

export const selectedproductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SET_SELECTED_PRODUCT_CONTENT:
            return payload;

        case REMOVE_SELECTED_PRODUCT_CONTENT:
            return state = {};
        default:
            return state
    }
}
