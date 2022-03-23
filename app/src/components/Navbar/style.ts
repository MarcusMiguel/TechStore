import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { ShoppingCart, Logout } from '@mui/icons-material';
import { Link } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
    width: 100%;
    height: 11vh;
    padding-left: 0.6%;
    padding-right: 8.7%;
    display: flex;
`;

export const StyledContainer = styled.div`
    height: 10% !important;
    margin-bottom: 8%;
    flex-direction: 'row';
`;

export const StyledToolbar = styled(Toolbar)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const StyledShoppingCart = styled(ShoppingCart)`
    margin-bottom: -9px;
    font-size: 5vh !important;
`;

export const StyledLink = styled(Link)`
    height: 100%;
`;