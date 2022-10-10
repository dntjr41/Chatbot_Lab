import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSurveyReducer from "./createSurveySlice";
import questionnairesReducer from "./questionnairesSlice";
import surveyStatReducer from "./surveyStatSlice";

const rootReducer = combineReducers({
    createSurvey: createSurveyReducer,  // 설문 제작 slice
    questionnairesReducer: questionnairesReducer,
    surveyStatistic: surveyStatReducer  // 설문 결과 slice

})

const store = configureStore({
    reducer: rootReducer
});
export default store;