import { useDispatch } from "react-redux";
import { ADD_CARD } from "../../modules/createSurveySlice";


import "../../css/CreateSurveyPage.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";

// └질문 추가 컴포넌트
//   └질문 추가 버튼, 질문 유형 리스트 팝업

// 객관식 카드 객체 생성 후 리스트에 추가
const AddQuestionComponent = function () {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const addChoicCard = () => {
        const card = {
            questionType: 1,
            questionTitle: "",
            questionAnswers: [""],
            questionOptions: [true, false, false],
        }
        dispatch(ADD_CARD(card));
        setVisible(false);
    }

    // 주관식 카드 객체 생성 후 리스트에 추가
    const addSubjectiveCard = () => {
        const card = {
            questionType: 4,
            questionTitle: "",
            questionOptions: [true],
        }
        dispatch(ADD_CARD(card));
        setVisible(false);
    }

    const cardMenu = (
        <div className="create-survey-addcard mt-3">
            <Row className="primary-color-grad pb-2">
                <Col md={8}>
                    <Row className="mb-2 fs-2"><Col>카드</Col></Row>
                    <Row className="fs-6">
                        <Col><button type="button" onClick={addChoicCard}>객관식</button></Col>
                        <Col><button type="button" onClick={addSubjectiveCard}>주관식</button></Col>
                    </Row>
                    <Row className="fs-6">
                        <Col><button type="button">이미지</button></Col>
                        <Col><button type="button">동영상</button></Col>
                    </Row>
                    <Row className="fs-6">
                        <Col><button type="button">드롭다운</button></Col>
                        <Col><button type="button">감정바</button></Col>
                    </Row>
                    <Row className="fs-6">
                        <Col><button type="button">날짜</button></Col>
                        <Col><button type="button">시간</button></Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row className="mb-2 fs-2"><Col>메뉴</Col></Row>
                    <Row className="fs-6"><Col><button type="button">질문은행</button></Col></Row>
                    <Row className="fs-6"><Col><button type="button">섹션추가</button></Col></Row>
                </Col>
            </Row>
        </div>
    )

    // 질문 카드 추가
    const showCardComp = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <BsPlusSquare className="create-survey-addQue" onClick={showCardComp} />
            {
                visible && cardMenu
            }
        </div>
    )
}

export default AddQuestionComponent;