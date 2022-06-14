import { CartIcon, LogoutIcon, IconButton, Badge, NavbarImage, NavbarActions, NavbarTitle, NavbarContainer, NavbarLogo } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { logout } from '../../redux/slices/userSlice';
import { emptyCart } from '../../redux/slices/cartSlice';

const Navbar = () => {

    const location = useLocation();
    const cart = useAppSelector((state) => state.cart.cart);
    const pathname = location.pathname;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const toRender = () => {
        return location.pathname == '/signin' ? false : location.pathname == '/signup' ? false : true
    }

    const handleLogout = () => {
        dispatch(emptyCart());
        dispatch(logout());
        navigate('/signin');
    }

    return (
        toRender() ?
            <NavbarContainer>
                <NavbarLogo onClick={() => navigate('/')}>
                    <NavbarImage src={logo} alt='ecommerce'></NavbarImage>
                    <NavbarTitle>TechStore</NavbarTitle>
                </NavbarLogo>
                <NavbarActions>
                    {pathname != '/cart' && (
                        <IconButton onClick={() => navigate('/cart')} aria-label='Show Cart Items' >
                            <Badge>{cart?.products.reduce((acc, obj) => { return acc + obj.quantity }, 0)}</Badge>
                            <CartIcon />
                        </IconButton>)}
                    <IconButton onClick={() => handleLogout()} aria-label='Logout'  >
                        <LogoutIcon />
                    </IconButton>
                </NavbarActions>
            </NavbarContainer>
            :
            <></>
    )
};

export default Navbar;
