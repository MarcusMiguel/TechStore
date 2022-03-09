import React from 'react';
import { ProductCard } from './ProductCard/ProductCard';
import { StyledMain, StyledBox } from './style';
import { Product } from '@chec/commerce.js/types/product';

interface ProductsProps {
    products: Product[],
    onAddToCart: Function,
}

const Products = ({ products, onAddToCart }: ProductsProps) => {

    if (products == undefined) {
        return <div>...Loading</div>
    }

    const Comp = ProductCard as React.ElementType;

    return (
        <StyledMain >
            <StyledBox>
                {
                    products.map((product) => (
                        <Comp
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart} >
                        </Comp>
                    ))
                }
            </StyledBox>
        </StyledMain >
    )
};

export default Products;
