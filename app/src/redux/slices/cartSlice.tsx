import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { useAppSelector } from "../hooks/hooks";

interface Cart {
    products: Item[],
    total: number
}

interface Item {
    _id: string,
    quantity: number,
}
interface CartState {
    cart: Cart | null;
}

interface User {
    _id: string,
    username: string,
    isAdmin: boolean,
    email: string,
    accessToken: string
};

const initialState: CartState = {
    cart: { products: [], total: 0 },
};

interface Product {
    _id: string,
    title: string,
    desc: string,
    img: string,
    price: number,
}

interface addProductTesteData {
    product: Product,
    currentUser: User | null,
}

export const addProductTeste = createAsyncThunk('addProductTeste', async (data: addProductTesteData, thunkAPI) => {

    thunkAPI.dispatch(addProduct(data.product));

    const cart = await axios.get(
        "http://localhost:5000/api/cart/" + data.currentUser?._id,
        { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });

    const state = thunkAPI.getState() as RootState

    if (cart == null) {
        const res = await axios.post(
            "http://localhost:5000/api/cart/", {
            userId: data.currentUser?._id,
            products: state.cart.cart?.products,
            total: state.cart.cart?.total,
        }, { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });
    }
    else {
        const res = await axios.put(
            "http://localhost:5000/api/cart/",
            state.cart.cart, { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });
    }
});

interface fetchCartData {
    currentUser: User | null,
}

export const fetchCart = createAsyncThunk('fetchCart', async (data: fetchCartData, thunkAPI) => {
    try {
        const res = await axios.get(
            "http://localhost:5000/api/cart/find/" + data.currentUser?._id
        );

        setCart(res.data);
    } catch (err) { }
});


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<Cart | null>) => {
            state.cart = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product | undefined>) => {
            if (state.cart != null && action.payload != null) {
                let index = state.cart.products.findIndex(x => x._id == action.payload?._id);
                if (index != -1) {
                    state.cart.products[index].quantity += 1;
                }
                else {
                    state.cart.products.push({ _id: action.payload?._id, quantity: 1 });
                }
                state.cart.total += action.payload.price * 100;
            }
        },
        removeProduct: (state, action: PayloadAction<Product | undefined>) => {
            if (state.cart != null) {
                let index = state.cart.products.findIndex(x => x._id == action.payload?._id);
                if (index != -1) {
                    state.cart.products[index].quantity -= 1;
                    if (state.cart.products[index].quantity == 0) {
                        state.cart.products.splice(index);
                    }
                    state.cart.total -= action.payload?.price ? action.payload.price * 100 : 0;
                }
            }
        },
        emptyCart: (state) => {
            if (state.cart != null) {
                state.cart.products = [];
                state.cart.total = 0;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addProductTeste.fulfilled, (state, action) => {
            // state.products = action.payload;
        })
    },
});

export const { setCart, addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;