import {GIVE_CHARITY, GET_CLOTH } from "./clothType"

export const giveCharity = () => {
    return {
        type: GIVE_CHARITY
    }
}

export const getCloth = () => {
    return {
        type: GET_CLOTH
    }
}
