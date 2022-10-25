import axiosInstance from '../api';
import { useSelector } from 'react-redux';
import { GET_TEMPLATE } from "../modules/responseSurveySlice";

import Header from "../components/Header";
import ResponseCardList from "../components/ResponseSurvey/ResponseCardList";

import "../css/ResponseSurveyPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// 피설문자관점 응답 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명
//   └질문 카드 컴포넌트 리스트
//   └제출 버튼

const ResponsePage = function ({ surveyId }) {
    const dispatch = useDispatch();
    const responseInfo = useSelector(state => state.responseSurvey);

    useEffect(() => {
        const getSurveyTemplate = async () => {
            console.log("템플릿 가져오기");
            try {
                //응답 성공 
                axiosInstance.get('/response/' + surveyId)
                    .then((response) => {
                        console.log(response.data);
                        dispatch(GET_TEMPLATE(response.data));
                    })
            } catch (error) {
                //응답 실패
                console.error(error);
            }
        }
        getSurveyTemplate();
    }, [dispatch, surveyId]);


    // 설문 제출
    const submitSurvey = () => {
        // alert("응답 제출")
        console.log(responseInfo);
    }

    return (
        <div className="response-layout">
            <Header color="green" />
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
};

ResponsePage.defaultProps = { surveyId: 1 };

export default ResponsePage;