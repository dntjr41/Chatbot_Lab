import axiosInstance from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER, CHANGE_TITLE, CHANGE_CONTENT, RESET_STATE, SET_TEMPLATE } from "../modules/createSurveySlice";

import Header from "../components/Header";
import QuestionCardList from "../components/CreateSurvey/QuestionCardList";

import '../css/CreateSurveyPage.css';
import { Col, Container, Form, Row, Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

// 새 설문 작성 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명 입력
//   └질문 카드 컴포넌트 리스트
//   └질문 추가 컴포넌트
//   └저장 버튼

const CreateSurveyPage = function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const userId = localStorage.getItem("id");
    const surveyInfo = useSelector(state => state.createSurvey);
    const surveyId = location.state !== null ? location.state.surveyId : null;

    const [show, setShow] = useState(false);

    // 로컬스토리지로부터 가져온 userId가 null이라면 로그인 페이지로 리다이렉트시킴
    // 로컬스토리지에 userId에 값이 있다면(로그인 되어 있다면) 설문 정보 state에 userId를 추가시킴
    useEffect(() => {
        console.log("로그인 확인 effect");
        if (userId === null) {
            alert("로그인이 필요합니다");
            navigate("/login");
        }
        dispatch(SET_USER(userId));
    }, [userId, dispatch, navigate]);

    // 설문지 리스트에서 설문지 ID를 받아서 페이지를 열었다면
    // 해당 설문지의 템플릿 정보를 서버로부터 가져와서 템플릿 초기화
    useEffect(() => {
        console.log("설문지 수정or생성 확인 effect");
        if (surveyId !== null) {
            const getSurveyTemplate = async () => {
                try {
                    //응답 성공 
                    axiosInstance.get('/response/' + surveyId)
                        .then((response) => {
                            dispatch(SET_TEMPLATE(response.data));
                        })
                } catch (error) {
                    //응답 실패
                    console.error(error);
                }
            }
            getSurveyTemplate();
        }
    }, [dispatch, surveyId])

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

    // 설문 임시저장 버튼 클릭시 modal 띄움
    const handleModalOpen = () => {
        setShow(true);
    }

    // modal 닫기
    const handleModalClose = () => {
        setShow(false);
    }

    // 설문 저장 요청 후 홈 페이지로 이동
    const saveSurvey = async () => {
        try {
            // 설문지 ID가 있다면 설문지 수정하기
            if (surveyId !== null) {
                //응답 성공 
                axiosInstance.put('/survey/' + surveyId + '/template', JSON.stringify(surveyInfo))
                    .then((response) => {
                        // 설문 작성한 state 초기화 후 modal닫고 질문지제작함(홈)으로 이동
                        dispatch(RESET_STATE());
                        handleModalClose();
                        console.log("설문 수정 완료");
                        navigate("/questionnaires");
                    })
            }
            // 설문지 ID가 없다면 설문지 생성
            else {
                //응답 성공 
                axiosInstance.post('/survey', JSON.stringify(surveyInfo))
                    .then((response) => {
                        // 설문 작성한 state 초기화 후 modal닫고 질문지제작함(홈)으로 이동
                        dispatch(RESET_STATE());
                        handleModalClose();
                        console.log("설문 임시저장 완료");
                        navigate("/questionnaires");
                    })
            }

        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    // 설문 저장 요청 후 공유 페이지로 이동
    const createSurvey = async () => {
        try {
            if (surveyId !== null) {
                //응답 성공 
                axiosInstance.put('/survey/' + surveyId + '/template', JSON.stringify(surveyInfo))
                    .then((response) => {
                        // 설문 작성한 state 초기화 후 설문 공유 페이지로 이동
                        dispatch(RESET_STATE());
                        console.log("설문 수정 완료");
                        navigate("/set-survey-per-tar", { state: { surveyId: response.data } });
                    })
            }
            else {
                //응답 성공 
                axiosInstance.post('/survey', JSON.stringify(surveyInfo))
                    .then((response) => {
                        // 설문 작성한 state 초기화 후 설문 공유 페이지로 이동
                        dispatch(RESET_STATE());
                        console.log("설문 공유 페이지 이동");
                        navigate("/set-survey-per-tar", { state: { surveyId: response.data } });
                    })
            }
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    return (
        <div className="create-survey-layout">
            <Header color="green" />
            <Container className="create-survey-form mt-5">
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
                    <button className="create-survey-submit mx-5 fs-2" type="button" onClick={handleModalOpen}>저장</button>
                    <button className="create-survey-submit mx-5 fs-2" type="button" onClick={createSurvey}>공유</button>
                </div>
                <Modal show={show} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>설문 저장</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>설문을 저장 하시겠습니까?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={saveSurvey}>예</Button>
                        <Button variant="secondary" onClick={handleModalClose}>아니요</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div >
    )
}

export default CreateSurveyPage;