import { useDispatch } from "react-redux";
import { CHANGE_QUE_TITLE, } from "../../../modules/createSurveySlice";

import CardMenu from "./CardMenu";

import "../../../css/CreateSurveyPage.css";
import { Col, Form, Row } from "react-bootstrap";

// 질문 카드 컴포넌트(주관식)

const SubjectiveCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    // 질문 제목 입력 업데이트
    const inputQuestionTitle = (listIdx, title) => {
        dispatch(CHANGE_QUE_TITLE({ listIdx, title }));
    }
    return (
        <div className="create-survey-card">
            <Form>
                <Row className="mb-5 fs-4" >
                    <Form.Label column md="1">Q{listIdx + 1}. </Form.Label>
                    <Col md={10} className="create-survey-bottomLine"><Form.Control plaintext placeholder="질문을 입력하세요" value={questionCard.questionTitle} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} /></Col>
                </Row>
                <CardMenu questionCard={questionCard} listIdx={listIdx} />
            </Form>
        </div>
    )
}

export default SubjectiveCard;