import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';

export const NavbarContainer = styled.div`
    width: 100%;
    min-width: 250px;
    padding: 0 8vw;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 2%);
    position: fixed;
    z-index: 9999;
    background-color: white;
    height: 3em;
    box-sizing: border-box;
    align-items: center;

      
  
`;

export const NavbarLogo = styled.div`
    display: flex;
    align-items: center;
    width: 6em;
    height: 2.2em;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 300px) {
        justify-content: start;
    }
   
`;

export const NavbarImage = styled.img`
    height: 1.9em;
    margin-bottom: .6em;
`;

export const NavbarTitle = styled.p` 
    font-size: .9em;
    font-weight: 700;
    
    @media(max-width: 300px) {
        font-size: .7em;
        margin-left: .5em;
    }
`;

export const NavbarActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 4em;
    min-width: 4em;
    height: 1.7em;
`;

export const IconButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;

    height: 100%;
    width: 2em;
    text-decoration: none;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    margin-right: -3px;
    &:hover {
        cursor: pointer;
    }
    margin-left: 1.5em;
    

    @media(max-width: 300px) {
        margin-left: .5em;
    }
`;

export const CartIcon = styled(FaShoppingCart)`
    font-size: 1.7em !important;
    @media(max-width: 300px) {
        font-size: 1.4em !important;
    }
`;

export const LogoutIcon = styled(FiLogOut)`
    font-size: 1.7em !important;
    @media(max-width: 300px) {
        font-size: 1.4em !important;
    }
`;

export const Badge = styled.span`
    position: absolute;
    border-radius: 50%;
    font-size: 0.6rem;
    background: darkred;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.3em;
    right: -0.5em;
    width: 1.5em;
    height: 1.5em;
`;

