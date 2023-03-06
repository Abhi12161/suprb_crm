import { put, call } from 'redux-saga/effects';
import {dynamicSidebarService} from '../services/dynamicSidebarService'

import * as types from '../actions'

export function* dynamicSidebarSaga(payload) {
    try {
        const response = yield call(dynamicSidebarService, payload);
        yield [
            put({ type: types.USER_DETAILS_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.USER_DETAILS_FAILURE, error });
    }
}