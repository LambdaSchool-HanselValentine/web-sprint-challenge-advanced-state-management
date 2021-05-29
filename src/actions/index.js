import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

//Task List:

//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING_SMURF });
		axios.get("http://localhost:3333/smurfs").then((res) => {
			console.log(res);
		});
	};
};

// //2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
// export const addSmurf = (name, nickname, position, summary) => {
// 	return { type: ADD_SMURF, payload: name, nickname, position, summary };
// };

// //3. Add a standard action that allows us to set the value of the error message slice of state.
