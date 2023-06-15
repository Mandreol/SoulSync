import { createSlice } from "@reduxjs/toolkit";

export const deckTypeSlice = createSlice({
	name: "deckType",
	initialState: 3,
	reducers: {
		setDeckType: (state, action) => {
			return action.payload;
		},
	},
});

export const { setDeckType } = deckTypeSlice.actions;

export default deckTypeSlice.reducer;
