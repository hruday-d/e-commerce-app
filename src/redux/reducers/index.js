import { combineReducers } from "redux";
import {
    setAllProductsReducer,
    selectedproductsReducer
} from './productsReducer'
export const rootReducer = combineReducers({
    setAllProductsReducer,
    selectedproductsReducer
});