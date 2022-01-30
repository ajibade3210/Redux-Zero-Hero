import {BUY_A_MEAL, RETURN_MEAL} from "./mealTypes"

//initial State
const initialState = {
    numOfMeals: 10
}

//REDUCER
const mealReducer = (state = initialState, action) => {
    if(action.type===BUY_A_MEAL && state.numOfMeals === 0) {
        return {
            numOfMeals: state.numOfMeals
        }
    }

    switch (action.type) {
        case BUY_A_MEAL:
            return {
                ...state,
                numOfMeals: state.numOfMeals - 1
            }
        case RETURN_MEAL:
            return {
                ...state,
                numOfMeals: state.numOfMeals + 1
            }
        default:
            return state;
    }
}

export default mealReducer;
