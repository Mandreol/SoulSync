import "../../../styles/menu/dealSelector/dealCustomize.css";
import { setSelectedDealStatus } from "../../../store/slices/selectedDealStatus.slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DealCustomize = () => {
	const dispatch = useDispatch();
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);
	const [selectedClass, setSelectedClass] = useState("");

	const customDeal = () => {
		dispatch(setSelectedDealStatus(3));
	};

	useEffect(() => {
		setSelectedClass(selectedDealStatus === 3 ? "selected-1" : "");
	}, [selectedDealStatus]);
	return (
		<div className={`dealCustomize-element-container `}>
			<div
				className={`dealCustomize-element ${selectedClass}`}
				onClick={() => customDeal()}
				style={{ backgroundImage: "url('./img/assets/personalizar.png')" }}></div>
			<h1>Personalizar tirada</h1>
		</div>
	);
};

export default DealCustomize;
