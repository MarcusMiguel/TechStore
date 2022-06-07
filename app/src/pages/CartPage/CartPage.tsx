import { Navbar, ProductList, Cart } from '../../components';
import Footer from '../../components/Footer/Footer';
import { StyledCartPage } from './style';

const CartPage = () => {
    return (
        <StyledCartPage>
            <Cart />
        </StyledCartPage>
    );
};

export default CartPage;