import { CREATE_ARTICLE, PROCASTINATE } from "./articleType"

//initial State
const initialState = {
    writtenArticle: 0,
    procastination: 0
}

const articleReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ARTICLE:
            return {
                ...state,
                writtenArticle: state.writtenArticle + 1
            }
        case PROCASTINATE:
            return {
                ...state,
                procastination: state.procastination + 1
            }
        default:
            return state
    }
}

export default articleReducer
