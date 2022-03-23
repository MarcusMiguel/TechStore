import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const res = await axios.get(
        "http://localhost:5000/api/product",
    );
    return res.data;
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[] | null>) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    },
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer;