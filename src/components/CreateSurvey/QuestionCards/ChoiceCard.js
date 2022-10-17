import { useDispatch } from "react-redux";
import { ADD_ANSWER, DEL_ANSWER, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER } from "../../../modules/createSurveySlice";

import CardMenu from "./CardMenu";

import "../../../css/CreateSurveyPage.css";

import { Form, Row, Col, CloseButton } from "react-bootstrap";


// 질문 카드 컴포넌트(객관식)
// questionCard: 질문 카드의 정보, listIdx: 질문 카드리스트의 몇번째 카드인지에 대한 index정보
const ChoiceCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    // 객관식 응답선택지를 추가
    // listIdx(int): 질문 리스트의 몇번째인지
    const addAnswer = (listIdx) => {
        dispatch(ADD_ANSWER(listIdx));
    }

    // 객관식 응답 선택지 삭제
    // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지
    const delAnswer = (listIdx, answerIdx) => {
        dispatch(DEL_ANSWER({ listIdx, answerIdx }));
    }

    // 질문 제목 입력 업데이트
    // listIdx(int): 질문 리스트의 몇번째인지, title(string): 입력된 값
    const inputQuestionTitle = (listIdx, title) => {
        dispatch(CHANGE_QUE_TITLE({ listIdx, title }));
    }

    // 질문 응답 입력 업데이트
    // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지, answer(string): 입력된 값
    const inputQuestionAnswer = (listIdx, answerIdx, answer) => {
        dispatch(CHANGE_QUE_ANSWER({ listIdx, answerIdx, answer }));
    }

    return (
        <div className="create-survey-card">
            <Form>
                <Row className="mb-5 fs-4">
                    <Form.Label column md="1">Q{listIdx + 1}. </Form.Label>
                    <Col md={10} className="create-survey-bottomLine" ><Form.Control plaintext placeholder="질문을 입력하세요" value={questionCard.questionTitle} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} /></Col>
                </Row>
                {
                    questionCard.questionAnswers.map((answer, answerIdx) =>
                        <Row key={answerIdx} className="align-items-center mb-3">
                            <Col md={11}>
                                <Form.Control className="fs-5" placeholder="답변을 입력하세요" value={answer} onChange={(e) => inputQuestionAnswer(listIdx, answerIdx, e.target.value)} />
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