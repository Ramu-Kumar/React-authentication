import * as actionTypes from './ActionTypes';

export const setUsersData =data=>({
    type:actionTypes.SET_USERS_DATA,
    payload:data
});

export const setCurrentUser =data=>({
    type:actionTypes.SET_CURRENT_USER,
    payload:data
});