import { createSlice } from "@reduxjs/toolkit";

export const menuStatusSilce = createSlice({
	name: "menuStatus",
	initialState: 0,
	reducers: {
		setMenuStatus: (state, action) => {
			return action.payload;
		},
	},
});

export const { setMenuStatus } = menuStatusSilce.actions;

export default menuStatusSilce.reducer;
