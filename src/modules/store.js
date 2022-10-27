import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSurveyReducer from "./createSurveySlice";
import responseSurveyReducer from "./responseSurveySlice";
import questionnairesReducer from "./questionnairesSlice";
import surveyResultReducer from "./surveyResultSlice";
import surveyInfoReducer from "./surveyInfo";

const rootReducer = combineReducers({
    createSurvey: createSurveyReducer,  // 설문 제작 slice
    questionnairesReducer: questionnairesReducer,
    surveyResult: surveyResultReducer,  // 설문 결과 slice
    responseSurvey: responseSurveyReducer,
    surveyInfo: surveyInfoReducer,
})

const store = configureStore({
    reducer: rootReducer
});
export default store;