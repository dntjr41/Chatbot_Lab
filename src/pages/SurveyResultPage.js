import Header from "../components/Header";
import StatisticCardList from "../components/SurveyResult/StatisticCardList";

import '../css/SurveyResultPage.css'

import { Row, Col, Container, Tabs, Tab, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

// 설문 결과 페이지
// └헤더
// └통계, 분석보기 버튼
// └설문 제목, 설문 기간, 설문 설명
// └응답별 통계 리스트
//   └응답별 통계(유형별 다른 컴포넌트)
//   └다운로드 버튼
// └결과 분석 컴포넌트

const SurveyResult = function () {
    const surveyTitle = useSelector(state => state.surveyResult.surveyTitle);
    const surveyContent = useSelector(state => state.surveyResult.surveyContent);
    const surveyTime = useSelector(state => state.surveyResult.surveyTime);

    const [isStat, setIsStat] = useState(true);
    const [isAnaly, setIsAnaly] = useState(false);
    const showStat = () => {
        setIsStat(true);
        setIsAnaly(false);
        console.log("통계화면으로 보여주기");
    }
    const showAnaly = () => {
        setIsStat(false);
        setIsAnaly(true);
        console.log("분석화면으로 보여주기");
    }

    return (
        <div className="survey-result-layout">
            <Header />

            <Container>
                <Tab.Container
                    defaultActiveKey="statistic"
                    id="result-tab"
                    fill
                >
                    <Nav className="justify-content-end mx-5 px-3" variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="statistic">통계보기</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="analysis">분석보기</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="survey-result-info p-3 fs-1">
                        <Col className="mb-3">설문 제목 - {surveyTitle}</Col>
                        <Col className="mb-3">설문 기간 - {surveyTime.start} ~ {surveyTime.end}</Col>
                        <Col className="survey-result-bottomLine fs-2">{surveyContent}</Col>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="statistic">
                            <StatisticCardList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="analysis">
                            <h1>분석 화면</h1>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>

        </div >
    )
}

export default SurveyResult;