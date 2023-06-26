import { createSlice } from "@reduxjs/toolkit";

export const selectedDealStatusSilce = createSlice({
	name: "selectedDealStatus",
	initialState: 0,
	reducers: {
		setSelectedDealStatus: (state, action) => {
			return action.payload;
		},
	},
});

export const { setSelectedDealStatus } = selectedDealStatusSilce.actions;

export default selectedDealStatusSilce.reducer;
