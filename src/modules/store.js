import { configureStore } from "@reduxjs/toolkit";
import QuestionnairesReducer from "./questionnairesSlice";

const store = configureStore({
    reducer: QuestionnairesReducer,
});

export default store;