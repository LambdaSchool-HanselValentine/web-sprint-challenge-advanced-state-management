import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

//Task List:

//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

export const fetchSmurfs = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING_SMURF });

		axios
			.get("http://localhost:3333/smurfs")
			.then((res) => {
				dispatch({ type: FETCHING_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCHING_FAILED, payload: JSON.stringify(err) });
			});
	};
};

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (name, nickname, position, summary) => {
	return {
		type: ADD_SMURF,
		payload: {
			name: name,
			nickname: nickname,
			position: position,
			summary: summary,
		},
	};
};

//3. Add a standard action that allows us to set the value of the error message slice of state.
export const setErrorMsg = (error) => {
	return { type: SET_ERROR_MESSAGE, payload: error };
};
