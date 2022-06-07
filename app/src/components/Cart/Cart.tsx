
import { useEffect, useState } from 'react';
import { Add, CreditScore, Delete, Remove } from '@mui/icons-material';
import StripeCheckout, { Token } from "react-stripe-checkout";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Typography, IconButton, Table, TableCell, TableBody, TableRow, TableContainer, TableHead } from '@mui/material';
import { emptyCart, addProductAsync, removeProductAsync, emptyCartAsync } from "../../redux/slices/cartSlice";
import { StyledCartActions, StyledCartContainer, StyledCartTitle, StyledCartWithItems, StyledCheckoutButton, StyledEmptyCart, StyledEmptyCartButton, StyledQuantityActions, } from './style';
import Footer from '../Footer/Footer';

const KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;

const Cart = () => {
    const cart = useAppSelector((state) => state.cart.cart);
    const products = useAppSelector((state) => state.products.products);
    const [stripeToken, setStripeToken] = useState<Token>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { currentUser } = useAppSelector((state) => state.user);

    const onToken = (token: Token) => {
        setStripeToken(token);
    };

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

    return (
        <StyledCartContainer >
            {
                cart?.products.length == 0 ?
                    <div style={{ height: "57vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant="subtitle1" sx={{ padding: '0px 20px 0px 0px' }}>Your Cart is empty!</Typography>
                        <StyledEmptyCart />
                    </div>
                    :
                    <>
                        <StyledCartWithItems>
                            <StyledCartTitle >
                                Shopping Cart
                            </StyledCartTitle>
                            <TableContainer >
                                <Table size="small" aria-label="table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left" sx={{ width: "15%" }}></TableCell>
                                            <TableCell align="left" sx={{ width: "50%" }}></TableCell>
                                            <TableCell align="right" sx={{ width: "10%", textAlign: "start" }} >Price</TableCell>
                                            <TableCell align="right" sx={{ width: "15%", textAlign: "center" }}>Quantity</TableCell>
                                            <TableCell align="right" sx={{ width: "10%" }}>SubTotal</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart?.products?.map((item) => (
                                            <TableRow
                                                key={item._id}
                                            >
                                                <TableCell align="left" sx={{ width: "15%", fontSize: "10px !important" }}>
                                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                                        <img src={products?.filter(x => x._id == item._id)[0].img} alt='item' height='50px' />
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left" sx={{ width: "50%" }}>{products?.filter(x => x._id == item._id)[0].title}</TableCell>
                                                <TableCell align="right" sx={{ width: "10%", textAlign: "start" }}>${products?.filter(x => x._id == item._id)[0].price.toFixed(2)}</TableCell>
                                                <TableCell align="right" component="th" sx={{ width: "15%", textAlign: "center" }}>
                                                    <StyledQuantityActions>
                                                        <IconButton onClick={() => dispatch(removeProductAsync({ currentUser: currentUser, product: products?.filter(x => x._id == item._id)[0] }))} >
                                                            <Remove />
                                                        </IconButton>
                                                        <div style={{ display: "table-cell" }}>
                                                            {item.quantity}
                                                        </div>
                                                        <IconButton onClick={() => dispatch(addProductAsync({ currentUser: currentUser, product: products?.filter(x => x._id == item._id)[0] }))} >
                                                            <Add />
                                                        </IconButton>
                                                    </StyledQuantityActions>
                                                </TableCell>
                                                <TableCell align="right" sx={{ width: "10%" }}>${products?.filter(x => x._id == item._id)[0] ? (products?.filter(x => x._id == item._id)[0].price * item.quantity).toFixed(2) : 0}</TableCell>

                                            </TableRow>
                                        ))}
                                        <TableRow key={"totalRow"}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, paddingRight: "30px" }}
                                        >
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell>
                                                <div style={{ width: "100%", textAlign: "end", fontWeight: 700 }}>
                                                    Total: ${(cart?.total ? cart.total / 100 : 0).toFixed(2)}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer >

                        </StyledCartWithItems>
                        <StyledCartActions>
                            <StripeCheckout
                                name="Shop"
                                billingAddress
                                shippingAddress
                                amount={cart?.total}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <StyledCheckoutButton color='success'  >
                                    Checkout <CreditScore sx={{ marginLeft: 0.5 }}></CreditScore>
                                </StyledCheckoutButton >
                            </StripeCheckout>
                            <StyledEmptyCartButton color='error' onClick={() => dispatch(emptyCartAsync({ currentUser }))}>
                                Empty Cart <Delete sx={{ marginLeft: 0.5 }}></Delete>
                            </StyledEmptyCartButton>
                        </StyledCartActions>
                    </>
            }
            <Footer />
        </StyledCartContainer >
    )
}

export default Cart;


