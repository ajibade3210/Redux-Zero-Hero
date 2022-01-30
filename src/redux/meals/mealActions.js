import {BUY_A_MEAL, RETURN_MEAL} from "./mealTypes"

export const buyMeal = () => {
    return {
        type: BUY_A_MEAL,
    }
}

export const returnMeal = () => {
    return {
        type: RETURN_MEAL
    }
}