import Button from 'react-bootstrap/Button';
import React from "react";
import NewQuestionnairePopup from './newQuestionnaire/newQuestionnariePopup';
import QuestionnaireTemplatePopup from './questionnarieTemplate/qustionnarieTemplatePopup';

import { SET_NQPS_ON , SET_NQPS_OFF, SET_QTPS_ON, SET_QTPS_OFF } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function NewQuestionnaireButton() {
    const dispatch = useDispatch();
    // 새설문 팝업 on off
    const {newQuestionnairePopupShow} = useSelector((state) => ({
        newQuestionnairePopupShow: state.newQuestionnairePopupShow,
    }));
    const newQuestionnaireButtonOnClick = () => {
        dispatch(SET_NQPS_ON());
    }
    const newQuestionnaireCloseButtonOnClick = () => {
        dispatch(SET_NQPS_OFF());
    }
    // 템플릿 팝업 on off
    const {questionnaireTemplatePopupShow} = useSelector((state) => ({
        questionnaireTemplatePopupShow: state.questionnaireTemplatePopupShow,
    }));  
    const questionnaireTemplatePopupSetShow = () => {
        dispatch(SET_QTPS_ON());
    }
    const questionnaireTemplatePopupSetClose = () => {
        dispatch(SET_QTPS_OFF());
    }

    return (
        <>  
            <Button variant="dark" size="lg" onClick={newQuestionnaireButtonOnClick}>
                + 새 설문
            </Button>
            <NewQuestionnairePopup show={newQuestionnairePopupShow} hide={newQuestionnaireCloseButtonOnClick}/>
            <QuestionnaireTemplatePopup show={questionnaireTemplatePopupShow} hide={questionnaireTemplatePopupSetClose} />
        </>
    )
}



export default NewQuestionnaireButton