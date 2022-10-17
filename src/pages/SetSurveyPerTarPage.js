import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import surveyInfo, { SET_PERIOD_START, SET_PERIOD_END, CREATE_LINK} from '../modules/surveyInfo.js';
import { Link } from "react-router-dom";

import Header from "../components/Header";
import '../css/SetSurveyPerTarPage.css';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import GroupNav from '../components/SetSurveyPerTar/GroupNav.js';
import Calendar from '../components/SetSurveyPerTar/Calender.js';

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

const SetSurveyPerTarPage = function (name) {
    const dispatch = useDispatch();
    const surveyId = useSelector(state => state.surveyId);
    const userId = useSelector(state => state.userId);
    const surveyTime = useSelector(state => state.surveyTime);
    const link = useSelector(state => state.link);
    const surveyInfo = useSelector(state => state.surveyInfo);

    // 기간 설정 업데이트
    const inputPeriod = () => {
        // dispatch(SET_PERIOD(surveyTime));
        console.log(surveyTime);
    }

    // 링크 생성
    const linkUpdate = () => {
        var link = "localhost:3000/response/" + surveyId;
        dispatch(CREATE_LINK(link));
        console.log(link);
    }

    // 설문 공유 (Deploy Survey) 페이지로 이동
    const gotoDeploySurvey = () => {
        inputPeriod();
        linkUpdate();

        console.log(name);
        console.log(surveyInfo);
        alert(JSON.stringify(surveyInfo.link));
    }

    return (
        <div className="setSurveyPerTarPage">
            <Header />
            
            <Container className="setPerTarMainFrames">
                <Col className="periodFirstText">1. 설문 기간 설정</Col>

                <Container className="perTarContainer">
                    <Col className="periodText">
                        <Col className="periodTxt">설문 시작일 설정</Col>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Col className="periodTxt">설문 종료일 설정</Col>
                    </Col>

                    <Calendar className="calender"/>
                </Container>
            </Container>

            <Link to="/deploy-survey">
                <button className="deployBtn" onClick={gotoDeploySurvey}>2. 설문 공유하기</button>
            </Link>
        </div>
    )
}

export default SetSurveyPerTarPage;