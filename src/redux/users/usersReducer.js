import {FETCH_USERS_FAIL, FETCH_USERS_LOADING, FETCH_USERS_SUCCESS} from "./usersTypes"

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const usersReducer = (state= initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            }
        case FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            return state
    }
}

export default usersReducer