import FlipabbeCard from "./FlipabbeCard";
import "../styles/deckCard.css";
import { TransitionGroup } from "react-transition-group";

const DeckCard = () => {
	let deck = [];
	const n = 6;
	const mazo = 2;

	for (let i = 1; i <= n; i++) {
		deck.push({ id: i, mazo });
	}
	return (
		<TransitionGroup className="deckCard">
			{deck.map((c) => (
				<FlipabbeCard key={c.id} deck={c} />
			))}
		</TransitionGroup>
	);
};

export default DeckCard;
