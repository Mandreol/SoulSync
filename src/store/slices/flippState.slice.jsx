import { createSlice } from "@reduxjs/toolkit";

export const flippStateSilce = createSlice({
	name: "flippState",
	initialState: true,
	reducers: {
		setFlippState: (state, action) => {
			return action.payload;
		},
	},
});

export const { setFlippState } = flippStateSilce.actions;

export default flippStateSilce.reducer;
