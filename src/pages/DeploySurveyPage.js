import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container} from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import QRCode from 'qrcode.react';

import Header from "../components/Header";
import '../css/DeploySurveyPage.css';

import axiosInstance from '../api';
import surveyInfo from '../modules/surveyInfo';
import { useForceUpdate } from 'framer-motion';

// 배포 (설문 공유) 페이지
// └헤더
// └설문 공유 컴포넌트
//   └설문 정보
//     └설문 제목
//     └설문 기간
//     └설문 대상
//   └설문 공유
//     └링크, 복사하기 버튼
//     └QR코드, 저장하기 버튼
//   └홈으로 가기 버튼

const DeploySurveyPage = function () {

    const location = useLocation();
    const surveyId = location.state.surveyId;
    const [surveyInfo, setState] = useState([]);
    const url = "http://localhost:8080/api/survey/userId=" + 1;
    
    const getData = async () => {
        try {
            const res = await axios.get(url)
            .then(function (response) {
                setState(response.data.filter(value => value.surveyId == surveyId)[0]);
            })

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        { getData() }
    }, []);

    console.log(surveyInfo);
    useForceUpdate();

    const surveyTitle = surveyInfo.surveyTitle;
    const surveyStart = surveyInfo.surveyStart;
    const surveyEnd = surveyInfo.surveyEnd;
    const link = surveyInfo.surveyUrl;

    console.log(surveyTitle);
    console.log(surveyStart);
    console.log(surveyEnd);
    console.log(link);

    // 링크 복사하기
    const downloadLink = () => {
        navigator.clipboard.writeText(link);
    }

    // QR코드 다운로드하기
    const downloadQR = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png").replace("image/png", "image/octet-stream");
    
        // console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <div className="deploySurveyPage">
            <Header />

            <Container className="MainFrame">
                <div className="deploySurvey">
                    <Col className="deployInfo">
                        <Col className="info">설문 제목 - {surveyTitle}</Col>
                        <Col className="info">설문 기간 - {surveyStart + " ~ " + surveyEnd}</Col>
                    </Col>
                    
                    <Col className="deployLink">                     
                        <Col>링크 - {link} <button className="linkBtn" onClick={downloadLink}/> &nbsp;</Col>
                    </Col>

                    <div className="deployQR">
                        <Col><QRCode id="qrCodeEl" value={link}/></Col>
                        <Col>QR 코드 <button className="qrBtn" onClick={downloadQR} /></Col>
                    </div>
                </div>
            </Container>

            <div className="homeBtnFrame"><Link to="/home"><button type="button" className="goDeployHomeBtn">홈으로 가기</button></Link></div>
        </div>
    )
}

export default DeploySurveyPage;