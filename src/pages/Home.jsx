import React from "react";
import "../styles/home/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const doLogin = () => {
		navigate("/menu");
	};

	return (
		<div className="home-container">
			<h1>Bienvenida</h1>
			<button onClick={doLogin}>Comenzar</button>
		</div>
	);
};

export default Home;
