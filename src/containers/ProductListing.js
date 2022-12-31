import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductsContent } from '../redux/actions/productsActions';
import ProductCard from './ProductCard';

function ProductListing() {
    const dispatch = useDispatch();
    const productsListData = useSelector((reducers) => reducers.setAllProductsReducer);
    useEffect(() => {
       dispatch(fetchAllProductsContent())
    }, [])

    return (
        <div className="ui grid container">
            {Array.isArray(productsListData) && productsListData?.map((productItem, index) => <ProductCard key={index} product={productItem} />)}
        </div>
    )
}

export default ProductListing
