import axiosInstance from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_TITLE, CHANGE_CONTENT, RESET_STATE } from "../modules/createSurveySlice";

import Header from "../components/Header";
import QuestionCardList from "../components/CreateSurvey/QuestionCardList";

import '../css/CreateSurveyPage.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// 새 설문 작성 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명 입력
//   └질문 카드 컴포넌트 리스트
//   └질문 추가 컴포넌트
//   └저장 버튼

const CreateSurveyPage = function () {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.createSurvey.userId); // 나중에 유저 정보를 담고 있는 다른 store에서 가져와야함
    const surveyInfo = useSelector(state => state.createSurvey);

    // 로그인한 상태(userId에 값이 있는 상태)가 아니라면 login 페이지로 리다이렉트시킴
    const navigate = useNavigate();
    useEffect(() => {
        console.log("use effect");
        console.log(surveyInfo);
        if (userId === null) {
            alert("로그인이 필요합니다");
            navigate("/login");
        }
    }, [userId, navigate]);

    // 설문의 제목 입력 업데이트
    // title(string): 입력된 값
    const inputTitle = (title) => {
        dispatch(CHANGE_TITLE(title));
    }

    // 설문의 부연설명 입력 업데이트
    // content(string): 입력된 값
    const inputContent = (content) => {
        dispatch(CHANGE_CONTENT(content));
    }

    const saveSurvey = async () => {
        console.log(JSON.stringify(surveyInfo));
        try {
            //응답 성공 
            axiosInstance.post('/survey', JSON.stringify(surveyInfo))
                .then((response) => {
                    alert("설문 임시 저장 및 홈 페이지로 이동");
                    console.log(response);
                })
        } catch (error) {
            //응답 실패
            console.error(error);
        }
        dispatch(RESET_STATE());
    }

    const createSurvey = async () => {
        console.log(JSON.stringify(surveyInfo));
        try {
            //응답 성공 
            axiosInstance.post('/survey', JSON.stringify(surveyInfo))
                .then((response) => {
                    alert("설문 저장 및 공유 페이지로 이동");
                    console.log(response.data);
                    navigate("/set-survey-per-tar", { state: { surveyId: response.data } });
                })
        } catch (error) {
            //응답 실패
            console.error(error);
        }
        dispatch(RESET_STATE());
    }

    return (
        // 설문 제목, 부연설명에 대한 redux 처리 필요
        <div className="create-survey-layout">
            <Header color="green" />
            <div className="create-survey-title">설문지 작성</div>
            <Container className="create-survey-form">
                <Row>
                    <Col className="mt-5 mx-5 fs-1"><Form.Control plaintext placeholder="설문 제목을 입력하세요" value={surveyInfo.surveyTitle} onChange={(e) => inputTitle(e.target.value)} /></Col>
                </Row>
                <Row>
                    <Col className="m-5 create-survey-bottomLine fs-2"><Form.Control plaintext placeholder="설명" value={surveyInfo.surveyContent} onChange={(e) => inputContent(e.target.value)} /></Col>
                </Row>
                <Row>
                    <QuestionCardList />
                </Row>
                <div className="text-center my-5">
                    <Link to="/questionnaires"><button className="create-survey-submit mx-5 fs-2" type="button" onClick={saveSurvey}>임시저장</button></Link>
                    <button className="create-survey-submit mx-5 fs-2" type="button" onClick={createSurvey}>공유</button>
                </div>
            </Container>
        </div >
    )
}

export default CreateSurveyPage;