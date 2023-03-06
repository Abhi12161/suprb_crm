import { put, call } from 'redux-saga/effects';
import { userListingService } from '../services/userListingService';

import * as types from '../actions'

export function* userListingSaga(payload) {
    try {
        const response = yield call(userListingService, payload);
        yield [
            put({ type: types.USER_LISTING_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.USER_LISTING_FAILURE, error });
    }
}