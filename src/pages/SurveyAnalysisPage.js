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

const SurveyAnalysis = function () {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const userId = localStorage.getItem("id")
    const surveyTitle = useSelector(state => state.surveyResult.surveyTitle);
    const surveyContent = useSelector(state => state.surveyResult.surveyContent);
    const surveyTime = useSelector(state => state.surveyResult.surveyTime);

    // 로컬스토리지로부터 가져온 userId가 null이라면 로그인 페이지로 리다이렉트시킴
    // 로컬스토리지에 userId에 값이 있다면(로그인 되어 있다면) 설문 통계 결과를 가져옴
    useEffect(() => {
        console.log("설문지 통계 확인 effect");
        // 해당 설문지를 만든 유저가 일치한지 체크 
        const getSurveyStatistic = async () => {
            try {
                //응답 성공 
                axiosInstance.get("/user/survey/" + params.surveyId)
                    .then((response) => {
                        // 설문지id와 사용자id가 일치하면
                        // 설문지 통계 정보 가져오기
                        if (Number(userId) === response.data) {
                            axiosInstance.get('/response/statistic/' + params.surveyId)
                                .then((response) => {
                                    dispatch(GET_STATISTIC(response.data));
                                })
                        }
                        else {
                            alert("접근 권한이 없습니다");
                            navigate("/home");
                        }
                    })
            }
            catch (error) {
                //응답 실패
                console.error(error);
            }
        }

        if (userId === null) {
            alert("로그인이 필요합니다");
            navigate("/login");
        }
        getSurveyStatistic();

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
                        <Col className="mb-3 fw-bold">설문 제목 - {surveyTitle}</Col>
                        <Col className="mb-3 fw-normal">설문 기간 - {surveyTime.start} ~ {surveyTime.end}</Col>
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

export default SurveyAnalysis;