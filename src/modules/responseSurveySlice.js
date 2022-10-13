import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 질문카드 배열(질문 유형, 질문 제목, 답변 배열, 옵션3개)
const responseState = {
    surveyTitle: "임시 제목입니다.",
    surveyContent: "이것은 임시로 만든 설문지로 이후 서버와의 통신을 통해 변경될 예정입니다.",
    questionCardList: [{
        id: 1,
        type: "choice",
        title: "이것은 임시 질문1입니다.",
        answers: [
            { value: "질문1에 대한 답변1", isCheck: true },
            { value: "질문1에 대한 답변2", isCheck: false },
            { value: "질문1에 대한 답변3", isCheck: false }
        ],
        options: [false, false, false],
    },
    {
        id: 2,
        type: "choice",
        title: "이것은 임시 질문2입니다.",
        answers: [
            { value: "질문2에 대한 답변1", isCheck: false },
            { value: "질문2에 대한 답변2", isCheck: false },
        ],
        options: [false, false, false],
    },
    {
        id: 3,
        type: "subjective",
        title: "이것은 주관식 질문입니다.",
        answers: "",
        options: [false, false, false],
    }]
}

const responseSurveySlice = createSlice({
    name: 'responseState',
    initialState: responseState,
    reducers: {
        ANS_CHOICE_CHECK: (state, action) => {
            state.questionCardList[action.payload.listIdx].answers[action.payload.answerIdx].isCheck = !state.questionCardList[action.payload.listIdx].answers[action.payload.answerIdx].isCheck;
        },
        ANS_SUBJECTIVE_INPUT: (state, action) => {
            state.questionCardList[action.payload.listIdx].answers = action.payload.answer;
        }
    }
})

export const { ANS_CHOICE_CHECK, ANS_SUBJECTIVE_INPUT } = responseSurveySlice.actions;

export default responseSurveySlice.reducer;