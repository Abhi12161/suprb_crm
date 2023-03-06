import * as types from './index';

export const dynamicSidebarAction = (sidebarDetails) => {
    return {
        type: types.DYNAMIC_SIDEBAR_REQUEST,
        sidebarDetails
    }
};