
import React, { useEffect, useState } from 'react';
// import { Cart } from '@chec/commerce.js/types/cart';
import { CreditScore, Delete, Add, Remove } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import StripeCheckout from "react-stripe-checkout";
import { Token } from "react-stripe-checkout";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container } from '@mui/material';
import { addProduct, removeProduct, emptyCart } from "../../redux/slices/cartSlice";
import { StyledGrid, } from './style';

const KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;

const Cart = () => {
    const cart = useAppSelector((state) => state.cart.cart);
    const products = useAppSelector((state) => state.products.products);
    const [stripeToken, setStripeToken] = useState<Token>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onToken = (token: Token) => {
        setStripeToken(token);
    };

    const EmptyCart = () => (
        <Typography variant="subtitle1" sx={{ padding: '0px 20px 00px 20px' }}>Your Cart is empty!</Typography>
    );

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/stripe/checkout"
                    , {
                        tokenId: stripeToken?.id,
                        amount: cart?.total,
                    });
                navigate("/success", {
                    state: {
                        stripeData: res.data,
                        cart: cart,
                    }
                });
                dispatch(emptyCart());
            } catch { }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart?.total, navigate]);

    const CartWithItems = () => (
        <>
            <Grid container style={{ flexDirection: 'row', display: 'flex' }}>
                <Grid item xs={6} style={{}}>
                </Grid>
                <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>Price</Grid>
                <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>Quantity</Grid>
                <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>SubTotal</Grid>
            </Grid>
            <Grid container direction='column' style={{ padding: '30px 20px 0px 20px', }}>
                {cart?.products?.map((item) => (
                    <Grid item key={item._id} >
                        <Grid container style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <StyledGrid item xs={1} >
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={products?.filter(x => x._id == item._id)[0].img} alt='item' height='50px' />
                                </div>
                            </StyledGrid>
                            <Grid item xs={5} style={{ fontSize: 20, fontWeight: 500, paddingLeft: 20, paddingRight: 30 }}>{products?.filter(x => x._id == item._id)[0].title}</Grid>
                            <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>${products?.filter(x => x._id == item._id)[0].price.toFixed(2)} </Grid>
                            <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, marginLeft: -8 }}>
                                <IconButton onClick={() => dispatch(removeProduct(products?.filter(x => x._id == item._id)[0]))} >
                                    <Remove />
                                </IconButton>
                                {item.quantity}
                                <IconButton onClick={() => dispatch(addProduct(products?.filter(x => x._id == item._id)[0]))} >
                                    <Add />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, paddingLeft: 21 }}>${products?.filter(x => x._id == item._id)[0] ? (products?.filter(x => x._id == item._id)[0].price * item.quantity).toFixed(2) : 0}</Grid>
                        </Grid>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'rgba(254,254,254, 0.3)',
                                height: '0.3px'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
            <div style={{ padding: '0px 20px 00px 20px' }} >
                <div style={{ width: '100%', paddingLeft: '78%' }}>
                    <Typography>Total: ${(cart?.total ? cart.total / 100 : 0).toFixed(2)} </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '40%', paddingLeft: '30%', paddingRight: '30%', }}>
                    <StripeCheckout
                        name="Shop"
                        billingAddress
                        shippingAddress
                        amount={cart?.total}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <IconButton color='success' sx={{ fontSize: '28px', borderRadius: 0 }}>
                            Checkout <CreditScore sx={{ marginLeft: 1 }}></CreditScore>
                        </IconButton >            </StripeCheckout>

                    <IconButton color='error' sx={{ fontSize: '28px', borderRadius: 0 }} onClick={() => dispatch(emptyCart())}>
                        Empty Cart <Delete sx={{ marginLeft: 1 }}></Delete>
                    </IconButton>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div style={{ padding: '0px 0px 30px 0px' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '12vh' }}>
                    <Typography sx={{ width: '100%', fontSize: '30px', fontWeight: 900, padding: '0px 20px 0px 20px', marginBottom: 1 }}>
                        Shopping Cart
                    </Typography>
                </div>
                {cart?.products.length == 0 ? <EmptyCart /> : <CartWithItems />}
            </div>
        </ >
    )
}

export default Cart;