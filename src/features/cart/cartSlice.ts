import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuantity } from '../../interfaces/IQuantity';

const initialState: IQuantity[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.find(
                (item) => item.id === action.payload.id
            );
            itemExists
                ? itemExists.quantity++
                : state.push({ ...action.payload, quantity: 1 });
        },
        incrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            item && item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item && item.quantity === 1) {
                const index = state.findIndex(
                    (item) => item.id === action.payload
                );
                state.splice(index, 1);
            } else {
                item && item.quantity--;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
