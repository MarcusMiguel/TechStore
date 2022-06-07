import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { ShoppingCart, Logout } from '@mui/icons-material';

export const StyledAppBar = styled(AppBar)`
    padding-right: 82px;
    padding-left: 16px;
    width: 100%;
    height: 12vh;
    display: flex;

    @media(min-width: 300px) and (max-width: 599px) {
        padding-left: 25px; 
        padding-right: 75px;
   }

    @media(max-width: 299px) {
        padding: 0; 
   }
`;

export const StyledContainer = styled.div`
    width: 100%;
    margin-bottom: 18vh;
`;

export const StyledToolbar = styled(Toolbar)`
    height: 100%;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 300px) {
        padding: 0 !important;
   }
`;

export const StyledShoppingCart = styled(ShoppingCart)`
    margin-bottom: -9px;
    font-size: 5vh !important;
`;

export const StyledLogout = styled(Logout)`
    margin-bottom: -5px;
    margin-left: 20px;
    font-size: 6.5vh !important;
`;

export const StyledLink = styled.div`
    height: 100%;
    width: 10%;
`;

export const StyledImg = styled.img`
    height: 10vh;
`;

export const StyledActions = styled.div`
    justify-content: end;
    display: flex;

    @media(max-width: 825px) {
         width: 30vw;
    }
`;