import * as types from './index';

export const userListingAction = (userListing) => {
    return {
        type: types.USER_LISTING_REQUEST,
        userListing
    }
};