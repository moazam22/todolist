import listTypes from "./list.types";
const initialState = [];

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case listTypes.CREATE_LIST:
			return [...state, action.payload];
		case listTypes.EDIT_LIST:
			return state.map((list) =>
				list._id === action.payload._id ? action.payload : list
			);
		case listTypes.DELETE_LIST:
			return state.filter((list) => list._id !== action.payload);
		default:
			return state;
	}
};

export default listReducer;
