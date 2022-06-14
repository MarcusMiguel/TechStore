import { ProductListContainer } from './style';
import { useAppSelector } from '../../redux/hooks/hooks';
import { ProductCard } from '../ProductCard/ProductCard';

const ProductList = () => {

    const products = useAppSelector((state) => state.products.products);

    if (products === null) {
        return <div>...Loading</div>
    }

    return (
        <ProductListContainer>
            {
                products?.map((product, index) => (
                    product ?
                        <ProductCard product={product}
                            key={product._id}>
                        </ProductCard>
                        : <></>
                ))
            }
        </ProductListContainer>
    )

};

export default ProductList;
