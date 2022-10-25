import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 질문카드 배열(질문 유형, 질문 제목, 답변 배열, 옵션3개)
const responseState = {
    surveyId: null,
    surveyTitle: "",
    surveyContent: "",
    questionCardList: [
        // 질문ID
        // 질문 순서
        // 질문 유형ID 1: 객관식, 2: 객관식 이미지, 3: 드롭다운, 4: 주관식, 5: 감정바, 6: 날짜, 7: 시간 8: 동영상
        // 질문 내용
        // (객관식 해당)질문의 답변 배열
        // 질문 옵션]
    ]
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