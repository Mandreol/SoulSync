import FlipabbeCard from "./FlipabbeCard";
import "../styles/deckCard.css";
import { TransitionGroup } from "react-transition-group";

const DeckCard = () => {
	let deck = [];
	const n = 3;
	const mazo = 3;
	const texts = ["Pasado", "Presente", "Futuro"];
	let tiradaClass = "";

	for (let i = 1; i <= n; i++) {
		deck.push({ id: i, mazo });
	}
	deck.map((e, i) => (e.text = texts[i]));

	tiradaClass =
		n <= 8 ? { gap: "5rem", height: "100vh" } : { gap: "0.5rem", height: "100%" };
	return (
		<TransitionGroup className="deckCard" style={tiradaClass}>
			{deck.map((c) => (
				<FlipabbeCard key={c.id} deck={c} />
			))}
		</TransitionGroup>
	);
};

export default DeckCard;
