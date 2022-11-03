import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
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
import axiosInstance from '../api.js';
import { useForceUpdate } from 'framer-motion';

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
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const surveyId = location.state.surveyId;
    const userID = localStorage.getItem("id");
    const [surveyInfo, setState] = useState([]);
    
    const getData = async () => {
        try {
            axiosInstance.get('/survey/userId=' + userID)
            .then((response) => {
                console.log(response.data);
                setState(response.data.filter(value => value.surveyId === surveyId)[0]);
            })
        
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        { getData() }
    }, []);

    console.log(surveyInfo);
    useForceUpdate();

    const surveyTitle = surveyInfo.surveyTitle;
    const surveyStart = surveyInfo.surveyTitle;
    const surveyEnd = surveyInfo.surveyEnd;
    const surveyDescription = surveyInfo.surveyDescription;
    const surveyUrl = surveyInfo.surveyUrl;
    const userId = surveyInfo.userId;

    var surveyTemp = {
        surveyId: surveyId,
        userId: userId,
        surveyTitle: surveyTitle,
        surveyDescription: surveyDescription,
        surveyStart: surveyStart,
        surveyEnd: surveyEnd,
        surveyUrl: surveyUrl
    };

    var surveyUpdate = {
        surveyStart: surveyTemp.surveyStart,
        surveyEnd: surveyTemp.surveyEnd,
        surveyUrl: surveyTemp.surveyUrl
    }

    const newSurveyStart = location.state.surveyStart;
    const newSurveyEnd = location.state.surveyEnd;
    
    // 기간 설정 업데이트
    const inputPeriod = () => {     
        surveyTemp.surveyStart = newSurveyStart;
        surveyTemp.surveyEnd = newSurveyEnd;

        console.log(surveyTemp);
    }

    // 링크 생성
    const linkUpdate = () => {
        var link = "localhost:3000/response/" + surveyInfo.surveyId;

        surveyTemp.surveyId = surveyInfo.surveyId;
        surveyTemp.surveyUrl = link;
    }

    // 설문 공유 (Deploy Survey) 페이지로 이동
    const gotoDeploySurvey = async () => {
        inputPeriod();
        linkUpdate();

        console.log(JSON.stringify(surveyTemp));

        surveyUpdate.surveyStart = surveyTemp.surveyStart;
        surveyUpdate.surveyEnd = surveyTemp.surveyEnd;
        surveyUpdate.surveyUrl = surveyTemp.surveyUrl;
        
        {/* 서버로 정보 보내서 업데이트 하는 부분에서 CORS 에러 발생하는데,
            시간 상 여기서 더 구현하는 것은 무리일 것 같고,
            우선 진행한 다음 추후 업데이트 해야할 것 같습니다.
        */}

        try {
            axiosInstance.put('/survey/updateSurvey/surveyId=' 
                                + surveyInfo.surveyId, JSON.stringify(surveyUpdate))
            .then((response) => {
                console.log(response.data);
            })
        } catch (error) {
            console.error(error);
        }

        navigate("/deploy-survey", { state: {surveyId: surveyTemp.surveyId, surveyStart: surveyTemp.surveyStart,
                                            surveyEnd: surveyTemp.surveyEnd, surveyUrl: surveyTemp.surveyUrl}});
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

            <button className="deployBtn" onClick={gotoDeploySurvey}>2. 설문 공유하기</button>
        </div>
    )
}

export default SetSurveyPerTarPage;