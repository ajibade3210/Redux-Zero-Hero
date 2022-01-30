import {BUY_A_SNACK, RETURN_SNACK } from "./snackType"

//action creator
export const buySnack = () => {
    return {
        type: BUY_A_SNACK
    }
}

export const returnSnack = () => {
    return {
        type: RETURN_SNACK
    }
}
