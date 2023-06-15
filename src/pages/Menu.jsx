import React from "react";
import { useDispatch } from "react-redux";
import { setDeckType } from "../store/slices/deckType.slice";
import { setCardsToDealCount } from "../store/slices/cardsToDealCount.slice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const submit = (data) => {
		dispatch(setDeckType(data.deckType));
		dispatch(setCardsToDealCount(data.cardsToDealCount));

		navigate("/dashboard");
	};

	return (
		<div className="menu-container">
			<form onSubmit={handleSubmit(submit)} className="menu-form">
				<label htmlFor="deckType">¿Con que maso trabajamos?</label>
				<select name="deckType" {...register("deckType")}>
					<option value="1">Point Of Viwe</option>
					<option value="2">Fantastic cards</option>
					<option value="3">Principios Ñu</option>
				</select>
				<label htmlFor="cardsToDealCount">¿cuantas cartas quieres repartir?</label>
				<input type="number" {...register("cardsToDealCount")} />
				<input type="submit" value="Repartir" />
			</form>
		</div>
	);
};

export default Menu;
