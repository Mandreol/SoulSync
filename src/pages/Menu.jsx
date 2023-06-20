import React from "react";
import { useDispatch } from "react-redux";
import { setCardsToDealCount } from "../store/slices/cardsToDealCount.slice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/menu.css";
import DeckTypeSelector from "../components/menuComponents/DeckTypeSelector";
import DealTypeSelector from "../components/menuComponents/DealTypeSelector";

const Menu = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const submit = (data) => {
		dispatch(setCardsToDealCount(data.cardsToDealCount));

		navigate("/dashboard");
	};

	return (
		<div className="menu-container">
			<DeckTypeSelector />
			<DealTypeSelector />
			<form onSubmit={handleSubmit(submit)} className="menu-form">
				<label htmlFor="cardsToDealCount">¿cuantas cartas quieres repartir?</label>
				<input type="number" {...register("cardsToDealCount")} />
				<input type="submit" value="Repartir" />
			</form>
		</div>
	);
};

export default Menu;
