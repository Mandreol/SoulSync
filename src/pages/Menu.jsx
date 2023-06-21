import React from "react";
import "../styles/menu.css";
import DeckTypeSelector from "../components/menuComponents/DeckTypeSelector";
import DealTypeSelector from "../components/menuComponents/DealTypeSelector";
import CustomCardDeal from "../components/menuComponents/CustomCardDeal";
import { useSelector } from "react-redux";

const Menu = () => {
	const menuStatus = useSelector((state) => state.menuStatus);

	let viewClass;
	menuStatus === 0
		? (viewClass = "menu-view-0")
		: menuStatus === 1
		? (viewClass = "menu-view-1")
		: (viewClass = "menu-view-2");

	return (
		<div className="menu-view">
			<div className={viewClass}>
				<DeckTypeSelector />
				<DealTypeSelector />
				<CustomCardDeal />
			</div>
		</div>
	);
};

export default Menu;
