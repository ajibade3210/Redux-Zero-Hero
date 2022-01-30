import {GET_CLOTH,GIVE_CHARITY} from "./clothType"

//initial State
const initialState = {
    numOfCloth: 3
}

const clothReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_CLOTH:
            return {
                ...state,
                numOfCloth: state.numOfCloth + 1
            }
        case GIVE_CHARITY:
            return {
                ...state,
                numOfCloth: state.numOfCloth - 1
            }
        default:
            return state
    }
}

export default clothReducer
