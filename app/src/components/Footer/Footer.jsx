import { StyledContainer, StyledImg } from "./style";
import logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container, Link } from '@mui/material';
import { StyledCartActions, StyledCartContainer, StyledCartTitle, StyledCartTitleTypography, StyledGridColumn, StyledGridColumnsContainer, StyledGridImg, StyledGridPrice, StyledGridRowsContainer, } from './style';

export default function Footer() {

    const navigate = useNavigate();

    return (
            <StyledGridColumnsContainer container >
            <Grid item xs={1} style={{}}>
            </Grid>
                <Grid item xs={4} style={{}}>
                <StyledImg onClick={() => navigate('/')} src={logo} alt='ecommerce'/>
                <span style={{paddingTop: "20px"}}> Ecommerce</span>
                </Grid>
                <StyledGridColumn item xs={2} ><Link>About</Link></StyledGridColumn>
                <StyledGridColumn item xs={2} ><Link>Contact</Link></StyledGridColumn>
                <StyledGridColumn item xs={2} ><Link>Terms of Service</Link></StyledGridColumn>
                <Grid item xs={1} style={{}}>
            </Grid>
            </StyledGridColumnsContainer>
    )
}
