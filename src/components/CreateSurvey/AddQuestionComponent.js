import { useDispatch } from "react-redux";
import { ADD_CARD } from "../../modules/createSurveySlice";


import "../../css/CreateSurveyPage.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

// └질문 추가 컴포넌트
//   └질문 추가 버튼, 질문 유형 리스트 팝업

const AddQuestionComponent = function () {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const addChoicCard = () => {
        const card = {
            type: "choice",
            title: "",
            answers: [""],
            options: [false, false, false],

        }
        dispatch(ADD_CARD(card));
        setVisible(false);
    }

    const addSubjectiveCard = () => {
        const card = {
            type: "subjective",
            title: "",
            options: [false, false, false],
        }
        dispatch(ADD_CARD(card));
        setVisible(false);
    }

    const cardMenu = (
        <div className="create-survey-addcard">
            <Row className="primary-color-grad">
                <Col md={8}>
                    <Row><Col>카드</Col></Row>
                    <Row>
                        <Col><button type="button" onClick={addChoicCard}>객관식</button></Col>
                        <Col><button type="button" onClick={addSubjectiveCard}>주관식</button></Col>
                    </Row>
                    <Row>
                        <Col><button type="button">이미지</button></Col>
                        <Col><button type="button">동영상</button></Col>
                    </Row>
                    <Row>
                        <Col><button type="button">드롭다운</button></Col>
                        <Col><button type="button">감정바</button></Col>
                    </Row>
                    <Row>
                        <Col><button type="button">날짜</button></Col>
                        <Col><button type="button">시간</button></Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row><Col>메뉴</Col></Row>
                    <Row><Col><button type="button">질문은행</button></Col></Row>
                    <Row><Col><button type="button">섹션추가</button></Col></Row>
                </Col>
            </Row>
        </div>
    )

    // 질문 카드 추가
    const addCard = () => {
        // dispatch(ADD_CARD());
        setVisible(!visible);
    }

    return (
        <div>
            <button type="button" onClick={addCard}>질문 추가</button>
            {
                visible && cardMenu
            }
        </div>
    )
}

export default AddQuestionComponent;