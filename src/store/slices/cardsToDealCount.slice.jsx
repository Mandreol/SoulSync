import { createSlice } from "@reduxjs/toolkit";

export const cardsToDealCountSilce = createSlice({
	name: "cardsToDealCount",
	initialState: 0,
	reducers: {
		setCardsToDealCount: (state, action) => {
			return action.payload;
		},
	},
});

export const { setCardsToDealCount } = cardsToDealCountSilce.actions;

export default cardsToDealCountSilce.reducer;
