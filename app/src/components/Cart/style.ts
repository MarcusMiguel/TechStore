import styled from 'styled-components';
import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container } from '@mui/material';

export const StyledGridImg = styled(Grid)`
    @media(max-width: 825px) {
        display: none;
    }
`;

export const StyledCartActions = styled.div`
    display: flex;
    justifyItems: center;
    width: 40%;
    paddingLeft 30%;
    paddingRight: 30%;

    @media(max-width: 825px) {
        padding-left: 6vw;
    }
`;

export const StyledCartContainer = styled.div`
    padding: 0px;
    width: 100%;
`;

export const StyledCartTitle = styled.div`
    display: flex;
    align-items: center;
    height: 12vh;
    padding-left: 3vw;

    @media(max-width: 825px) {
        padding-left: 6vw;
    }
`;

export const StyledGridColumnsContainer = styled(Grid)`
    flex-direction: row;
    display: flex;
    
    @media(max-width: 825px) {
        display: none;
    }
`;

export const StyledGridPrice = styled(Grid)`
    @media(max-width: 825px) {
        display: none;
    }
`;

export const StyledGridColumn = styled(Grid)`
    font-size: 20;
    font-weight: 500;
    @media(max-width: 825px) {
        display: none;
    }
`;

export const StyledCartTitleTypography = styled(Typography)`
    width: 100%;
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 1; 
    @media(max-width: 825px) {
        padding-left: 7vw;
    
    }
`;

export const StyledGridRowsContainer = styled(Grid)`
    padding: 30px 20px 0px 20px;
    @media(max-width: 825px) {
        padding-left: 8vw;
    }
`;