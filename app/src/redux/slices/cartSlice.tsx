import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

    }
});

export const { setCart, addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;