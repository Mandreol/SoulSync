import DeckCard from "../components/dashBoardComponents/DeckCard";
import FullCardView from "../components/dashBoardComponents/FullCardView";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/menu");
	};
	return (
		<div className="dashboard">
			<div className="backButton" onClick={handleClick}>
				<h1></h1>
			</div>
			<DeckCard />
			<FullCardView />
		</div>
	);
};

export default Dashboard;
