import { configureStore } from "@reduxjs/toolkit";
import deckTypeReducer from "./slices/deckType.slice";
import cardsToDealCountReducer from "./slices/cardsToDealCount.slice";
import flippSateReducer from "./slices/flippState.slice";

export default configureStore({
	reducer: {
		deckType: deckTypeReducer,
		cardsToDealCount: cardsToDealCountReducer,
		flippState: flippSateReducer,
	},
});
