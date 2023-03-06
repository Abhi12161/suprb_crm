import { put, call } from 'redux-saga/effects';
import { userDetailsService } from '../services/userDetailsService';

import * as types from '../actions'

export function* userDetailsSaga(payload) {
    try {
        const response = yield call(userDetailsService, payload);
        yield [
            put({ type: types.USER_DETAILS_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.USER_DETAILS_FAILURE, error });
    }
}