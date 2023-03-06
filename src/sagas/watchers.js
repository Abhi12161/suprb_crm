import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { userDetailsSaga } from './userDetailsSaga';
import { userListingSaga } from './userListingSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.USER_DETAILS_REQUEST, userDetailsSaga)
  yield takeLatest(types.USER_LISTING_REQUEST, userListingSaga)
}