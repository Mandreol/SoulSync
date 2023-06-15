import React from "react";
import "../../styles/FullSizeImageButton.css";

const FullSizeImageButton = ({ showButtonClass }) => {
	console.log(showButtonClass);
	return <div className="FullSizeImageButton" style={showButtonClass}></div>;
};

export default FullSizeImageButton;
