import { useState } from "react";
import { DealButton } from "../components/dashBoardComponents/DealButton";
import DeckCard from "../components/dashBoardComponents/DeckCard";
import FullCardView from "../components/dashBoardComponents/FullCardView";
import "../styles/dashboard/dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [goDeal, setGoDeal] = useState(false);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/menu");
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
