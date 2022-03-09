import { AppBar, Toolbar, Badge } from '@mui/material';
import styled from 'styled-components';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
    width: 100%;
    height: 11vh;
`;

export const StyledContainer = styled.div`
    height: 10% !important;
    margin-bottom: 8%;
`;

export const StyledToolbar = styled(Toolbar)`
    height: 100%;
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