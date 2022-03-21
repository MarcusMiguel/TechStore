import React from 'react';
import { Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { StyledAppBar, StyledContainer, StyledToolbar, StyledShoppingCart, StyledLink } from './style';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

const Navbar = () => {

    const location = useLocation();
    const cart = useAppSelector((state) => state.cart.cart);
    const pathname = location.pathname
    const toRender = () => {
        return location.pathname == '/signin' ? false : location.pathname == '/signup' ? false : true
    }
    return (
        toRender() ?
            <StyledContainer>
                <StyledAppBar color="inherit" >
                    <StyledToolbar>
                        <StyledLink to='/'>
                            <img src={logo} alt='ecommerce' height='100%' />
                        </StyledLink>
                        {pathname != '/cart' && (
                            <IconButton href='/cart' aria-label='Show cart items' color='inherit' >
                                <Badge badgeContent={cart?.products.reduce((acc, obj) => { return acc + obj.quantity }, 0)} color='error'>
                                    <StyledShoppingCart />
                                </Badge>
                            </IconButton>
                        )}
                    </StyledToolbar>
                </StyledAppBar>
            </StyledContainer >
            :
            <div></div>

    )
};

export default Navbar;
