import React from "react";
// bootstrap
import Button from 'react-bootstrap/Button';
// component
import NewQuestionnairePopup from './newQuestionnaire/newQuestionnariePopup';
import QuestionnaireTemplatePopup from './questionnarieTemplate/qustionnarieTemplatePopup';
// redux
import { SET_NQPS_ON , SET_NQPS_OFF , SET_QTPS_OFF } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
// css
import '../../css/QuestionnairePage.css';

function NewQuestionnaireButton() {
    /* 리덕스 */
    const dispatch = useDispatch();
    /* 새설문 팝업 on */
    const {newQuestionnairePopupShow} = useSelector((state) => ({ 
        newQuestionnairePopupShow: state.questionnairesReducer.newQuestionnairePopupShow
    })) 
    /* 템플릿 팝업 on */
    const {questionnaireTemplatePopupShow} = useSelector((state) => ({
        questionnaireTemplatePopupShow: state.questionnairesReducer.questionnaireTemplatePopupShow,
    }))
    /* Button onclick event */
    const newQuestionnaireButtonOnClick = () => {
        dispatch(SET_NQPS_ON());
    }
    const newQuestionnaireCloseButtonOnClick = () => {
        dispatch(SET_NQPS_OFF());
    }
    const questionnaireTemplateCloseButtonOnClick = () => {
        dispatch(SET_QTPS_OFF());
    }

    return (
        <div className="NewQustButtonFloat">  
            <Button variant="dark" size="lg" className="float-end" onClick={newQuestionnaireButtonOnClick}>
                + 새 설문
            </Button>
            <NewQuestionnairePopup show={newQuestionnairePopupShow} hide={newQuestionnaireCloseButtonOnClick}/>
            <QuestionnaireTemplatePopup show={questionnaireTemplatePopupShow} hide={questionnaireTemplateCloseButtonOnClick} />
        </div>
    )
}



export default NewQuestionnaireButton