import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import surveyInfo, { SET_PERIOD, ADD_GROUP, ADD_TARGET, DEPLOY_METHOD, CREATE_LINK} from '../modules/surveyInfo.js';
import { Link } from "react-router-dom";

import Header from "../components/Header";
import '../css/SetSurveyPerTarPage.css';

import PeriodNav from '../components/SetSurveyPerTar/PeriodNav.js';
import GroupNav from '../components/SetSurveyPerTar/GroupNav.js';

// 배포 전 날짜 및 그룹 설정 페이지
// └헤더
// └날짜 및 그룹 설정 컴포넌트
//   └설문 기간 설정
//     └설문 시작일 텍스트, 설문 시작 시간 선택 드롭다운
//     └설문 종료일 텍스트, 설문 종료 시간 선택 드롭다운
//     └설문 그룹 설정 버튼
//     └설문 기간 설정 달력
//     └연도 드롭다운, 월 드롭다운, 시작일 버튼, 종료일 버튼 
//   └설문 날짜 설정
//     └내 그룹 (확인) 버튼, 그룹 추가 버튼
//     └그룹 추가 리스트
//     └설문 대상 (확인) 버튼, 대상 추가 버튼
//     └설문 대상 리스트
//   └설문 공유하기 버튼

// 공유하기 버튼 클릭시 Json 생성
// Json - 사용자 ID (PK), 설문 ID (FK), 설문 제목, 설문 기간, 
//        설문 대상, 설문 응답 문구, 설문 응답 딥링크

const SetSurveyPerTarPage = function () {
    const dispatch = useDispatch();
    const surveyId = useSelector(state => state.surveyId);
    const userId = useSelector(state => state.userId);
    const surveyTime = useSelector(state => state.surveyTime);
    const userGroup = useSelector(state => state.userGroup);
    const target = useSelector(state => state.target);
    const deployMethod = useSelector(state => state.deployMethod);
    const link = useSelector(state => state.link);
    const surveyInfo = useSelector(state => state.surveyInfo);

    // 기간 설정 업데이트
    const inputPeriod = (surveyTime) => {
        dispatch(SET_PERIOD(surveyTime));
    }

    // 그룹 업데이트
    const groupUpdate = (userGroup) => {
        dispatch(ADD_GROUP(userGroup));
    }

    // 대상 업데이트
    const targetUpdate = (target) => {
        dispatch(ADD_TARGET(target));
    }

    // 공유 방법 선택
    const deployMethodUpdate = (deployMethod) => {
        dispatch(DEPLOY_METHOD(deployMethod));
    }

    // 링크 생성
    const linkUpdate = (link) => {
        link = "/response" + surveyId;
        dispatch(CREATE_LINK(link));
    }

    // 설문 공유 (Deploy Survey) 페이지로 이동
    const gotoDeploySurvey = () => {
        console.log(surveyInfo);
        alert(JSON.stringify(surveyInfo));
    }

    return (
        <div className="setSurveyPerTarPage">
            <Header />
            
            <Container className="setPeriodFrame">
                <Row className="periodFirstText">1. 설문 기간과 대상 설정</Row>

                <Col className="setPeriod">
                    <Row><PeriodNav /></Row>
                </Col>
            </Container>

            <Container className="setTargetFrame">
                <Row className="setTarget">
                    <Col><GroupNav></GroupNav></Col>
                </Row>
            </Container>

            <Link to="/deploy-survey">
                <button className="deployBtn" onClick={gotoDeploySurvey}>2. 설문 공유하기</button>
            </Link>
        </div>
    )
}

export default SetSurveyPerTarPage;