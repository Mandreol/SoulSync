import DeckCard from "../components/dashBoardComponents/DeckCard";
import FullCardView from "../components/dashBoardComponents/FullCardView";
import "../styles/dashboard.css";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<DeckCard />
			<FullCardView />
		</div>
	);
};

export default Dashboard;
