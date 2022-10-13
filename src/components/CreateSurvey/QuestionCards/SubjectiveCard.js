import { useDispatch } from "react-redux";
import { DEL_CARD, CHANGE_QUE_TITLE, CHECK_OPT } from "../../../modules/createSurveySlice";

import CardMenu from "./CardMenu";

import "../../../css/CreateSurveyPage.css";
import { Form, Row, Col } from "react-bootstrap";

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
                <Row className="mb-5 create-survey-bottomLine" >
                    <Form.Control plaintext placeholder="질문을 입력하세요" value={questionCard.title} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} />
                </Row>
                <CardMenu questionCard={questionCard} listIdx={listIdx} />
            </Form>
        </div>
    )
}

export default SubjectiveCard;