import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    usersData: [],
    currentUser: null
}

const setUsersData = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS_DATA:
            return {
                ...state,
                usersData: action.payload
            }
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default: return state;
    }
};
export default setUsersData;