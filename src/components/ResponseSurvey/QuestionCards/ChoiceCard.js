import "../../../css/ResponseSurveyPage.css";

import { Form, Row, Col } from "react-bootstrap";


// 질문 카드 컴포넌트(객관식)

const ChoiceCard = function ({ questionCard, listIdx }) {

    return (
        <div className="response-survey-card">
            <Row className="mb-5">
                <Col >
                    <div>{questionCard.title}</div>
                </Col>
            </Row>
            {
                questionCard.answers.map((answer, answerIdx) =>
                    <Row key={answerIdx} className="mb-3">
                        <Form.Check className="response-survey-choice" type="checkbox" id={listIdx + "-" + answerIdx} label={answer} />
                    </Row>

                )
            }
        </div >
    )
}

export default ChoiceCard;