import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[] | null>) => {
            state.products = action.payload;
        },
    }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer;