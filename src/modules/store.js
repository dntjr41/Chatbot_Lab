import { configureStore } from "@reduxjs/toolkit";
import createSurveyReducer from "./createSurveySlice";

const store = configureStore({
    reducer: createSurveyReducer,
});


export default store;