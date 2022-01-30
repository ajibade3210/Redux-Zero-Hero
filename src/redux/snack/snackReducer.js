import {BUY_A_SNACK, RETURN_SNACK} from "./snackType"

const initialState = {
    numOfSnack: 10
}

//REDUCER
const snackReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_A_SNACK:
            return {
                ...state,
                numOfSnack: state.numOfSnack - 1
            }
        case RETURN_SNACK:
            return {
                ...state,
                numOfSnack: state.numOfSnack + 1
            }
        default:
            return state
    }
}


export default snackReducer
