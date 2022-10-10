import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 설문 기간(start, end), 응답정보 배열(유형, 질문, 응답들)
const surveyStatState = {
    surveyTitle: "설문 제목입니다",
    surveyContent: "이 설문은 테스트용 설문으로...어쩌구저쩌구...blah blah",
    surveyTime: { start: "xxxx-xx-xx", end: "xxxx-xx-xx" },
    answerStatList: [
        {
            type: "choice",
            title: "Question1",
            answers: [
                { answer: "answer1", cnt: 10 },
                { answer: "answer2", cnt: 20 }
            ]
        },
        {
            type: "subjective",
            title: "Question2",
            answers: [
                "answer1.....",
                "answer2......",
                "answer3...."
            ]
        },
        {
            type: "subjective",
            title: "Question3",
            answers: [
                "answer1.....",
                "answer2......",
                "answer3....",
                "answer4..?",
                "answer5.....",
                "answer6......",
                "answer7....",
                "answer8..?",
                "answer9.....",
                "answer10......",
                "answer11....",
                "answer12..?",
            ]
        },
        {
            type: "choice",
            title: "Question4",
            answers: [
                { answer: "answer1", cnt: 10 },
                { answer: "answer2", cnt: 20 },
                { answer: "answer3", cnt: 17 },
                { answer: "answer4", cnt: 2 },
                { answer: "answer5", cnt: 8 }
            ]
        }
    ]
}

const surveyStatSlice = createSlice({
    name: 'surveyStatState',
    initialState: surveyStatState,
    reducers: {
        EXAMPLE: (state, action) => {
        }
    }
});

export const { EXAMPLE } = surveyStatSlice.actions;

export default surveyStatSlice.reducer;