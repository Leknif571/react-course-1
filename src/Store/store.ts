import { combineReducers, createStore } from "redux"
import { ListReducer } from "./FunctionReducers/listReducers"


export const StoreList = createStore(
    combineReducers({
        listred : ListReducer,
    }),
)







