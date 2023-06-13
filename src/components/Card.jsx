import "../styles/card.css";

function Card({ deck, onClick }) {
	const imageStyle = {
		backgroundImage: `url(./img/maso_${deck.deck.mazo}/${deck.deck.id}.jpg)`,
	};
	return (
		<div className="card" onClick={onClick}>
			<div className="card-back">{`${deck.deck.id}`}</div>
			<div className="card-front" style={imageStyle}></div>
		</div>
	);
}

export default Card;
