import styled from 'styled-components';
import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container } from '@mui/material';

export const StyledGrid = styled(Grid)`
    // padding-left: 40px;
    // padding-right: 36px;
    // width: '100%'

    @media(max-width: 825px) {
        display: none;
    }
`;