import {
	FETCHING_SMURF,
	FETCHING_SUCCESS,
	FETCHING_FAILED,
	ADD_SMURF,
	SET_ERROR_MESSAGE,
} from "../actions/index";

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
	smurfs: [],
	isFetching: false,
	error: "",
};
//
//2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action) => {
	switch (action.type) {
		//3. Add in a reducer case to accommodate the start of a smurf fetch.
		case FETCHING_SMURF:
			return {
				...state,
				isFetching: true,
			};
		//4. Add in a reducer case to accommodate the successful smurf api fetch.
		case FETCHING_SUCCESS:
			return {
				...state,
				smurfs: [...state.smurfs, action.payload],
				isFetching: false,
			};
		//5. Add in a reducer cases to accommodate the failed smurf api fetch.
		case FETCHING_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
		case ADD_SMURF: {
			return {
				...state,
				smurfs: [
					...state.smurfs,
					{
						name: action.payload.name,
						nickname: action.payload.nickname,
						position: action.payload.position,
						summary: action.payload.summary,
					},
				],
			};
		}
		//7. Add in a reducer case that adds in a value to the error message.
		case SET_ERROR_MESSAGE: {
			return {
				...state,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
