import * as types from '../actions';

const intialState = {

}

export default function (state = intialState, action) {
    const response = action.response;
    
    switch (action.type) {
        case types.DYNAMIC_SIDEBAR_SUCCESS:
            return { ...state, sidebarDetails: response['data'] };
        case types.DYNAMIC_SIDEBAR_FAILURE:
            return { ...state, response };
        default:
            return state;
    }
};