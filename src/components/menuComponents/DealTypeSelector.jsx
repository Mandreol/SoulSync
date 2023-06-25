import React, { useEffect, useState } from "react";
import "../../styles/dealTypeSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { setCardsToDealCount } from "../../store/slices/cardsToDealCount.slice";
import { useNavigate } from "react-router-dom";
import { setMenuStatus } from "../../store/slices/menuStatus.slice";

const DealTypeSelector = () => {
	const [buttonClassLeft, setButtonClassLeft] = useState("none");
	const [buttonClassRigth, setButtonClassRigth] = useState("none");
	const [listClass, setListClass] = useState("hidden");
	const [isSelected, setIsSelected] = useState(0);
	const dispatch = useDispatch();
	const deckSize = useSelector((state) => state.deckType.deckSize);
	const navigate = useNavigate();
	const menuStatus = useSelector((state) => state.menuStatus);

	const dealsList = [
		"tirada_1",
		"tirada_2",
		"tirada_3",
		"tirada_4",
		"tirada_5",
		"tirada_6",
		"tirada_7",
	];

	const explore = () => {
		dispatch(setCardsToDealCount(deckSize));
		navigate("/dashboard");
	};

	const customDeal = () => {
		dispatch(setMenuStatus(2));
	};

	const backMenu = () => {
		dispatch(setMenuStatus(0));
	};

	const handleContinue = () => {
		isSelected === 1
			? explore()
			: isSelected === 3
			? dispatch(setMenuStatus(2))
			: null;
	};

	const selected = (option) => (isSelected === option ? "selected-1" : "");

	useEffect(() => {
		menuStatus === 1 ? setButtonClassLeft("flex") : setButtonClassLeft("none");
	}, [menuStatus]);

	useEffect(() => {
		isSelected === 0 || menuStatus !== 1
			? setButtonClassRigth("none")
			: setButtonClassRigth("flex");
	}, [isSelected, menuStatus]);

	useEffect(() => {
		isSelected === 2 ? setListClass("visible") : setListClass("hidden");
	}, [isSelected]);

	return (
		<div className="dealTypeSelector">
			<h1>¿Qué querés hacer hoy?</h1>
			<div className="dealTypeSelector-container">
				<div
					className="dealTypeSelector-element-button-left"
					onClick={backMenu}
					style={{ display: buttonClassLeft }}></div>
				<div className="dealTypeSelector-element-container">
					<div
						className={`dealTypeSelector-element ${selected(1)}`}
						onClick={() => setIsSelected(1)}
						style={{ backgroundImage: "url('./img/assets/explorar.png')" }}></div>
					<h1>Explorar el mazo</h1>
				</div>
				<div className="dealTypeSelector-element-container">
					<div
						className={`dealTypeSelector-element ${selected(2)}`}
						onClick={() => setIsSelected(2)}
						style={{ backgroundImage: "url('./img/assets/tirada.png')" }}></div>
					<h1>Elegir una tirada</h1>
					<div className={`dealTypeSelector-element-list-${listClass}`}>
						<div className="element-list">
							{dealsList.map((e, i) => (
								<div className="element" key={dealsList[i]}>
									{e}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="dealTypeSelector-element-container">
					<div
						className={`dealTypeSelector-element ${selected(3)}`}
						onClick={() => setIsSelected(3)}
						style={{ backgroundImage: "url('./img/assets/personalizar.png')" }}></div>
					<h1>Personalizar tirada</h1>
				</div>
				<div
					className="dealTypeSelector-element-button-rigth"
					onClick={handleContinue}
					style={{ display: buttonClassRigth }}></div>
			</div>
		</div>
	);
};

export default DealTypeSelector;
