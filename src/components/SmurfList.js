import React, { useEffect } from "react";
import Smurf from "./Smurf";

//1
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

const SmurfList = ({ smurfs, isFetching, fetchSmurfs }) => {
	useEffect(() => {
		console.log("fetchSmurfs called in child component");
		fetchSmurfs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// // dont need anymore:
	// const isLoading = false;
	// const testSmurf = {
	// 	id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
	// 	name: "Poppa Smurf",
	// 	position: "Village Leader",
	// 	nickname: "Pops",
	// 	description:
	// 		"Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
	// };

	// 3.
	if (isFetching) {
		return <h1>Loading...</h1>;
	}

	return (
		// 2.
		<div className="listContainer">
			{smurfs.map((smurf) => {
				return <Smurf key={smurf.id} smurf={smurf} />;
			})}
			{/* dont need anymore: 
			<Smurf smurf={testSmurf} /> */}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
	};
};

// export default SmurfList;
export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
