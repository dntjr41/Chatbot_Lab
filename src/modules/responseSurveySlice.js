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
        questionType: 1,
        questionTitle: "이것은 임시 질문1입니다.", // 질문 내용
        questionAnswers: [
            { id: 1, order: 1, value: "질문1에 대한 답변1", isCheck: false },
            { id: 2, order: 2, value: "질문1에 대한 답변2", isCheck: false },
            { id: 3, order: 3, value: "질문1에 대한 답변3", isCheck: false }
        ], // (객관식 해당)질문의 답변 배열
        questionOptions: [true, false, false], // 질문 옵션
    },
    {
        questionId: 2,
        questionOrder: 2,
        questionType: 1,
        questionTitle: "이것은 임시 질문2입니다.",
        questionAnswers: [
            { id: 4, order: 1, value: "질문2에 대한 답변1", isCheck: false },
            { id: 5, order: 2, value: "질문2에 대한 답변2", isCheck: false },
        ],
        questionOptions: [true, true, false],
    },
    {
        questionId: 3,
        questionOrder: 3,
        questionType: 4,
        questionTitle: "이것은 주관식 질문입니다.",
        questionAnswers: "",
        questionOptions: [true],
    }]
}

const responseSurveySlice = createSlice({
    name: 'responseState',
    initialState: responseState,
    reducers: {
        ANS_CHOICE_CHECK: (state, action) => {
            // 객관식 응답 선택 업데이트
            // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지
            state.questionCardList[action.payload.listIdx].questionAnswers[action.payload.answerIdx].isCheck = !state.questionCardList[action.payload.listIdx].questionAnswers[action.payload.answerIdx].isCheck;
        },
        ANS_CHOICE_RADIO: (state, action) => {
            state.questionCardList[action.payload.listIdx].questionAnswers.map((answer) => {
                return answer.isCheck = false;
            })
            state.questionCardList[action.payload.listIdx].questionAnswers[action.payload.answerIdx].isCheck = true;
        },
        ANS_SUBJECTIVE_INPUT: (state, action) => {
            // 주관식 응답 선택 업데이트
            // listIdx(int): 질문 리스트의 몇번째인지, answer(string): 입력한 응답 내용
            state.questionCardList[action.payload.listIdx].questionAnswers = action.payload.answer;
        },
        GET_TEMPLATE: (state, action) => {
            // 설문지 템플릿 서버로부터 가져와서 업데이트
            const responseData = action.payload;
            state.surveyId = responseData.surveyId;
            state.surveyTitle = responseData.surveyTitle;
            state.surveyContent = responseData.surveyContent;
            responseData.questionCardList.map((questionCard) => {
                if (questionCard.questionType === 4) {
                    questionCard.questionAnswers = "";
                }
                return state.questionCardList = [...state.questionCardList, questionCard];
            })
        }
    }
})

export const { ANS_CHOICE_CHECK, ANS_CHOICE_RADIO, ANS_SUBJECTIVE_INPUT, GET_TEMPLATE } = responseSurveySlice.actions;

export default responseSurveySlice.reducer;