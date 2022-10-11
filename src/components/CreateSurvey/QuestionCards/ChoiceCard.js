import { useDispatch } from "react-redux";
import { ADD_ANSWER, DEL_ANSWER, COPY_CARD, DEL_CARD, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER, CHECK_OPT } from "../../../modules/createSurveySlice";

import CardMenu from "./CardMenu";

import "../../../css/CreateSurveyPage.css";

import { Form, Row, Col, Stack, CloseButton } from "react-bootstrap";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { BsSubtract, BsTrashFill, BsThreeDotsVertical } from "react-icons/bs";


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

    // 질문 복사
    const copyCard = (listIdx) => {
        dispatch(COPY_CARD(listIdx));
    }

    //질문 카드 삭제
    const delCard = (listIdx) => {
        dispatch(DEL_CARD(listIdx));
    }

    // 질문 제목 입력 업데이트
    const inputQuestionTitle = (listIdx, title) => {
        dispatch(CHANGE_QUE_TITLE({ listIdx, title }));
    }

    // 질문 응답 입력 업데이트
    const inputQuestionAnswer = (listIdx, answerIdx, answer) => {
        dispatch(CHANGE_QUE_ANSWER({ listIdx, answerIdx, answer }));
    }

    // 질문 옵션 체크 업데이트
    const checkOption = (listIdx, optIdx) => {
        dispatch(CHECK_OPT({ listIdx, optIdx }));
    }

    return (
        <div className="create-survey-card">
            <Form>
                <Row className="mb-5">
                    <Col className="create-survey-bottomLine" >
                        {listIdx + 1}<Form.Control plaintext placeholder="질문을 입력하세요" value={questionCard.title} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} />
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
                {
                    questionCard.options.map((option, optIdx) =>
                        <div key={optIdx}>
                            <input type="checkbox" defaultChecked={option} onClick={() => checkOption(listIdx, optIdx)} />
                            옵션{optIdx}
                        </div>
                    )
                }
                {/* <CardMenu questionCard={questionCard} listIdx={listIdx} /> */}
                <Stack direction="horizontal" gap={4}>
                    <BsSubtract className="ms-auto" onClick={() => copyCard(listIdx)} />
                    <BsTrashFill onClick={() => delCard(listIdx)} />
                    <OverlayTrigger trigger="click" placement="bottom" overlay={
                        <Popover id="popover">
                            <Popover.Body>
                                {
                                    questionCard.options.map((option, optIdx) =>
                                        <div key={optIdx}>
                                            <input type="checkbox" defaultChecked={option} onClick={() => checkOption(listIdx, optIdx)} />
                                            옵션{optIdx}
                                        </div>
                                    )
                                }
                            </Popover.Body>
                        </Popover>
                    }>
                        <BsThreeDotsVertical type="button" />
                    </OverlayTrigger>
                </Stack>

                <OverlayTrigger trigger="click" placement="bottom" overlay={
                    <Popover>
                        <Popover.Body>
                            And here's some <strong>amazing</strong> content. It's very engaging.
                            right?
                        </Popover.Body>
                    </Popover>
                }>
                    <Button variant="success">Click me to see</Button>
                </OverlayTrigger>
            </Form>
        </div >
    )
}

export default ChoiceCard;