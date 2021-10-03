import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import listActionTypes from "./list.types";
export function* createList(data) {
	try {
		const { data } = yield call(
			axios.post("http://localhost:3001/lists", data)
		);
		yield put({
			type: listActionTypes.CREATE_LIST,
			paylaod: data,
		});
	} catch (error) {
		console.log(error.response);
	}
}

export function* watchCreateList(data) {
	console.log(data);
	yield takeLatest(listActionTypes.CREATE_LIST, createList(data));
}
export function* listSagas() {
	yield all([call(watchCreateList)]);
}
