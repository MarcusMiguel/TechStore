
import React, { useEffect, useState } from 'react'
import { Cart } from '@chec/commerce.js/types/cart';
import { Card, CardMedia, CardContent, Modal, Box, Typography, Grid, IconButton, Container } from '@mui/material';
import { CreditScore, Delete, Add, Remove } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE as string;

interface CartComponentProps {
    cart?: Cart,
    emptyCart: Function,
    updateItem: Function
}

const CartComponent = ({ cart, emptyCart, updateItem }: CartComponentProps) => {

    const [stripeToken, setStripeToken] = useState<Object>({});

    const onToken = (token) => {
        setStripeToken(token);
    };

    const isEmpty = !cart?.line_items.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1" sx={{ padding: '0px 20px 00px 20px' }}>Your Cart is empty!</Typography>
    );

    const amount = (cart) => {
        if (cart != undefined) {
            return cart.subtotal.raw * 100
        }
        else return 0
    }

    const CartWithItems = () => (
        <>
            <Grid container style={{ flexDirection: 'row', display: 'flex' }}>

                <Grid item xs={6} style={{}}>
                </Grid>
                <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>Price</Grid>
                <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>Quantity</Grid>
                <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>Total</Grid>
            </Grid>

            <Grid container direction='column' style={{ padding: '30px 20px 0px 20px', }}>
                {cart?.line_items.map((item) => (
                    <Grid item key={item.id} >
                        <Grid container style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={item.image?.url} alt='item' height='50px' />
                            </Grid>
                            <Grid item xs={5} style={{ fontSize: 20, fontWeight: 500, paddingLeft: 20 }}>{item.name}</Grid>
                            <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, }}>${item.price.formatted} </Grid>
                            <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, marginLeft: -8 }}>
                                <IconButton onClick={() => updateItem(item.id, (item.quantity - 1))} >
                                    <Remove />
                                </IconButton>
                                {item.quantity}
                                <IconButton onClick={() => updateItem(item.id, (item.quantity + 1))} >
                                    <Add />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} style={{ fontSize: 20, fontWeight: 500, paddingLeft: 21 }}>${item.line_total.formatted}</Grid>
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
                <div style={{ width: '100%', paddingLeft: '75%' }}>
                    <Typography>Subtotal: ${cart?.subtotal.formatted} </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '40%', paddingLeft: '30%', paddingRight: '30%', }}>

                    <StripeCheckout
                        name="Lama Shop"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart?.subtotal.raw}`}
                        amount={amount(cart)}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <IconButton color='success' sx={{ fontSize: '28px', borderRadius: 0 }}>

                            Checkout <CreditScore sx={{ marginLeft: 1 }}></CreditScore>
                        </IconButton >            </StripeCheckout>

                    <IconButton color='error' sx={{ fontSize: '28px', borderRadius: 0 }} onClick={() => emptyCart()}>
                        Empty Cart <Delete sx={{ marginLeft: 1 }}></Delete>
                    </IconButton>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div style={{ padding: '0px 0px 30px 0px' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '12vh' }}>
                    <Typography sx={{ width: '100%', fontSize: '30px', fontWeight: 900, padding: '0px 20px 0px 20px', marginBottom: 1 }}>
                        Shopping Cart
                    </Typography>

                </div>
                {isEmpty ? <EmptyCart /> : <CartWithItems />}
            </div>
        </Container >
    )
}

export default CartComponent