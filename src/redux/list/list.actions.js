import listActionTypes from "./list.types";

export const createList = (data) => {
	console.log(data);
	return {
		type: listActionTypes.CREATE_LIST,
		payload: data,
	};
};

export const editList = (data) => ({
	type: listActionTypes.EDIT_LIST,
	payload: data,
});

export const deleteList = (id) => ({
	type: listActionTypes.DELETE_LIST,
	payload: id,
});
