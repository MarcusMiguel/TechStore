import { FooterContainer, FooterTitle,FooterLink, FooterLinks, FooterImage,  } from "./style";
import logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
            <FooterContainer>
                <FooterTitle>
                     TechStore
                </FooterTitle>
                <FooterLinks>
                    <FooterLink>About</FooterLink>
                    <FooterLink>Contact</FooterLink>
                    <FooterLink>Terms of Service</FooterLink>
                </FooterLinks>
                </FooterContainer>
    )
}
