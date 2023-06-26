import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/menu/dealSelector/deckExplorer.css";
import { setCardsToDealCount } from "../../../store/slices/cardsToDealCount.slice";
import { setSelectedDealStatus } from "../../../store/slices/selectedDealStatus.slice";

const DeckExplorer = () => {
	const dispatch = useDispatch();
	const deckSize = useSelector((state) => state.deckType.deckSize);
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);

	const [selectedClass, setSelectedClass] = useState("");

	const explore = () => {
		dispatch(setCardsToDealCount(deckSize));
		dispatch(setSelectedDealStatus(1));
	};

	useEffect(() => {
		setSelectedClass(selectedDealStatus === 1 ? "selected-1" : "");
	}, [selectedDealStatus]);

	return (
		<div className="deckExplorer-element-container">
			<div
				className={`deckExplorer-element ${selectedClass}`}
				onClick={() => explore()}></div>
			<h1>Explorar el mazo</h1>
		</div>
	);
};

export default DeckExplorer;
