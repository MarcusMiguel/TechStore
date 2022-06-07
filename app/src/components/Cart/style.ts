import styled from 'styled-components';
import { IconButton, TableCell } from '@mui/material';
import { ProductionQuantityLimitsSharp } from '@mui/icons-material';

export const StyledCartActions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
`;

export const StyledCartContainer = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: column;
`;

export const StyledCartTitle = styled.div`
    display: flex;
    align-items: center;
    height: 4vh;
    font-size: 22px;
    font-weight: 900;
    @media(max-width: 825px) {
    }
`;

export const StyledEmptyCart = styled(ProductionQuantityLimitsSharp)`
    font-size: 4vh !important;
`;

export const StyledCartWithItems = styled.div`
    min-height: 57vh;
    padding-left: 70px;
    padding-right: 70px;
`;

export const StyledCheckoutButton = styled(IconButton)`
    font-size: 0.875rem !important;
    border-radius: 0 !important;
    @media(max-width: 600px) and (min-width: 300px) {
        font-size: 16px !important;
    }
    @media(max-width: 300px) {
        font-size: 14px !important;
    }
`;

export const StyledEmptyCartButton = styled(IconButton)`
    font-size: 0.875rem !important;
    border-radius:  !important;
    @media(max-width: 600px) and (min-width: 300px) {
        font-size: 16px !important;
    }
    @media(max-width: 300px) {
        font-size: 14px !important;
    }
`;

export const StyledQuantityActions = styled.div`
    display: flex  !important;
    flex-direction: row  !important;
    align-items: center !important;
    justify-content: center !important;

    @media(max-width: 600px) and (min-width: 300px) {
        flex-direction: column  !important;
    }
`;