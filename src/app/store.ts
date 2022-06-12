import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import windowSizeReducer from "../features/window/windowSize";

export const store = configureStore({
    reducer: {
        windowSize: windowSizeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
