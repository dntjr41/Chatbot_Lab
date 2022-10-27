// 설문 생성 페이지에서 사용되는 state에 대한 slice
// 설문DB: 설문 제목, 설문 부연설명
// 질문DB: 질문순서(questionCardList배열의 index), 질문 내용, 질문 유형ID, 답변 배열, 옵션3개)
// 객관식 답변DB: 답변순서(answers배열의 index), 답변 내용
import { createSlice } from '@reduxjs/toolkit'

const surveyState = {
    userId: 1,
    surveyTitle: "", // 설문 제목
    surveyContent: "", // 설문 부연설명
    questionCardList: [{
        // 질문 유형ID 1: 객관식, 2: 객관식 이미지, 3: 드롭다운, 4: 주관식, 5: 감정바, 6: 날짜, 7: 시간 8: 동영상
        questionType: 1,
        questionTitle: "", // 질문 내용
        questionAnswers: [""], // 질문 답변 배열
        questionOptions: [true, false, false], // 질문 옵션
    },
    {
        questionType: 4,
        questionTitle: "",
        questionOptions: [true],
    }]
}

const createSurveySlice = createSlice({
    name: 'surveyState',
    initialState: surveyState,
    reducers: {
        CHANGE_TITLE: (state, action) => {
            // 설문 제목 값을 변경한다
            // payload: title(string)
            state.surveyTitle = action.payload;
        },
        CHANGE_CONTENT: (state, action) => {
            // 설문 부연설명의 값을 변경한다
            // listIdx(int): 질문 리스트의 몇번째인지
            state.surveyContent = action.payload;
        },
        ADD_ANSWER: (state, action) => {
            // action.payload: quesionCardList 배열의 index값
            // 매개변수로 받은 index값에 해당하는 questionCard의 answers배열 요소를 추가한다
            state.questionCardList[action.payload].questionAnswers = [...state.questionCardList[action.payload].questionAnswers, ""];
        },
        DEL_ANSWER: (state, action) => {
            // 해당 매개변수에 해당하는 질문의 응답을 배열에서 지운다
            // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지
            state.questionCardList[action.payload.listIdx].questionAnswers.splice(action.payload.answerIdx, 1);
        },
        CHANGE_QUE_TITLE: (state, action) => {
            // 질문 카드의 제목 값을 변경한다
            // listIdx(int): 질문 리스트의 몇번째인지, title(string): 입력된 값
            state.questionCardList[action.payload.listIdx].questionTitle = action.payload.title;
        },
        CHANGE_QUE_ANSWER: (state, action) => {
            // 질문 카드의 응답 값을 변경한다
            // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지, answer(string): 입력된 값
            state.questionCardList[action.payload.listIdx].questionAnswers[action.payload.answerIdx] = action.payload.answer;
        },
        ADD_CARD: (state, action) => {
            // 새 질문 카드 객체를 questionCardList 배열에 추가한다
            // card(object): 질문 리스트에 추가될 질문 카드 객체
            state.questionCardList = [...state.questionCardList, action.payload];
        },
        COPY_CARD: (state, action) => {
            //질문 카드를 복사해 배열에 추가한다
            // listIdx(int): 질문 리스트의 몇번째인지
            const card = state.questionCardList[action.payload];
            state.questionCardList = [...state.questionCardList, card];
        },
        DEL_CARD: (state, action) => {
            // 질문 카드를 배열에서 지운다
            // listIdx(int): 질문 리스트의 몇번째인지
            state.questionCardList.splice(action.payload, 1);
        },
        CHECK_OPT: (state, action) => {
            // 질문 카드의 옵션 체크여부를 변경한다
            // listIdx(int): 질문 리스트의 몇번째인지, optIdx(int): 옵션 리스트의 몇번째인지
            state.questionCardList[action.payload.listIdx].questionOptions[action.payload.optIdx] = !state.questionCardList[action.payload.listIdx].questionOptions[action.payload.optIdx];
        },
        RESET_STATE: (state) => {
            // state 초기화
            Object.assign(state, surveyState);
        }
    }
});

export const { ADD_ANSWER, DEL_ANSWER, ADD_CARD, COPY_CARD, DEL_CARD, CHANGE_TITLE, CHANGE_CONTENT, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER, CHECK_OPT, RESET_STATE } = createSurveySlice.actions;

export default createSurveySlice.reducer;