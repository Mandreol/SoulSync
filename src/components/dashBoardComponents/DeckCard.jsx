import FlipabbeCard from "./FlipabbeCard";
import "../../styles/deckCard.css";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";

const DeckCard = () => {
	let deck = [];

	const deckType = useSelector((state) => state.deckType.deckType);
	const deckSize = useSelector((state) => state.deckType.deckSize);
	const cardsToDealCount = useSelector((state) => state.cardsToDealCount);
	const backTexts = [];
	const isDeckOrdered = true;
	let tiradaClass = "";
	console.log(deckSize);
	for (let i = 1; i <= cardsToDealCount; i++) {
		if (!isDeckOrdered) {
			let random = Math.floor(Math.random() * (deckSize - 1) + 1);
			deck.push({ id: random, cardNumber: i, deckType });
		} else {
			deck.push({ id: i, cardNumber: i, deckType });
		}
	}
	deck.map((e, i) => (e.backText = backTexts[i]));

	tiradaClass =
		cardsToDealCount <= 8
			? { gap: "5rem", height: "100vh" }
			: { gap: "0.5rem", height: "100%" };
	return (
		<TransitionGroup className="deckCard" style={tiradaClass}>
			{deck.map((c) => (
				<FlipabbeCard key={c.id} deck={c} />
			))}
		</TransitionGroup>
	);
};

export default DeckCard;
