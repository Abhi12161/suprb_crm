import * as types from './index';

export const userDetailsAction = (userDetails) => {
    return {
        type: types.USER_DETAILS_REQUEST,
        userDetails
    }
};