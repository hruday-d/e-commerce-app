import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAllProductsContent } from '../redux/actions/productsActions';
import ProductCard from './ProductCard';

function ProductListing() {
    const dispatch = useDispatch();
    const productsListData = useSelector((reducers) => reducers.setAllProductsReducer);
    const fetchAllProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => console.log(err));
        dispatch(setAllProductsContent(response.data));
    }
    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div className="ui grid container">
            {Array.isArray(productsListData) && productsListData?.map((productItem, index) => <ProductCard key={index} product={productItem} />)}
        </div>
    )
}

export default ProductListing
