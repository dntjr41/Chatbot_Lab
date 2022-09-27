import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // 설문 상태에 따라 select from db: 0: 전체, 1: 제작 중, 2: 예약 중, 3: 배포 중, 4: 종료 
    questionnaireSelectionOption: 0,

    // 새 설문 눌렀을 때 popup on/off
    newQuestionnairePopupShow: false,

    // 새 설문 눌렀을 때 템플릿 popup on/off
    questionnaireTemplatePopupShow: true,
    // 0: 설문 템플릿, 1: 이전 템플릿
    templateSelectOption: 0,
}

const questionnaireSlice = createSlice({ 
    name: 'questionnaireState',
    initialState: initialState,
    reducers: {
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
        // 새 설문 버튼 popup on/off
        SET_NQPS_ON: (state, action) => {
            state.newQuestionnairePopupShow = true;
        },
        SET_NQPS_OFF: (state, action) => {
            state.newQuestionnairePopupShow = false;
        },
        // 새 템플릿 popup on/off
        SET_QTPS_ON: (state, action) => {
            state.questionnaireTemplatePopupShow = true;
        },
        SET_QTPS_OFF: (state, action) => {
            state.questionnaireTemplatePopupShow = false;
        },
    },
});

export const { SET_QSO, SET_NQPS_ON, SET_NQPS_OFF, SET_QTPS_ON, SET_QTPS_OFF } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;