import React from "react";
import "../styles/menu/menu.css";
import DeckSelector from "../components/menuComponents/DeckSelector";
import DealSelector from "../components/menuComponents/DealSelector";
import CustomDeal from "../components/menuComponents/CustomDeal";
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
				<DeckSelector />
				<DealSelector />
				<CustomDeal />
			</div>
		</div>
	);
};

export default Menu;
