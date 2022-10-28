import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

import axiosInstance from "../api";

import Header from "../components/Header";
import StatisticCardList from "../components/SurveyResult/StatisticCardList";

import '../css/SurveyResultPage.css'

import { Col, Container, Tab, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { GET_STATISTIC } from "../modules/surveyResultSlice";

// 설문 결과 페이지
// └헤더
// └통계, 분석보기 버튼
// └설문 제목, 설문 기간, 설문 설명
// └응답별 통계 리스트
//   └응답별 통계(유형별 다른 컴포넌트)
//   └다운로드 버튼
// └결과 분석 컴포넌트

const SurveyResult = function () {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const userId = localStorage.getItem("id")
    const surveyTitle = useSelector(state => state.surveyResult.surveyTitle);
    const surveyContent = useSelector(state => state.surveyResult.surveyContent);
    const surveyTime = useSelector(state => state.surveyResult.surveyTime);

    useEffect(() => {
        console.log(userId);
        if (userId === null) {
            alert("로그인이 필요합니다");
            navigate("/login");
        }

        // 나중에 설문지 id와 유저id를 대조하고 다르면 홈으로 리다이렉트시켜야함
        const getSurveyTemplate = async () => {
            console.log("설문 결과 가져오기" + params.surveyId);
            try {
                //응답 성공 
                axiosInstance.get('/response/result/statistic/' + params.surveyId)
                    .then((response) => {
                        console.log(response.data);
                        dispatch(GET_STATISTIC(response.data));
                    })
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        getSurveyTemplate();
    }, [params.surveyId, userId, dispatch, navigate]);

    return (
        <div className="survey-result-layout">
            <Header color="green" />

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