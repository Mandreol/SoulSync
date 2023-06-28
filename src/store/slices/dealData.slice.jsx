import { createSlice } from "@reduxjs/toolkit";

export const dealDataSlice = createSlice({
	name: "dealData",
	initialState: {
		deckType: "", // Tipo de baraja
		deckSize: 0, // Tamaño de la baraja
		cardsToDeal: 0, // Número de cartas a repartir
		dealType: "", // Nombre de la tirada
		title: "", // Título
		subTitle: "", // Subtítulo
		texts: [], // area de texto
		cardTexts: [], // Texto superior de las cartas
		backTexts: [], // texto de las cartas en reverso
		footer: "", // Pie de página
	},
	reducers: {
		setDeckType: (state, action) => {
			state.deckType = action.payload; // Establece el tipo de baraja
		},
		setDeckSize: (state, action) => {
			state.deckSize = action.payload; // Establece el tamaño de la baraja
		},
		setCardsToDeal: (state, action) => {
			state.cardsToDeal = action.payload; // Establece el número de cartas a repartir
		},
		setDealType: (state, action) => {
			state.dealType = action.payload; // Establece el tipo de la tirada
		},
		setTitle: (state, action) => {
			state.title = action.payload; // Establece el título de la tirada
		},
		setSubTitle: (state, action) => {
			state.subTitle = action.payload; // Establece el subtítulo de la tirada
		},
		setTexts: (state, action) => {
			state.texts = action.payload; // Establece el subtítulo de la tirada
		},
		setCardTexts: (state, action) => {
			state.cardTexts = action.payload; // Establece los títulos de las cartas
		},
		setBackTexts: (state, action) => {
			state.backTexts = action.payload; // Establece los títulos de las cartas en reverso
		},
		setFooter: (state, action) => {
			state.footer = action.payload; // Establece el pie de página
		},
	},
});

export const {
	setDeckType,
	setDeckSize,
	setCardsToDeal,
	setDealType,
	setTitle,
	setSubTitle,
	setTexts,
	setCardTexts,
	setBackTexts,
	setFooter,
} = dealDataSlice.actions;

export default dealDataSlice.reducer;
