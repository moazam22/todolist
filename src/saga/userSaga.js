import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
// import Api from "...";

export function* fetchUser(action) {
	try {
		// const user = yield call(Api.fetchUser, action.payload.userId);
		// yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
	} catch (e) {
		// yield put({ type: "USER_FETCH_FAILED", message: e.message });
	}
}

export function* userSagas() {
	yield all([call(fetchUser)]);
}
