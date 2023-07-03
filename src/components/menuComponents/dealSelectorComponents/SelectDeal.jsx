import React, { useEffect, useState } from "react";
import "../../../styles/menu/dealSelector/selectDeal.css";
import { setSelectedDealStatus } from "../../../store/slices/selectedDealStatus.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	setId,
	setCardsToDeal,
	setDealType,
	setTitle,
	setSubTitle,
	setTexts,
	setCardTexts,
	setBackTexts,
	setFooter,
} from "../../../store/slices/dealData.slice";
import { dealsList } from "../../../dealData/dealDatas.js";

const SelectDeal = () => {
	const [selectedClass, setSelectedClass] = useState("");
	const [listClass, setListClass] = useState("hidden");
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);
	const dispatch = useDispatch();
	const [selectedItem, setSelectedItem] = useState(null);
	const menuStatus = useSelector((state) => state.menuStatus);

	const selectDeal = () => {
		dispatch(setSelectedDealStatus(2));
	};

	const selectedDeal = (deal) => {
		setSelectedItem(deal.dealType);
		dispatch(setId(deal.id));
		dispatch(setDealType(deal.dealType));
		dispatch(setCardsToDeal(deal.cardsToDeal));
		dispatch(setTitle(deal.title));
		dispatch(setSubTitle(deal.subTitle));
		dispatch(setTexts(deal.text));
		dispatch(setCardTexts(deal.cardTexts));
		dispatch(setBackTexts(deal.backTexts));
		dispatch(setFooter(deal.footer));
	};

	useEffect(() => {
		setSelectedClass(
			selectedDealStatus === 2 && menuStatus === 1 ? "selected-1" : ""
		);
	}, [selectedDealStatus]);

	useEffect(() => {
		setListClass(
			selectedDealStatus === 2 && menuStatus === 1 ? "visible" : "hidden"
		);
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
						<div
							className={`selectDeal-element-item ${
								selectedItem === e.customDealName ? "selected-2" : ""
							}`}
							key={dealsList[i]}
							onClick={() => selectedDeal(e)}>
							{e.title}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectDeal;
