import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import userDetails from './userDetailsReducer';
import userListing from './userListingReducer';
import sidebarDetails from './dynamicSidebarReducer';

const rootReducer = combineReducers({
  register, login, userDetails,userListing,sidebarDetails
});

export default rootReducer;
