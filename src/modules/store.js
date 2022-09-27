import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSurveyReducer from "./createSurveySlice";

const rootReducer = combineReducers({
    createSurvey: createSurveyReducer,
})

const store = configureStore({
    reducer: rootReducer
});


export default store;