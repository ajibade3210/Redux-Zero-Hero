import {applyMiddleware, combineReducers, createStore} from "redux"
import ReduxThunk from "redux-thunk"
import clothReducer from "./clothes/clothReducer"
import mealReducer from "./meals/mealReducer"
import snackReducer from "./snack/snackReducer"
import articleReducer from "./articles/articleReducer"
import usersReducer from "./users/usersReducer"

const rootReducer = combineReducers({
    meal: mealReducer,
    snack: snackReducer,
    cloth: clothReducer,
    article: articleReducer,
    users: usersReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default store