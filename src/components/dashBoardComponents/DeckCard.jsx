import FlipabbeCard from "./FlipabbeCard";
import "../../styles/dashboard/deckCard.css";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";

const DeckCard = () => {
	let deck = [];
	const fullCardViewActive = useSelector((state) => state.fullCardViewActive);
	const deckType = useSelector((state) => state.dealData.deckType);
	const deckSize = useSelector((state) => state.dealData.deckSize);
	const dealType = useSelector((state) => state.dealData.dealType);
	const cardsToDeal = useSelector((state) => state.dealData.cardsToDeal);
	const title = useSelector((state) => state.dealData.title);
	const subTitle = useSelector((state) => state.dealData.subTitle);
	const footer = useSelector((state) => state.dealData.footer);
	const backTexts = useSelector((state) => state.dealData.backTexts);
	const isDeckOrdered = true;

	console.log(deckType);
	console.log(deckSize);
	console.log(dealType);
	console.log(cardsToDeal);
	console.log(title);
	console.log(subTitle);
	console.log(backTexts);
	console.log(footer);
	console.log(deck);

	for (let i = 1; i <= cardsToDeal; i++) {
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
			return cardsToDeal <= 8
				? { gap: "5rem", height: "100vh" }
				: { gap: "0.5rem", height: "100%" };
		}
	};

	return (
		<div className={dealType} style={tiradaClass(fullCardViewActive)}>
			<div className="title">{title}</div>
			<div className="subTitle">{subTitle}</div>
			{deck.map((c) => (
				<FlipabbeCard key={c.id} deck={c} />
			))}
			<div className="footer">{footer}</div>
		</div>
	);
};

export default DeckCard;
