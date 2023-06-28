import { useState } from "react";
import { DealButton } from "../components/dashBoardComponents/DealButton";
import DeckCard from "../components/dashBoardComponents/DeckCard";
import FullCardView from "../components/dashBoardComponents/FullCardView";
import "../styles/dashboard/dashboard.css";
import { useNavigate } from "react-router-dom";
import { resetData } from "../store/slices/dealData.slice";
import { useDispatch } from "react-redux";
import { setMenuStatus } from "../store/slices/menuStatus.slice";
import { setSelectedDealStatus } from "../store/slices/selectedDealStatus.slice";

const Dashboard = () => {
	const dispatch = useDispatch();
	const [goDeal, setGoDeal] = useState(false);
	const navigate = useNavigate();
	const handleClick = () => {
		dispatch(setMenuStatus(0));
		navigate("/menu");
		dispatch(resetData());
		dispatch(setSelectedDealStatus(0));
	};
	const handleCLikDealButton = () => {
		setGoDeal(true);
	};

	return (
		<div className="dashboard">
			<div className="backButton" onClick={handleClick}></div>
			<DealButton onClick={handleCLikDealButton} />
			{goDeal ? <DeckCard /> : null}
			<FullCardView />
		</div>
	);
};

export default Dashboard;
