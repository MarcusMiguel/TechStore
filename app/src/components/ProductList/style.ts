import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    @media(max-width: 950px) {
        margin-top: 80px;
    }
`;

export const StyledBox = styled(Box)`
    padding-right: 70px;
    padding-left: 70px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media(max-width: 299px) {
        padding: 0;
        grid-template-columns: repeat(1, 1fr);
    }

    @media(min-width: 300px) and (max-width: 599px) {
        justify-self: center !important;
        grid-template-columns: repeat(1, 1fr);
    }

    @media(min-width: 600px) and (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);
    }

`;