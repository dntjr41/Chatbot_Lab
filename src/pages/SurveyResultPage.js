import Header from "../components/Header";
import StatisticCardList from "../components/SurveyResult/StatisticCardList";

import '../css/SurveyResultPage.css'

import { Row, Col, Container } from "react-bootstrap";
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
    const surveyTitle = useSelector(state => state.surveyStatistic.surveyTitle);
    const surveyContent = useSelector(state => state.surveyStatistic.surveyContent);
    const surveyTime = useSelector(state => state.surveyStatistic.surveyTime);

    console.log(surveyTitle);
    console.log(surveyContent);
    console.log(surveyTime);

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
                <div className="survey-result-tab my-3">
                    <Row className="text-center">
                        <Col md={{ offset: 8, span: 2 }}><button type="button" onClick={showStat} disabled={isStat}>통계보기</button></Col>
                        <Col md={2}><button type="button" onClick={showAnaly} disabled={isAnaly}>분석보기</button></Col>
                    </Row>
                </div>
                <div className="survey-result-info my-3">
                    <Row><Col>설문 제목 - {surveyTitle}</Col></Row>
                    <Row><Col>설문 기간 - {surveyTime.start} ~ {surveyTime.end}</Col></Row>
                    <Row style={{ fontSize: "32px" }}><Col>{surveyContent}</Col></Row>
                </div>

                <div>
                    {isStat && <StatisticCardList />}
                    {isAnaly && <h1>분석 화면</h1>}
                </div>
            </Container>

        </div>
    )
}

export default SurveyResult;