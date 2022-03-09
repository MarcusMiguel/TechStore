import React from 'react';
import { Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { StyledAppBar, StyledContainer, StyledToolbar, StyledShoppingCart, StyledLink } from './style';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface NavbarProps {
    totalItems?: Number
}

const Navbar = ({ totalItems }: NavbarProps) => {

    const location = useLocation();

    return (
        <StyledContainer>
            <StyledAppBar color="inherit" >
                <StyledToolbar>
                    <StyledLink to='/'>
                        <img src={logo} alt='ecommerce' height='100%' />
                    </StyledLink>
                    {location.pathname != '/cart' && (
                        <IconButton href='/cart' aria-label='Show cart items' color='inherit' >
                            <Badge badgeContent={totalItems} color='error'>
                                <StyledShoppingCart />
                            </Badge>
                        </IconButton>
                    )}
                </StyledToolbar>
            </StyledAppBar>
        </StyledContainer >
    )
};

export default Navbar;
