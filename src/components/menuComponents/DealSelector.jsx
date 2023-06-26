import React, { useEffect, useState } from "react";
import "../../styles/menu/dealSelector/dealSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { setMenuStatus } from "../../store/slices/menuStatus.slice";
import DeckExplorer from "./dealSelectorComponents/DeckExplorer";
import SelectDeal from "./dealSelectorComponents/SelectDeal";
import DealCustomize from "./dealSelectorComponents/DealCustomize";
import { useNavigate } from "react-router-dom";

const DealSelector = () => {
	const [buttonClassLeft, setButtonClassLeft] = useState("none");
	const [buttonClassRigth, setButtonClassRigth] = useState("none");
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const menuStatus = useSelector((state) => state.menuStatus);

	const backButton = () => {
		dispatch(setMenuStatus(0));
	};

	const continueButton = () => {
		selectedDealStatus === 1 ||
		(selectedDealStatus === 2 && dealType !== undefined)
			? navigate("/dashboard")
			: dispatch(setMenuStatus(2));
	};

	useEffect(() => {
		menuStatus === 1 ? setButtonClassLeft("flex") : setButtonClassLeft("none");
	}, [menuStatus]);

	useEffect(() => {
		selectedDealStatus !== 0 && menuStatus === 1
			? setButtonClassRigth("flex")
			: setButtonClassRigth("none");
	}, [selectedDealStatus, menuStatus]);

	return (
		<div className="dealSelector">
			<h1>¿Qué querés hacer hoy?</h1>
			<div className="dealSelector-container">
				<div
					className="dealSelector-element-button-left"
					onClick={() => backButton()}
					style={{ display: buttonClassLeft }}></div>
				<DeckExplorer />
				<SelectDeal />
				<DealCustomize />
				<div
					className="dealSelector-element-button-rigth"
					onClick={() => continueButton()}
					style={{ display: buttonClassRigth }}></div>
			</div>
		</div>
	);
};

export default DealSelector;
