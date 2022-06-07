import React from 'react';
import { Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { StyledAppBar, StyledContainer, StyledShoppingCart, StyledLink, StyledActions, StyledToolbar, StyledImg, StyledLogout } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { logout } from '../../redux/slices/userSlice';
import { emptyCart, emptyCartAsync } from '../../redux/slices/cartSlice';

const Navbar = () => {

    const location = useLocation();
    const cart = useAppSelector((state) => state.cart.cart);
    const pathname = location.pathname;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector((state) => state.user.currentUser);

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
            < StyledContainer >
                <StyledAppBar color="inherit" >
                    <StyledToolbar>
                        <StyledImg onClick={() => navigate('/')} src={logo} alt='ecommerce'></StyledImg>
                        <StyledActions>
                            {pathname != '/cart' && (
                                <IconButton href='/cart' aria-label='Show cart items' color='inherit' >
                                    <Badge badgeContent={cart?.products.reduce((acc, obj) => { return acc + obj.quantity }, 0)} color='error'>
                                        <StyledShoppingCart />
                                    </Badge>
                                </IconButton>
                            )}
                            <IconButton onClick={() => handleLogout()} aria-label='Logout' color='inherit'  >
                                <StyledLogout />
                            </IconButton>
                        </StyledActions>
                    </StyledToolbar>
                </StyledAppBar>
            </ StyledContainer >
            :
            <div></div>
    )
};

export default Navbar;
