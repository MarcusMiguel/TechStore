import React from 'react';
import { Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { StyledAppBar, StyledContainer, StyledToolbar, StyledShoppingCart, StyledLink } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { ShoppingCart, Logout } from '@mui/icons-material';
import { logout } from '../../redux/slices/userSlice';

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
        dispatch(logout());
        navigate('/signin');
    }

    return (
        toRender() ?
            < StyledContainer >
                <StyledAppBar color="inherit" >
                    <StyledToolbar>
                        <StyledLink to='/'>
                            <img src={logo} alt='ecommerce' height='100%' />
                        </StyledLink>
                        <div style={{ width: '13.5vw', marginRight: '-4%' }}>
                            {pathname != '/cart' && (
                                <IconButton href='/cart' aria-label='Show cart items' color='inherit' >
                                    <Badge badgeContent={cart?.products.reduce((acc, obj) => { return acc + obj.quantity }, 0)} color='error'>
                                        <StyledShoppingCart />
                                    </Badge>
                                </IconButton>
                            )}
                            <IconButton style={{ marginLeft: '15%' }} onClick={() => handleLogout()} aria-label='Logout' color='inherit' >
                                <Logout />
                            </IconButton>
                        </div>

                    </StyledToolbar>
                </StyledAppBar>
            </ StyledContainer >
            :
            <div></div>
    )
};

export default Navbar;
