import * as React from 'react';
import { IconButton } from '@mui/material';
import { StyledCardContent, StyledCard, StyledCardActions, StyledMedia, StyledModalTitle, StyledModal, StyledAddShoppingCart, StyledInfo, StyledClose, StyledModalBox, StyledProductName, StyledProductPrice, StyledCardRow, StyledProductDescription } from './style';
import { addProduct, removeProduct, emptyCart, addProductTeste } from "../../../redux/slices/cartSlice"
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

interface ProductCardProps {
    product?: {
        _id: string,
        title: string,
        desc: string,
        img: string,
        price: number,
    },
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { currentUser } = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();

    if (product == undefined) {
        return <></>
    }

    return (
        <StyledCard>
            <StyledMedia image={product.img} title={product.title} />
            <StyledCardContent>
                <StyledProductName>
                    {product.title}
                </StyledProductName>
            </StyledCardContent>
            <StyledCardRow>
                <StyledProductPrice>
                    ${product.price.toFixed(2)}
                </StyledProductPrice>
                <StyledCardActions>
                    <IconButton onClick={handleOpen} aria-label="Open modal" >
                        <StyledInfo />
                    </IconButton>
                    <IconButton aria-label="Add to Cart" onClick={() => dispatch(addProductTeste({ currentUser, product }))} >
                        <StyledAddShoppingCart />
                    </IconButton>
                </StyledCardActions>
            </StyledCardRow>
            <StyledModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <StyledModalBox>
                    <StyledModalTitle >
                        <IconButton aria-label="Close" onClick={() => handleClose()} >
                            <StyledClose />
                        </IconButton>
                    </StyledModalTitle>
                    <StyledProductDescription id="modal-modal-description" paragraph dangerouslySetInnerHTML={{ __html: product.desc }} color="textSecondary">
                    </StyledProductDescription>
                </StyledModalBox>
            </StyledModal>
        </StyledCard >
    )
};

