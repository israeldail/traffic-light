import React, { Fragment, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("red");


	return (
		<Fragment>
			<div className="trafficLightTop">
			</div>
			<div className="trafficLight">
			</div>
			<div className="container">
				<div onClick={() => setSelectedColor("red")} className={"red-light" + (selectedColor === "red" ? " glow" : "")} ></div>
				<div onClick={() => setSelectedColor("yellow")} className={"yellow-light" + (selectedColor === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"green-light" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
		</Fragment>
	);
};

export default Home;
