import { Card, CardMedia, CardContent, Modal, Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { AddShoppingCart, Info, Close } from '@mui/icons-material';

export const StyledCard = styled(Card)`
    width: auto;
    border-radius: 20px !important;
    padding: 20px 10px 0px 10px;
    border-width: 200px !important;
`;

export const StyledMedia = styled(CardMedia)`
    height: 30vh;
    width: auto;
    background-size: contain !important;
` ;

export const StyledCardContent = styled(CardContent)`
    height: 10vh;
`;

export const StyledCardActions = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledCardRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
    padding-left: 15px;
    height: 20vh;
`;

export const StyledModalTitle = styled.div`
    width: 100%;
    display: flex;
    justify-items: 'end';
    height: 5%;
    margin-left: 95%;
    margin-top: -20px;
`;

export const StyledModal = styled(Modal)`
 
`;

export const StyledAddShoppingCart = styled(AddShoppingCart)`
    font-size: 5vh !important;
`;

export const StyledInfo = styled(Info)`
    font-size: 5vh !important;
`;

export const StyledClose = styled(Close)`
    font-size: 5vh !important;
`;

export const StyledModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    height: 75vh;
    border: 2px solid #000;
    box-shadow: 24px;
    p: 4;
    padding: 40px;
    background: white;
    border-radius: 20px;
`;

export const StyledProductName = styled(Typography)`
    font-size: 2.8vh !important;
    font-weight: 500 !important;
    text-align: justify;

    @media(max-width: 750px) {
        font-size: 2.1vh !important;
    }
`;

export const StyledProductPrice = styled(Typography)`
    font-size: 3.5vh !important;
    font-weight: 600 !important;
`;

export const StyledProductDescription = styled(Typography)`
    margin-top: 20px !important;
    font-size: 3vh !important;
    
    @media(max-width: 825px) {
        font-size: 2vh !important;
    }
`;