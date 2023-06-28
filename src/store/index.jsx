import { configureStore } from "@reduxjs/toolkit";
import flippSateReducer from "./slices/flippState.slice";
import fullCardViewActiveReducer from "./slices/fullCardViewActive.slice";
import selectedFullViewCarReducer from "./slices/selectedFullViewCard.silce";
import menuStatusReducer from "./slices/menuStatus.slice";
import selectedDealStatusReducer from "./slices/selectedDealStatus.slice";
import dealDataReducer from "./slices/dealData.slice";

export default configureStore({
	reducer: {
		flippState: flippSateReducer,
		fullCardViewActive: fullCardViewActiveReducer,
		selectedFullViewCard: selectedFullViewCarReducer,
		menuStatus: menuStatusReducer,
		selectedDealStatus: selectedDealStatusReducer,
		dealData: dealDataReducer,
	},
});
