import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import QRCode from 'qrcode.react';

import Header from "../components/Header";
import '../css/DeploySurveyPage.css';

import surveyInfo from '../modules/surveyInfo';

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

    const surveyTitle = useSelector(state => state.surveyTitle);
    const surveyTime = useSelector(state => state.surveyTime);
    // Target에 대해서도 말해야함

    const deployMethod = useSelector(state => state.deployMethod);
    const link = useSelector(state => state.link);

    // 링크 복사하기
    const downloadLink = () => {
        navigator.clipboard.writeText(link);
    }

    // QR코드 다운로드하기
    const downloadQR = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png").replace("image/png", "image/octet-stream");
    
        console.log(qrCodeURL)
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
                        <Col className="info">설문 기간 - {surveyTime}</Col>
                    </Col>
                    
                    <Col className="deployLink">                     
                        <Col>링크 - {link} <button className="linkBtn" onClick={downloadLink}/> &nbsp;</Col>
                    </Col>

                    <div className="deployQR">
                        <Col><QRCode id="qrCodeEl" value="https://github.com/dntjr41/KAKAO_Chatbot_Lab"/></Col>
                        <Col>QR 코드 <button className="qrBtn" onClick={downloadQR} /></Col>
                    </div>
                </div>
            </Container>

            <div className="homeBtnFrame"><Link to="/home"><button type="button" className="goDeployHomeBtn">홈으로 가기</button></Link></div>
        </div>
    )
}

export default DeploySurveyPage;