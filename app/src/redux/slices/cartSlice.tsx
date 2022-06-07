import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { useAppSelector } from "../hooks/hooks";

interface Item {
    _id: string,
    quantity: number,
}

interface Cart {
    products: Item[],
    total: number
}

interface CartState {
    cart: Cart | null;
}

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

interface User {
    _id: string,
    username: string,
    isAdmin: boolean,
    email: string,
    accessToken: string
};

interface addProductAsyncData {
    product: Product | undefined,
    currentUser: User | null,
}

interface addProductAsyncData {
    product: Product | undefined,
    currentUser: User | null,
}

interface emptyCartAsyncData {
    currentUser: User | null,
}

interface loadCartData {
    currentUser: User | null,
}

export const addProductAsync = createAsyncThunk('addProductAsync', async (data: addProductAsyncData, thunkAPI) => {
    try {
        thunkAPI.dispatch(addProduct(data.product));

        const state = thunkAPI.getState() as RootState;

        const res = await axios.put(
            "http://localhost:5000/api/cart/",
            { _id: data.currentUser?._id, userId: data.currentUser?._id, products: state.cart.cart?.products, total: state.cart.cart?.total }, { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });

    } catch (err) { }
});

export const removeProductAsync = createAsyncThunk('removeProductAsync', async (data: addProductAsyncData, thunkAPI) => {
    try {
        thunkAPI.dispatch(removeProduct(data.product));

        const state = thunkAPI.getState() as RootState;

        const res = await axios.put(
            "http://localhost:5000/api/cart/",
            { _id: data.currentUser?._id, userId: data.currentUser?._id, products: state.cart.cart?.products, total: state.cart.cart?.total }, { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });
    } catch (err) { }
});

export const emptyCartAsync = createAsyncThunk('emptyCartAsync', async (data: emptyCartAsyncData, thunkAPI) => {
    try {
        thunkAPI.dispatch(emptyCart());

        const state = thunkAPI.getState() as RootState;

        const res = await axios.put(
            "http://localhost:5000/api/cart/",
            { _id: data.currentUser?._id, userId: data.currentUser?._id, products: [], total: 0 }, { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });
    } catch (err) { }
});

export const loadCart = createAsyncThunk('loadCart', async (data: loadCartData, thunkAPI) => {
    try {
        const cart = await axios.get(
            "http://localhost:5000/api/cart/" + data.currentUser?._id,
            { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });

        const state = thunkAPI.getState() as RootState;

        if (cart.data == null) {
            const res = await axios.post(
                "http://localhost:5000/api/cart/", {
                _id: data.currentUser?._id,
                userId: data.currentUser?._id,
                products: state.cart.cart?.products,
                total: state.cart.cart?.total,
            }, { headers: { "token": `Bearer ${data.currentUser?.accessToken}` } });
        }
        else {
            thunkAPI.dispatch(setCart(cart.data));
        }
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
                    if (state.cart.products[index].quantity <= 0) {
                        console.log("removing")
                        console.log(state.cart.products)
                        state.cart.products = state.cart.products.filter(x => x != state.cart?.products[index]);
                        console.log(state.cart.products)
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
});

export const { setCart, addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;