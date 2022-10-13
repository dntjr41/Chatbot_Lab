import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSurveyReducer from "./createSurveySlice";
import responseSurveyReducer from "./responseSurveySlice";
import questionnairesReducer from "./questionnairesSlice";
import surveyStatReducer from "./surveyStatSlice";

const rootReducer = combineReducers({
    createSurvey: createSurveyReducer,  // 설문 제작 slice
    questionnairesReducer: questionnairesReducer,
    surveyStatistic: surveyStatReducer,  // 설문 결과 slice
    responseSurvey: responseSurveyReducer,
})

const store = configureStore({
    reducer: rootReducer
});
export default store;