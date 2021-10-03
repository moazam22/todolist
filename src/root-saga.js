import { all, call } from "redux-saga/effects";
import { userSagas } from "./saga/userSaga";
import { listSagas } from "./redux/list/list.sagas";
export default function* rootSaga() {
	yield all([call(listSagas)]);
}
