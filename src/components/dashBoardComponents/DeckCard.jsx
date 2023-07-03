import FlipabbeCard from "./FlipabbeCard";
import "../../styles/dashboard/deckCard.css";
import { useSelector } from "react-redux";

const DeckCard = () => {
	let deck = [];
	const fullCardViewActive = useSelector((state) => state.fullCardViewActive);
	const deckType = useSelector((state) => state.dealData.deckType);
	const deckSize = useSelector((state) => state.dealData.deckSize);
	const id = useSelector((state) => state.dealData.id);
	const dealType = useSelector((state) => state.dealData.dealType);
	const cardsToDeal = useSelector((state) => state.dealData.cardsToDeal);
	const title = useSelector((state) => state.dealData.title);
	const subTitle = useSelector((state) => state.dealData.subTitle);
	const footer = useSelector((state) => state.dealData.footer);
	const backTexts = useSelector((state) => state.dealData.backTexts);
	const isDeckOrdered = true;

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
			return cardsToDeal <= 12 ? { height: "100vh" } : { height: "100%" };
		}
	};
	return (
		<div className={`${dealType}_${id}`} style={tiradaClass(fullCardViewActive)}>
			{title === "" ? null : <div className="title">{title}</div>}
			{subTitle === "" ? null : <div className="subTitle"> {subTitle}</div>}
			{dealType === "pointOfView" ? (
				<textarea className="focusNote" name="focusNote"></textarea>
			) : null}
			{deck.map((c) => (
				<FlipabbeCard key={c.id} deck={c} />
			))}
			<div className="footer">{footer[0] === undefined ? null : footer}</div>
		</div>
	);
};

export default DeckCard;
