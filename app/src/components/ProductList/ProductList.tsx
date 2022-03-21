import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { ProductCard } from './ProductCard/ProductCard';
import { StyledMain, StyledBox } from './style';
import { useAppSelector } from '../../redux/hooks/hooks';

const ProductList = () => {

    const products = useAppSelector((state) => state.products.products);

    if (products === null) {
        return <div>...Loading</div>
    }

    return (
        <StyledMain >
            <StyledBox>
                {
                    products?.map((product, index) => (
                        product ?
                            <ProductCard product={product}
                                key={product._id}>
                            </ProductCard>

                            : <></>
                    ))
                }
            </StyledBox>
        </StyledMain >
    )
};

export default ProductList;
