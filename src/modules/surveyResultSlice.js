import { createSlice } from '@reduxjs/toolkit'

// 설문 제목, 설문 부연설명, 설문 기간(start, end), 응답정보 배열(유형, 질문, 응답들)
const surveyResultState = {
    surveyId: "",
    surveyTitle: "",
    surveyContent: "",
    surveyTime: { start: "", end: "" },
    surveyStatistic: [
        // 질문ID
        // 질문 순서
        // 질문 유형ID 1: 객관식, 2: 객관식 이미지, 3: 드롭다운, 4: 주관식, 5: 감정바, 6: 날짜, 7: 시간 8: 동영상
        // 질문 내용
        // (객관식 해당)질문의 답변 배열
    ],
    surveyAnalysis: null,
}

const surveyResultSlice = createSlice({
    name: 'surveyStatState',
    initialState: surveyResultState,
    reducers: {
        GET_STATISTIC: (state, action) => {
            // 설문지 템플릿 서버로부터 가져와서 업데이트
            const statisticData = action.payload;
            state.surveyId = statisticData.surveyId;
            state.surveyTitle = statisticData.surveyTitle;
            state.surveyContent = statisticData.surveyContent;
            state.surveyTime = statisticData.surveyTime;
            state.surveyStatistic=statisticData.surveyStatistic;
        }
    }
});

export const { GET_STATISTIC } = surveyResultSlice.actions;

export default surveyResultSlice.reducer;