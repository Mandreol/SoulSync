import { createSlice } from "@reduxjs/toolkit";

export const deckTypeSlice = createSlice({
	name: "deckType",
	initialState: {
		deckType: 0,
		deckSize: 0,
	},
	reducers: {
		setDeckType: (state, action) => {
			state.deckType = action.payload;
			action.payload === 1
				? (state.deckSize = 65)
				: action.payload === 2
				? (state.deckSize = 80)
				: (state.deckSize = 25);
		},
	},
});

export const { setDeckType } = deckTypeSlice.actions;

export default deckTypeSlice.reducer;
