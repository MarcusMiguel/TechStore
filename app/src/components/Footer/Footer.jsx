import { StyledContainer, StyledImg } from "./style";
import logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Modal, Box, Grid, IconButton, Container, Link } from '@mui/material';
import {StyledFooterLinks,StyledFooterCol, StyledCartActions, StyledCartContainer, StyledCartTitle, StyledCartTitleTypography, StyledGridColumn, StyledGridColumnsContainer, StyledGridImg, StyledGridPrice, StyledGridRowsContainer, } from './style';

export default function Footer() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
            <StyledContainer>
                <StyledFooterCol>
                     <StyledImg onClick={() => navigate('/')} src={logo} alt='ecommerce'/>
                     TechStore™
                </StyledFooterCol>
                <StyledFooterLinks>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Terms of Service</Link>
                </StyledFooterLinks>
                </StyledContainer>
    )
}
