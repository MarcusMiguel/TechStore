import { useEffect, useState } from 'react';
import { AddToCartIcon, CloseIcon, InfoIcon, ModalTitle, ModalBox, ModalBackground, ModalDescription, ModalHeader, IconButton, CardContent, CardMedia, CardContainer, CardRow, ProductPrice, ProductTitle, CardActions } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { addProductAsync } from '../../redux/slices/cartSlice';

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

    const [showModal, setShowModal] = useState<boolean>(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [showModal]);

    const { currentUser } = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();

    if (product == undefined) {
        return null
    }

    return (
        <>
            <CardContainer>
                <CardContent>
                    <CardMedia src={product.img} title={product.title} />
                    <ProductTitle>
                        {product.title}
                    </ProductTitle>
                    <CardRow>
                        <ProductPrice>
                            ${product.price.toFixed(2)}
                        </ProductPrice>
                        <CardActions>
                            <IconButton onClick={() => handleOpen()} aria-label="Open modal" >
                                <InfoIcon />
                            </IconButton>
                            <IconButton aria-label="Add to Cart" onClick={() => dispatch(addProductAsync({ currentUser: currentUser, product: product }))} >
                                <AddToCartIcon />
                            </IconButton>
                        </CardActions>
                    </CardRow>
                </CardContent>
            </CardContainer >
            {showModal ?
                <>
                    <ModalBackground onClick={() => handleClose()} >
                    </ModalBackground>
                    <ModalBox  >
                        <ModalHeader >
                            <ModalTitle>
                                {product.title}
                            </ModalTitle>
                            <IconButton aria-label="CloseModal" onClick={() => handleClose()} >
                                <CloseIcon />
                            </IconButton>
                        </ModalHeader>
                        <ModalDescription >
                            <h4>Description:</h4>
                            {product.desc}
                        </ModalDescription>
                    </ModalBox>
                </>
                : null
            }
        </>
    )
};

