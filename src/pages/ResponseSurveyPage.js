import axiosInstance from '../api';
import { useSelector } from 'react-redux';
import { GET_TEMPLATE, RESET_STATE } from "../modules/responseSurveySlice";

import Header from "../components/Header";
import ResponseCardList from "../components/ResponseSurvey/ResponseCardList";

import "../css/ResponseSurveyPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// 피설문자관점 응답 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명
//   └질문 카드 컴포넌트 리스트
//   └제출 버튼

const ResponsePage = function () {
    const dispatch = useDispatch();
    const responseInfo = useSelector(state => state.responseSurvey);
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const pageInfo = {
        surveyId: params.surveyId,
        isPreview: location.state !== null ? location.state.isPreview : false
    };

    // url의 설문ID에 해당하는 설문지 템플릿 정보를 서버로부터 받아온다
    useEffect(() => {
        const getSurveyTemplate = async () => {
            try {
                //응답 성공 
                axiosInstance.get('/response/' + pageInfo.surveyId)
                    .then((response) => {
                        dispatch(GET_TEMPLATE(response.data));
                    })
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        getSurveyTemplate();
    }, [dispatch, pageInfo.surveyId]);


    // 설문 제출
    const submitSurvey = async () => {
        try {
            //응답 성공 
            axiosInstance.post('/response', responseInfo)
                .then((response) => {
                    // 설문제출 완료시 응답 state 초기화후 감사 인사 페이지로 이동
                    dispatch(RESET_STATE());
                    navigate("/finish-response");
                })
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    return (
        <div className="response-layout">
            <Header color="green" />
            <Container className="response-survey-form mt-5">
                <Row>
                    <Col className="mt-5 mx-5 fs-1 fw-bold"><div>{responseInfo.surveyTitle}</div></Col>
                </Row>
                <Row>
                    <Col className="m-5 fs-2"><div>{responseInfo.surveyContent}</div></Col>
                </Row>
                <Row>
                    <fieldset disabled={pageInfo.isPreview ? true : false}>
                        <ResponseCardList pageInfo={pageInfo} />
                    </fieldset>
                </Row>
                <div className={"text-center my-5 " + (pageInfo.isPreview ? "d-none" : "")}>
                    <button className="response-survey-sumbit fs-2" type="button" onClick={submitSurvey}>제출</button>
                </div>
            </Container >
        </div >
    )
};

export default ResponsePage;