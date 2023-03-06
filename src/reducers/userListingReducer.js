import * as types from '../actions';

const intialState = {

}

export default function (state = intialState, action) {
    const response = action.response;
    switch (action.type) {
        case types.USER_LISTING_SUCCESS:
            return { ...state, userListing: response['data']['data'] };
        case types.USER_LISTING_FAILURE:
            return { ...state, response };
        default:
            return state;
    }
};