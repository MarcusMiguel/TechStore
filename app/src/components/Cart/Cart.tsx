
import { useEffect, useState } from 'react';
import StripeCheckout, { Token } from "react-stripe-checkout";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { emptyCart, addProductAsync, removeProductAsync, emptyCartAsync } from "../../redux/slices/cartSlice";
import { AddIcon, CartActions, CartContainer, CartIsEmptyIcon, CartTitle, CartWithItems, CheckoutButton, CheckoutIcon, EmptyCart, EmptyCartButton, EmptyCartIcon, EmptyCartMessage, GoBackButton, ImageColumnCell, PriceColumnCell, QuantityColumnCell, RemoveIcon, SubtotalColumnCell, Table, TableHeader, TableRow, TitleColumnCell, TotalAmount, } from './style';

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
        <CartContainer >
            {
                cart?.products.length == 0 ?
                    <EmptyCart>
                        <EmptyCartMessage> Your Cart is empty!  <CartIsEmptyIcon /></EmptyCartMessage>
                        <GoBackButton onClick={() => navigate('/')}>Go Back</GoBackButton>
                    </EmptyCart>
                    :
                    <CartWithItems>
                        <CartTitle >
                            Shopping Cart
                        </CartTitle>
                        <Table>
                            <TableHeader>
                                <ImageColumnCell></ImageColumnCell>
                                <TitleColumnCell></TitleColumnCell>
                                <PriceColumnCell>Price</PriceColumnCell>
                                <QuantityColumnCell>Quantity</QuantityColumnCell>
                                <SubtotalColumnCell>Subtotal</SubtotalColumnCell>
                            </TableHeader>
                            {cart?.products?.map((item) => (
                                <TableRow>
                                    <ImageColumnCell>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <img src={products?.filter(x => x._id == item._id)[0].img} alt='item' height='50px' />
                                        </div>
                                    </ImageColumnCell>
                                    <TitleColumnCell>
                                        {products?.filter(x => x._id == item._id)[0].title}
                                    </TitleColumnCell>
                                    <PriceColumnCell>
                                        ${products?.filter(x => x._id == item._id)[0].price.toFixed(2)}
                                    </PriceColumnCell>
                                    <QuantityColumnCell>
                                        <RemoveIcon onClick={() => dispatch(removeProductAsync({ currentUser: currentUser, product: products?.filter(x => x._id == item._id)[0] }))} />
                                        {item.quantity}
                                        <AddIcon onClick={() => dispatch(addProductAsync({ currentUser: currentUser, product: products?.filter(x => x._id == item._id)[0] }))} />
                                    </QuantityColumnCell>
                                    <SubtotalColumnCell>= ${products?.filter(x => x._id == item._id)[0] ? (products?.filter(x => x._id == item._id)[0].price * item.quantity).toFixed(2) : 0}</SubtotalColumnCell>
                                </TableRow>
                            ))}
                        </Table>
                        <TotalAmount >
                            Total: ${(cart?.total ? cart.total / 100 : 0).toFixed(2)}
                        </TotalAmount>
                        <CartActions>
                            <StripeCheckout
                                name="Shop"
                                billingAddress
                                shippingAddress
                                amount={cart?.total}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <CheckoutButton >
                                    Checkout <CheckoutIcon></CheckoutIcon>
                                </CheckoutButton >
                            </StripeCheckout>
                            <EmptyCartButton onClick={() => dispatch(emptyCartAsync({ currentUser }))}>
                                Empty Cart <EmptyCartIcon></EmptyCartIcon>
                            </EmptyCartButton>
                        </CartActions>
                    </CartWithItems>
            }
        </CartContainer >
    )
}

export default Cart;


