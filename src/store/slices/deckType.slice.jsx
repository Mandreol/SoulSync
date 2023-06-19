import { createSlice } from "@reduxjs/toolkit";

export const deckTypeSlice = createSlice({
	name: "deckType",
	initialState: {
		deckType: "",
		deckSize: 0,
	},
	reducers: {
		setDeckType: (state, action) => {
			state.deckType = action.payload;
		},
		setDeckSize: (state, action) => {
			state.deckSize = action.payload;
		},
	},
});

export const { setDeckType, setDeckSize } = deckTypeSlice.actions;

export default deckTypeSlice.reducer;
