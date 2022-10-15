/*
받아올 데이터
설문 ID / 유저 ID / 설문 제목
설문 시작일 ~ 설문 종료일
그룹 정보

새로 만들 데이터
설문 시작일 ~ 설문 종료일 (Date type)
링크 localhost:3000/response/~~
그룹 정보 { 수정 가능 }
대상 정보 { 수정 가능 }
공유 방법
*/

import { createSlice } from '@reduxjs/toolkit';

const surveyInfo = {
    surveyId: "",
    surveyTitle: "",
    surveyContent: "",
    userId: "",
    surveyTime: [{ 
        start: "", 
        end: ""
    }],
    
    uesrGroup: { 
        groupName: "", 
        groupMember: [{ 
            memberName: "",
            memberEmail: "",
            memberPhone: ""
        }],
        groupCount: ""
    },
    
    target: {
        groupName: "",
        targetName: "",
        targetEmail: "",
        targetPhone: "",
        targetCount: ""
    },

    deployMethod: "",
    link: ""
}

const setSurveyInfo = createSlice({
    name: 'surveyInfo',
    initialState: surveyInfo,

    reducers: {
        
        // 설문 기간 설정
        // 시작일, 시작시간 - 종료일, 종료시간
        SET_PERIOD: (state, action) => {
            state.surveyTime.start = action.payload;
            state.surveyTime.end = action.payload;
        },

        // 그룹 추가
        ADD_GROUP: (state, action) => {


        },

        // 대상 추가
        ADD_TARGET: (state, action) => {

        },

        // 공유 방법 선택
        DEPLOY_METHOD: (state, action) => {
            state.deployMethod = action.payload;
        },

        // 링크 생성
        CREATE_LINK: (state, action) => {
            state.link = action.payload;
        }
    }
});

export const { SET_PERIOD, ADD_GROUP, ADD_TARGET, DEPLOY_METHOD, CREATE_LINK } = setSurveyInfo.actions;

export default setSurveyInfo.reducer;