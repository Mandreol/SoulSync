import { createSlice } from "@reduxjs/toolkit";

export const selectedFullViewCardSilce = createSlice({
	name: "selectedFullViewCard",
	initialState: 0,
	reducers: {
		setSelectedFullViewCard: (state, action) => {
			return action.payload;
		},
	},
});

export const { setSelectedFullViewCard } = selectedFullViewCardSilce.actions;

export default selectedFullViewCardSilce.reducer;
