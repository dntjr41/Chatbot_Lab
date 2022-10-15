import { useSelector } from 'react-redux';

import Header from "../components/Header";
import ResponseCardList from "../components/ResponseSurvey/ResponseCardList";

import "../css/ResponseSurveyPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
// 피설문자관점 응답 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명
//   └질문 카드 컴포넌트 리스트
//   └제출 버튼

const ResponsePage = function () {
    const responseInfo = useSelector(state => state.responseSurvey);

    // 설문 제출
    const submitSurvey = () => {
        alert("응답 제출")
        console.log(responseInfo);
    }

    return (
        <div className="response-layout">
            <Header color="green"/>
            <div className="response-title">설문지 응답</div>
            <Container className="response-survey-form">
                <Row>
                    <Col className="mt-5 mx-5 fs-1"><div>{responseInfo.surveyTitle}</div></Col>
                </Row>
                <Row>
                    <Col className="m-5 fs-2"><div>{responseInfo.surveyContent}</div></Col>
                </Row>
                <Row>
                    <ResponseCardList />
                </Row>
                <div className="text-center my-5">
                    <Link to="/finish-response"><button className="response-survey-sumbit fs-2" type="button" onClick={submitSurvey}>제출</button></Link>
                </div>
            </Container>
        </div>
    )
}

export default ResponsePage;