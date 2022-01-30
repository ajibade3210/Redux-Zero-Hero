import { CREATE_ARTICLE, PROCASTINATE } from "./articleType"


export const writeArticle = () => {
    return {
        type: CREATE_ARTICLE
    }
}

export const procastinate = () => {
    return {
        type: PROCASTINATE
    }
}