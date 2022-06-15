import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type WindowSizeState = {
    width: number;
    height: number;
};

const initialState: WindowSizeState = {
    width: 0,
    height: 0,
};

export const windowSizeSlice = createSlice({
    name: "windowSize",
    initialState,
    reducers: {
        getWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload;
        },
        getHeight: (state, action: PayloadAction<number>) => {
            state.height = action.payload;
        },
    },
});

export const { getWidth, getHeight } = windowSizeSlice.actions;

export const selectWidth = (state: RootState) => state.windowSize.width;
export const selectHeight = (state: RootState) => state.windowSize.height;

export default windowSizeSlice.reducer;
