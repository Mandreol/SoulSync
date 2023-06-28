import React from "react";
import "../../styles/dashboard/dealButton.css";

export const DealButton = ({ onClick }) => {
	const value = true;
	const handleOnClick = () => {
		onClick(value);
	};

	return <div className="dealButton" onClick={handleOnClick}></div>;
};
