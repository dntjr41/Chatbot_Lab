import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 질문카드 배열(질문 유형, 질문 제목, 답변 배열, 옵션3개)
const responseState = {
    surveyId: 1,
    surveyTitle: "임시 제목입니다.",
    surveyContent: "이것은 임시로 만든 설문지로 이후 서버와의 통신을 통해 변경될 예정입니다.",
    questionCardList: [{
        questionId: 1, // 질문ID
        questionOrder: 1, // 질문 순서
        // 질문 유형ID 1: 객관식, 2: 객관식 이미지, 3: 드롭다운, 4: 주관식, 5: 감정바, 6: 날짜, 7: 시간 8: 동영상
        type: 1,
        title: "이것은 임시 질문1입니다.", // 질문 내용
        answers: [
            { answerId: 1, answerOrder: 1, value: "질문1에 대한 답변1", isCheck: false },
            { answerId: 2, answerOrder: 2, value: "질문1에 대한 답변2", isCheck: false },
            { answerId: 3, answerOrder: 3, value: "질문1에 대한 답변3", isCheck: false }
        ], // (객관식 해당)질문의 답변 배열
        options: [
            { opt: "필수응답", isCheck: true },
            { opt: "중복가능", isCheck: false },
            { opt: "응답섞기", isCheck: false }
        ], // 질문 옵션
    },
    {
        questionId: 2,
        questionOrder: 2,
        type: 1,
        title: "이것은 임시 질문2입니다.",
        answers: [
            { answerId: 4, answerOrder: 1, value: "질문2에 대한 답변1", isCheck: false },
            { answerId: 5, answerOrder: 2, value: "질문2에 대한 답변2", isCheck: false },
        ],
        options: [
            { opt: "필수응답", isCheck: true },
            { opt: "중복가능", isCheck: true },
            { opt: "응답섞기", isCheck: false }
        ],
    },
    {
        questionId: 3,
        questionOrder: 3,
        type: 4,
        title: "이것은 주관식 질문입니다.",
        answers: "",
        options: [
            { opt: "필수응답", isCheck: true }
        ],
    }]
}

const responseSurveySlice = createSlice({
    name: 'responseState',
    initialState: responseState,
    reducers: {
        ANS_CHOICE_CHECK: (state, action) => {
            // 객관식 응답 선택 업데이트
            // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지
            state.questionCardList[action.payload.listIdx].answers[action.payload.answerIdx].isCheck = !state.questionCardList[action.payload.listIdx].answers[action.payload.answerIdx].isCheck;
        },
        ANS_CHOICE_RADIO: (state, action) => {
            state.questionCardList[action.payload.listIdx].answers.map((answer) => {
                return answer.isCheck = false;
            })
            state.questionCardList[action.payload.listIdx].answers[action.payload.answerIdx].isCheck = true;
        },
        ANS_SUBJECTIVE_INPUT: (state, action) => {
            // 주관식 응답 선택 업데이트
            // listIdx(int): 질문 리스트의 몇번째인지, answer(string): 입력한 응답 내용
            state.questionCardList[action.payload.listIdx].answers = action.payload.answer;
        }
    }
})

export const { ANS_CHOICE_CHECK, ANS_CHOICE_RADIO, ANS_SUBJECTIVE_INPUT } = responseSurveySlice.actions;

export default responseSurveySlice.reducer;