import { configureStore } from "@reduxjs/toolkit";
import deckTypeReducer from "./slices/deckType.slice";
import cardsToDealCountReducer from "./slices/cardsToDealCount.slice";
import flippSateReducer from "./slices/flippState.slice";
import fullCardViewActiveReducer from "./slices/fullCardViewActive.slice";
import selectedFullViewCarReducer from "./slices/selectedFullViewCard.silce";
import menuStatusReducer from "./slices/menuStatus.slice";

export default configureStore({
	reducer: {
		deckType: deckTypeReducer,
		cardsToDealCount: cardsToDealCountReducer,
		flippState: flippSateReducer,
		fullCardViewActive: fullCardViewActiveReducer,
		selectedFullViewCard: selectedFullViewCarReducer,
		menuStatus: menuStatusReducer,
	},
});
