import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import NewQuestionnairePopup from './newQuestionnaire/newQuestionnariePopup';
import QuestionnaireTemplatePopup from './questionnarieTemplate/qustionnarieTemplatePopup';

function NewQuestionnaireButton() {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Button variant="dark" size="lg" onClick={() => (setShow(true), console.log(show))}>
                + 새 설문
            </Button>
            <NewQuestionnairePopup/>
            <QuestionnaireTemplatePopup show={show} />
        </>
    )
}



export default NewQuestionnaireButton