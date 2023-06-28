import React, { useEffect, useState } from "react";
import "../../../styles/menu/dealSelector/selectDeal.css";
import { setSelectedDealStatus } from "../../../store/slices/selectedDealStatus.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	setCardsToDeal,
	setDealType,
	setTitle,
	setSubTitle,
	setTexts,
	setCardTexts,
	setBackTexts,
	setFooter,
} from "../../../store/slices/dealData.slice";

const SelectDeal = () => {
	const dealsList = [
		{
			dealType: "pointOfView_1",
			cardsToDeal: 3,
			title: "Ganancia y pérdida",
			subTitle:
				"Gane claridad con respecto a las decisiones que debe tomar en la vida. Analice los pro los contas desde una perespectiva diferente",
			cardTexts: [
				"¿Qué gano?",
				"¿Que precio estoy pagando?",
				"¿Qué he aprendido?",
			],

			backTexts: ["pasado", "presente", "futuro"],
			footer:
				"Se le invita a tomar nota de cada reflexión y tomar nota en cada caso",
		},
	];
	const [selectedClass, setSelectedClass] = useState("");

	const [listClass, setListClass] = useState("hidden");
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);
	const dispatch = useDispatch();
	const [selectedItem, setSelectedItem] = useState(null);

	const selectDeal = () => {
		dispatch(setSelectedDealStatus(2));
	};

	const selectedDeal = (deal) => {
		setSelectedItem(deal.dealType);
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
						<div
							className={`selectDeal-element-item ${
								selectedItem === e.customDealName ? "selected-2" : ""
							}`}
							key={dealsList[i]}
							onClick={() => selectedDeal(e)}>
							{e.dealType}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectDeal;
