import { useDispatch } from "react-redux";
import { ADD_ANSWER, DEL_ANSWER, COPY_CARD, DEL_CARD, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER, CHECK_OPT } from "../../../modules/createSurveySlice";

import CardMenu from "./CardMenu";

import "../../../css/CreateSurveyPage.css";

import { Form, Row, Col, CloseButton } from "react-bootstrap";


// 질문 카드 컴포넌트(객관식)

const ChoiceCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    // 객관식 응답선택지를 추가
    const addAnswer = (listIdx) => {
        dispatch(ADD_ANSWER(listIdx));
    }

    // 객관식 응답 선택지 삭제
    const delAnswer = (listIdx, answerIdx) => {
        dispatch(DEL_ANSWER({ listIdx, answerIdx }));
    }

    // 질문 제목 입력 업데이트
    const inputQuestionTitle = (listIdx, title) => {
        dispatch(CHANGE_QUE_TITLE({ listIdx, title }));
    }

    // 질문 응답 입력 업데이트
    const inputQuestionAnswer = (listIdx, answerIdx, answer) => {
        dispatch(CHANGE_QUE_ANSWER({ listIdx, answerIdx, answer }));
    }

    return (
        <div className="create-survey-card">
            <Form>
                <Row className="mb-5">
                    <Col className="create-survey-bottomLine" >
                        <Form.Control plaintext placeholder="질문을 입력하세요" value={questionCard.title} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} />
                    </Col>
                </Row>
                {
                    questionCard.answers.map((answer, answerIdx) =>
                        <Row key={answerIdx} className="align-items-center mb-3">

                            <Col md={11}>
                                <Form.Control placeholder="답변을 입력하세요" value={answer} onChange={(e) => inputQuestionAnswer(listIdx, answerIdx, e.target.value)} />
                            </Col>
                            <Col md={1}><CloseButton onClick={() => delAnswer(listIdx, answerIdx)} /></Col>

                        </Row>

                    )
                }
                <button className="create-survey-addAns" type="button" onClick={() => addAnswer(listIdx)}>응답 추가</button>
                <CardMenu questionCard={questionCard} listIdx={listIdx} />
            </Form>
        </div >
    )
}

export default ChoiceCard;