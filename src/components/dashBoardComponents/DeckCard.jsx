import FlipabbeCard from "./FlipabbeCard";
import "../../styles/dashboard/deckCard.css";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";

const DeckCard = () => {
	let deck = [];
	const fullCardViewActive = useSelector((state) => state.fullCardViewActive);
	const deckType = useSelector((state) => state.deckType.deckType);
	const deckSize = useSelector((state) => state.deckType.deckSize);
	const cardsToDealCount = useSelector((state) => state.cardsToDealCount);
	const backTexts = [];
	const isDeckOrdered = true;

	for (let i = 1; i <= cardsToDealCount; i++) {
		if (!isDeckOrdered) {
			let random = Math.floor(Math.random() * (deckSize - 1) + 1);
			deck.push({ id: random, cardNumber: i, deckType });
		} else {
			deck.push({ id: i, cardNumber: i, deckType });
		}
	}
	deck.map((e, i) => (e.backText = backTexts[i]));

	const tiradaClass = (fullCardViewActive) => {
		if (fullCardViewActive) {
			return { display: "none" };
		} else {
			return cardsToDealCount <= 8
				? { gap: "5rem", height: "100vh" }
				: { gap: "0.5rem", height: "100%" };
		}
	};
	return (
		<TransitionGroup className="deckCard" style={tiradaClass(fullCardViewActive)}>
			{deck.map((c) => (
				<FlipabbeCard key={c.id} deck={c} />
			))}
		</TransitionGroup>
	);
};

export default DeckCard;
