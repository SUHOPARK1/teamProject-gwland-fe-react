import {combineReducers} from 'redux'

const initialState = {
    currentUser: null,
    authorization: "public"
}

const accountReducer = (state=initialState,action) => {
    switch(action.type){
        case "LOGIN":
            return action.data
        case "LOGOUT":
            return action.data
        default:
            return state
    }
}

export const rootReudcer = combineReducers({accountReducer})