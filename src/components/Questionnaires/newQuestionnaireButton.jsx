import Button from 'react-bootstrap/Button';
import React from "react";
import NewQuestionnairePopup from './newQuestionnaire/newQuestionnariePopup';
import QuestionnaireTemplatePopup from './questionnarieTemplate/qustionnarieTemplatePopup';

import { SET_NQPS_ON , SET_NQPS_OFF , SET_QTPS_ON , SET_QTPS_OFF } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

import '../../css/QuestionnairePage.css';

function NewQuestionnaireButton() {
    /* 리덕스 */
    const dispatch = useDispatch();
    // 새설문 팝업 on off
    const {newQuestionnairePopupShow} = useSelector((state) => ({ newQuestionnairePopupShow: state.questionnairesReducer.newQuestionnairePopupShow
    }));
    const newQuestionnaireButtonOnClick = () => {
        dispatch(SET_NQPS_ON());
        console.log(newQuestionnairePopupShow);
    }
    const newQuestionnaireCloseButtonOnClick = () => {
        dispatch(SET_NQPS_OFF());
    }
    // 템플릿 팝업 on off
    const {questionnaireTemplatePopupShow} = useSelector((state) => ({
        questionnaireTemplatePopupShow: state.questionnairesReducer.questionnaireTemplatePopupShow,
    }));  
    const questionnaireTemplatePopupSetShow = () => {
        dispatch(SET_QTPS_ON());
    }
    const questionnaireTemplatePopupSetClose = () => {
        dispatch(SET_QTPS_OFF());
    }

    return (
        <div className="NewQustButtonFloat">  
            <Button variant="dark" size="lg" className="float-end" onClick={newQuestionnaireButtonOnClick}>
                + 새 설문
            </Button>
            <NewQuestionnairePopup show={newQuestionnairePopupShow} hide={newQuestionnaireCloseButtonOnClick}/>
            <QuestionnaireTemplatePopup show={questionnaireTemplatePopupShow} hide={questionnaireTemplatePopupSetClose} />
        </div>
    )
}



export default NewQuestionnaireButton