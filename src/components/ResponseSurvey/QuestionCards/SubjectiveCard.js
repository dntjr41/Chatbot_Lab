import { useDispatch } from "react-redux";
import { ANS_SUBJECTIVE_INPUT } from "../../../modules/responseSurveySlice";

import "../../../css/ResponseSurveyPage.css";
import { Form, Row } from "react-bootstrap";

// 질문 카드 컴포넌트(주관식)

const SubjectiveCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    const inputAnswer = (listIdx, answer) => {
        dispatch(ANS_SUBJECTIVE_INPUT({ listIdx, answer }));
    }
    return (
        <div className="response-survey-card">
            <Row className="mb-5" >
                <div>{questionCard.title}</div>
            </Row>
            <Row>
                <Form.Control className="response-survey-subjective" as="textarea" placeholder="답변을 입력해주세요" value={questionCard.answers} row={2} onChange={(e) => inputAnswer(listIdx, e.target.value)} />
            </Row>
        </div>
    )
}

export default SubjectiveCard;