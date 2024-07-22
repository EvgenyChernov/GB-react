// src/reducers/index.js
import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
// import other reducers here if needed

const rootReducer = combineReducers({
    profile: profileReducer,
    // add other reducers here
});

export default rootReducer;
