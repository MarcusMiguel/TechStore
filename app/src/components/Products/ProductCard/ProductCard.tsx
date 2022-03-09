import * as React from 'react';
import { IconButton } from '@mui/material';
import { Product } from '@chec/commerce.js/types/product';
import { StyledCardContent, StyledCard, StyledCardActions, StyledMedia, StyledModalTitle, StyledModal, StyledAddShoppingCart, StyledInfo, StyledClose, StyledModalBox, StyledProductName, StyledProductPrice, StyledCardRow, StyledProductDescription } from './style';

interface ProductProps {
    product: Product,
    onAddToCart: Function
};

export const ProductCard = ({ product, onAddToCart }: ProductProps) => {

    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (product == undefined) {
        return <></>
    }

    return (
        <StyledCard>
            <StyledMedia image={product.assets[0].url} title={product.name} />
            <StyledCardContent>
                <StyledProductName>
                    {product.name}
                </StyledProductName>
            </StyledCardContent>
            <StyledCardRow>
                <StyledProductPrice>
                    ${product.price.formatted}
                </StyledProductPrice>
                <StyledCardActions>
                    <IconButton onClick={handleOpen} aria-label="Open modal" >
                        <StyledInfo />
                    </IconButton>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)} >
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
                    <StyledProductDescription id="modal-modal-description" paragraph dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary">
                    </StyledProductDescription>
                </StyledModalBox>
            </StyledModal>
        </StyledCard>
    )
};

