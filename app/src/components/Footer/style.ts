import styled from 'styled-components';
import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container } from '@mui/material';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: "row";
    align-content: "center";
    justify-content: space-between;
    height: 15vh;
    align-items: "center";
    padding: 50px 30px 0px 30px;
`;

export const StyledImg = styled.img`
    height: 10vh;
`;

export const StyledGridColumn = styled(Grid)`
    font-size: 20;
    font-weight: 500;
    @media(max-width: 825px) {
        display: none;
    }
`;


export const StyledGridColumnsContainer = styled(Grid)`
    flex-direction: row;
    display: flex;
    
    @media(max-width: 825px) {
        display: none;
    }
`;
