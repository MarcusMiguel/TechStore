import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    padding-left: 40px;
    padding-right: 36px;
    width: '100%'

    @media(max-width: 950px) {
        margin-top: 80px;
    }
`;

export const StyledBox = styled(Box)`

    padding-left: 20px !important;
    padding-right: 20px; 
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 299px) {
        padding: 0 !important;
        grid-template-columns: repeat(1, 1fr) !important;

    }

    @media(min-width: 300px) and (max-width: 749px) {
        grid-template-columns: repeat(1, 1fr) !important;
        width: 80% !important;
        max-width: 400px !important;
    }

    @media(min-width: 750px) and (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr) !important;
    }

`;