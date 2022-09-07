import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
// import windowSizeReducer from "../features/window/windowSize";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // windowSize: windowSizeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;
