import { createSlice } from "@reduxjs/toolkit";

export const fullCardViewActiveSilce = createSlice({
	name: "fullCardViewActive",
	initialState: false,
	reducers: {
		setFullCardViewActive: (state, action) => {
			return action.payload;
		},
	},
});

export const { setFullCardViewActive } = fullCardViewActiveSilce.actions;

export default fullCardViewActiveSilce.reducer;
