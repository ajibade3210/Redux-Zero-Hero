import axios from "axios"
import {FETCH_USERS_FAIL, FETCH_USERS_LOADING, FETCH_USERS_SUCCESS} from "./usersTypes"

const fetchUsersLoading = () => {
    return {
        type: FETCH_USERS_LOADING,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

const fetchUsersFail = (errMsg) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: errMsg
    }
}

//export this as we will use this action too fettch  users
export const fetchUsers = () => {
    return async function (dispatch) {
        dispatch(fetchUsersLoading())
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            const users = res.data
            dispatch(fetchUsersSuccess(users))
        }catch (err) {
            dispatch(fetchUsersFail(err.message))
        }
    }
}
