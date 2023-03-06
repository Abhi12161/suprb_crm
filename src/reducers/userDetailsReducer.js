import * as types from '../actions';

const intialState = {

}

export default function (state = intialState, action) {
    const response = action.response;
    
    switch (action.type) {
        case types.USER_DETAILS_SUCCESS:
            return { ...state, userDetails: response['data'] };
        case types.USER_DETAILS_FAILURE:
            return { ...state, response };
        default:
            return state;
    }
};