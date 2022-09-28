import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSurveyReducer from "./createSurveySlice";
import questionnairesReducer from "./questionnairesSlice";

const rootReducer = combineReducers({
    createSurvey: createSurveyReducer,
    questionnairesReducer: questionnairesReducer,
})

const store = configureStore({
    reducer: rootReducer
});
export default store;