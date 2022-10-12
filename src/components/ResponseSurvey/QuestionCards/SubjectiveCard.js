import "../../../css/ResponseSurveyPage.css";
import { Form, Row } from "react-bootstrap";

// 질문 카드 컴포넌트(주관식)

const SubjectiveCard = function ({ questionCard, listIdx }) {
    return (
        <div className="response-survey-card">
            <Row className="mb-5" >
                <div>{questionCard.title}</div>
            </Row>
            <Row>
                <Form.Control className="response-survey-subjective" as="textarea" placeholder="답변을 입력해주세요" row={2} />
            </Row>
        </div>
    )
}

export default SubjectiveCard;