import { createSlice } from '@reduxjs/toolkit'

const questionnaireState = {
    // 설문 상태에 따라 select from db: 0: 전체, 1: 제작 중, 2: 예약 중, 3: 배포 중, 4: 종료 
    questionnaireSelectionOption: 0,

    // 새 설문 눌렀을 때 popup on/off
    newQuestionnairePopupShow: false,

    // 새 설문 눌렀을 때 템플릿 popup on/off
    questionnaireTemplatePopupShow: false,
    // 0: 설문 템플릿, 1: 이전 템플릿
    templateSelectOption: 0,
    // 설문 제작함 카드 6개 씩 display하는데 몇 페이지 인지 => default 1
    questionnairePageOption : 1,
}

const questionnaireSlice = createSlice({ 
    name: 'questionnaireState',
    initialState: questionnaireState,
    reducers: {
        // 설문 제작함 display option & 페이지
        SET_QSO: (state, action) =>{
            state.questionnaireSelectionOption = action.payload;
            if (state.questionnaireSelectionOption === 0){ // 전체
                alert("select * from questionnairetable where 작성자ID == loginID");
            }
            if (state.questionnaireSelectionOption === 1){ // 제작 중
                alert("제작 중");
            }
            if (state.questionnaireSelectionOption === 2){ // 예약 중
                alert("예약 중");
            }
            if (state.questionnaireSelectionOption === 3){ // 배포 중
                alert("배포 중");
            }
            if (state.questionnaireSelectionOption === 4){ // 종료
                alert("종료");
            }
        },
        SET_QPO: (state, action) => {
            state.questionnairePageOption = action.payload; // 몇 페이지 인지
        },
        

        // 새 설문 버튼 popup on/off
        SET_NQPS_ON: (state) => {
            console.log("clicked");
            console.log(state.newQuestionnairePopupShow);
            state.newQuestionnairePopupShow = true;
        },
        SET_NQPS_OFF: (state) => {
            state.newQuestionnairePopupShow = false;
        },

        // 새 템플릿 popup on/off
        SET_QTPS_ON: (state) => {
            state.questionnaireTemplatePopupShow = true;
        },
        SET_QTPS_OFF: (state) => {
            state.questionnaireTemplatePopupShow = false;
        },
    },
});

export const { SET_QSO, SET_QPO, SET_NQPS_ON, SET_NQPS_OFF, SET_QTPS_ON, SET_QTPS_OFF } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;