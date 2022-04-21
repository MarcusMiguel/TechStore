import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { ShoppingCart, Logout } from '@mui/icons-material';

export const StyledAppBar = styled(AppBar)`
    padding-right: 6vw;
    padding-left: 1vw;
    width: 100%;
    height: 12vh;
    display: flex;
`;

export const StyledContainer = styled.div`
    width: 100%;
    margin-bottom: 15vh;
`;

export const StyledToolbar = styled(Toolbar)`
    height: 100%;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 825px) {
        justify-content: start;
    }
`;

export const StyledShoppingCart = styled(ShoppingCart)`
    margin-bottom: -9px;
    font-size: 5vh !important;
`;

export const StyledLogout = styled(Logout)`
    margin-bottom: -5px;
    font-size: 6vh !important;
`;

export const StyledLink = styled.div`
    height: 100%;
    width: 10%;
`;

export const StyledImg = styled.img`
    height: 10vh;
`;

export const StyledActions = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: "row";
     width: 10vw;

    @media(max-width: 825px) {
         width: 30vw;
        padding-right: 30px;
    }
`;