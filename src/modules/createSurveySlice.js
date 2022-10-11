import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 질문카드 배열(질문 유형, 질문 제목, 답변 배열, 옵션3개)
const surveyState = {
    surveyTitle: "",
    surveyContent: "",
    questionCardList: [{
        type: "choice",
        title: "",
        answers: [""],
        options: [false, false, false],
    },
    {
        type: "subjective",
        title: "",
        options: [false, false, false],
    }]
}

const createSurveySlice = createSlice({
    name: 'surveyState',
    initialState: surveyState,
    reducers: {
        ADD_ANSWER: (state, action) => {
            // action.payload: quesionCardList 배열의 index값
            // 매개변수로 받은 index값에 해당하는 questionCard의 answers배열 요소를 추가한다
            state.questionCardList[action.payload].answers = [...state.questionCardList[action.payload].answers, ""];
        },
        DEL_ANSWER: (state, action) => {
            // action.payload: {quesionCardList 배열의 index값, quesionCard의 응답 배열의 index값}
            // 해당 매개변수에 해당하는 질문의 응답을 배열에서 지운다
            state.questionCardList[action.payload.listIdx].answers.splice(action.payload.answerIdx, 1);
        },
        ADD_CARD: (state, action) => {
            // 새 질문 카드 객체를 questionCardList 배열에 추가한다
            state.questionCardList = [...state.questionCardList, action.payload];
        },
        COPY_CARD: (state, action) => {
            //질문 카드를 복사해 배열에 추가한다
            const card = state.questionCardList[action.payload];
            state.questionCardList = [...state.questionCardList, card];
        },
        DEL_CARD: (state, action) => {
            // 질문 카드를 배열에서 지운다
            state.questionCardList.splice(action.payload, 1);
        },
        CHANGE_TITLE: (state, action) => {
            // 설문 제목 값을 변경한다
            state.surveyTitle = action.payload;
        },
        CHANGE_CONTENT: (state, action) => {
            // 설문 부연설명의 값을 변경한다
            state.surveyContent = action.payload;
        },
        CHANGE_QUE_TITLE: (state, action) => {
            // 질문 카드의 제목 값을 변경한다
            state.questionCardList[action.payload.listIdx].title = action.payload.title;
        },
        CHANGE_QUE_ANSWER: (state, action) => {
            // 질문 카드의 응답 값을 변경한다
            state.questionCardList[action.payload.listIdx].answers[action.payload.answerIdx] = action.payload.answer;
        },
        CHECK_OPT: (state, action) => {
            // 질문 카드의 옵션 체크여부를 변경한다
            state.questionCardList[action.payload.listIdx].options[action.payload.optIdx] = !state.questionCardList[action.payload.listIdx].options[action.payload.optIdx];
        }
    }
});

export const { ADD_ANSWER, DEL_ANSWER, ADD_CARD, COPY_CARD, DEL_CARD, CHANGE_TITLE, CHANGE_CONTENT, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER, CHECK_OPT } = createSurveySlice.actions;

export default createSurveySlice.reducer;