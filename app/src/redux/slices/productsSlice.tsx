import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

interface Product {
    _id: string,
    title: string,
    desc: string,
    img: string,
    price: number,
}

interface ProductsState {
    products: Product[] | null;
}

const initialState: ProductsState = {
    products: [],
};

export const loadProducts = createAsyncThunk('loadProducts', async (data, thunkAPI) => {
    const res = await axios.get(
        "http://localhost:5000/api/product",
    );

    const state = thunkAPI.getState() as RootState;
    thunkAPI.dispatch(setProducts(res.data))
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[] | null>) => {
            state.products = action.payload;
        },
    },
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer;