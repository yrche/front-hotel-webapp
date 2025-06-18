import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducer from '../../shared/model/index.js'
// const rootReducer = combineReducers({
//
// })

export const store = configureStore({
    reducer: reducer
})