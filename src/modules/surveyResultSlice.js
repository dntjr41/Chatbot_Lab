import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 설문 기간(start, end), 응답정보 배열(유형, 질문, 응답들)
const surveyResultState = {
    surveyId: 1,
    surveyTitle: "설문 제목입니다",
    surveyContent: "이 설문은 테스트용 설문으로...어쩌구저쩌구...blah blah",
    surveyTime: { start: "xxxx-xx-xx", end: "xxxx-xx-xx" },
    surveyStatistic: [
        {
            questionId: 1, // 질문ID
            questionOrder: 1, // 질문 순서
            // 질문 유형ID 1: 객관식, 2: 객관식 이미지, 3: 드롭다운, 4: 주관식, 5: 감정바, 6: 날짜, 7: 시간 8: 동영상
            type: 1,
            title: "이것은 임시 질문1입니다.", // 질문 내용
            answers: [
                { answerId: 1, answerOrder: 1, value: "질문1에 대한 답변1", cnt: 10 },
                { answerId: 2, answerOrder: 2, value: "질문1에 대한 답변2", cnt: 20 },
                { answerId: 3, answerOrder: 3, value: "질문1에 대한 답변3", cnt: 18 }
            ] // (객관식 해당)질문의 답변 배열
        },
        {
            questionId: 2,
            questionOrder: 2,
            type: 4,
            title: "Question2",
            answers: [
                { value: "answer1....." },
                { value: "answer2....." },
                { value: "answer3....." },
            ]
        },
        {
            questionId: 3,
            questionOrder: 3,
            type: 4,
            title: "Question3",
            answers: [
                { value: "answer1..??" },
                { value: "answer2....." },
                { value: "answer3....." },
                { value: "answer4....." },
                { value: "answer5" },
                { value: "answer6..." },
                { value: "answer7....." },
                { value: "answer8.....!!" },
                { value: "answer9....." },
                { value: "answer10....." },
            ]
        },
        {
            questionId: 4,
            questionOrder: 4,
            type: 1,
            title: "Question4",
            answers: [
                { answerId: 4, answerOrder: 1, value: "answer1.....", cnt: 21 },
                { answerId: 5, answerOrder: 2, value: "answer2.....", cnt: 30 },
            ]
        }
    ],
    surveyAnalysis: null,
}

const surveyResultSlice = createSlice({
    name: 'surveyStatState',
    initialState: surveyResultState,
    reducers: {
    }
});

// export const { } = surveyResultSlice.actions;

export default surveyResultSlice.reducer;