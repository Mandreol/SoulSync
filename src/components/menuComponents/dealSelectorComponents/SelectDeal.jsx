import React, { useEffect, useState } from "react";
import "../../../styles/menu/dealSelector/selectDeal.css";
import { setSelectedDealStatus } from "../../../store/slices/selectedDealStatus.slice";
import { useDispatch, useSelector } from "react-redux";

const SelectDeal = () => {
	const dealsList = [
		"tirada_1",
		"tirada_2",
		"tirada_3",
		"tirada_4",
		"tirada_5",
		"tirada_6",
		"tirada_7",
	];
	const [selectedClass, setSelectedClass] = useState("");
	const [listClass, setListClass] = useState("hidden");
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);
	const dispatch = useDispatch();

	const selectDeal = () => {
		dispatch(setSelectedDealStatus(2));
	};

	useEffect(() => {
		setSelectedClass(selectedDealStatus === 2 ? "selected-1" : "");
	}, [selectedDealStatus]);

	useEffect(() => {
		setListClass(selectedDealStatus === 2 ? "visible" : "hidden");
	}, [selectedDealStatus]);

	return (
		<div className="selectDeal-element-container">
			<div
				className={`selectDeal-element ${selectedClass}`}
				onClick={() => selectDeal()}></div>
			<h1 className="selectDeal-title">Elegir una tirada</h1>
			<div className={`selectDeal-element-list-${listClass}`}>
				<div className="selectDeal-element-list-inner">
					{dealsList.map((e, i) => (
						<div className="selectDeal-element-item" key={dealsList[i]}>
							{e}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectDeal;
