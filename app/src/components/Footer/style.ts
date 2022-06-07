import styled from 'styled-components';
import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container } from '@mui/material';

export const StyledContainer = styled.div`
    height: 12vh;
    display: flex;
    flex-direction: row;
    justify-items: space-between;
    margin-top: 80px;
    align-items: center;
    box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 10%), 0px -4px 5px 0px rgb(0 0 0 / 4%), 0px -1px 10px 0px rgb(0 0 0 / 2%);
    padding-right: 67px;
    padding-left: 45px;
    bottom: 0;
    
    @media(max-width: 600px) and (min-width: 300px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media(max-width: 299px) {
        padding: 0;
    }

`;

export const StyledFooterCol = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 19px;

    @media(max-width: 600px) and (min-width: 300px) {
        font-size: 12px;
        margin-right: 30px;
        padding-left: 36px;
    }

    @media(max-width: 299px) {
        font-size: 12px;
        padding: 0;
        margin-right: 20px;
    }

`;

export const StyledImg = styled.img`
    height: 8vh;
    align-content: center;  
    display: flex;
    margin-bottom: 10px;
`;

export const StyledFooterLinks = styled.div`
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 19px;

    @media(max-width: 600px) and (min-width: 300px) {
        flex-direction: column;
        font-size: 12px;
        text-align: end;
        padding-right: 60px;
    }

    @media(max-width: 300px) {
        margin-left: 20px;
        flex-direction: column;
        font-size: 12px;
    }

`;
