import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';

export const CardContainer = styled.div`
    width: auto;
    border-radius: 20px;
    border: solid #E8E8E8	;
    border-width: 2px;

    &:hover {
        transform: scale(1.05);   
    }

  
 `;

export const CardMedia = styled.img`
    height: 30vh;
    padding: 1em 0;
    width: auto;
    object-fit: contain;

    @media(min-width: 300px) and (max-width: 800px){
        height: 20vh;
    }

    @media(max-width: 299px){
        height: 20vh;
    }

` ;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0em 1em;
`;

export const CardActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

export const CardRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20vh;

    @media(min-width: 600px) and (max-width: 1100px){
        height: 15vh;
    }
    @media(max-width: 599px){
        height: 15vh;
    }
`;

export const AddToCartIcon = styled(FaCartPlus)`
    font-size: 5vh !important;
    color: black;
    margin-left: .2em;
    @media(max-width: 299px){
        font-size: 3vh !important;
    }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
    font-size: 5vh !important;
    color: black;
    @media(max-width: 299px){
        font-size: 3vh !important;
    }
`;

export const ProductTitle = styled.div`
    font-size: .9rem;
    font-weight: 500;
    text-align: justify;
    height: 15vh;
    overflow: hidden;

    @media (max-width: 1100px){
        font-size: .8rem;
    }

`;

export const ProductPrice = styled.p`
    font-size: 3.5vh;
    font-weight: 600;

    @media(max-width: 299px){
        font-size: 3vh !important;
    }

    
`;

export const ModalBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    vertical-align: middle;

    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
`;


export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1em;
`;

export const ModalTitle = styled.p`
    font-size: 0.8em;
    margin: 0;
    font-weight: 700;
    width: 80%;

`;
export const IconButton = styled.button`
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    display: flex;
    padding: 0;

    &:hover {
        cursor: pointer;
    }

`

export const CloseIcon = styled(AiOutlineClose)`
    font-size: 5vh !important;
    color: black;
`;

export const ModalBox = styled.div`
    position: fixed;
    top: 65%;
    left: 65%;
    transform: translate(-90%, -65%);
    width: 40vw;
    height: 75vh;
    p: 4;
    padding: 1.5em 1.5em;
    background: white;
    border-radius: 20px;    
    z-index: 9999;
    border: solid #000;
    border-width: 1px;
`;

export const ModalDescription = styled.p`
    font-size: 0.8rem;
`;




