import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 질문카드 배열(질문 유형, 질문 제목, 답변 배열, 옵션3개)
const responseState = {
    surveyTitle: "임시 제목입니다.",
    surveyContent: "이것은 임시로 만든 설문지로 이후 서버와의 통신을 통해 변경될 예정입니다.",
    questionCardList: [{
        type: "choice",
        title: "이것은 임시 질문1입니다.",
        answers: ["질문1에 대한 답변1", "질문1에 대한 답변2", "질문1에 대한 답변3"],
        options: [false, false, false],
    },
    {
        type: "choice",
        title: "이것은 임시 질문2입니다.",
        answers: ["질문2에 대한 답변1", "질문2에 대한 답변2", "질문2에 대한 답변3"],
        options: [false, false, false],
    },
    {
        type: "subjective",
        title: "이것은 주관식 질문입니다.",
        options: [false, false, false],
    }],
    answerList: []
}

const responseSurveySlice = createSlice({
    name: 'responseState',
    initialState: responseState,
    reducers: {}
})

export const { } = responseSurveySlice.actions;

export default responseSurveySlice.reducer;