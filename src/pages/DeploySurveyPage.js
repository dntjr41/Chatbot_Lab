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
        alert("링크 복사하기");
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
                        <Row className="info">설문 제목 - {surveyTitle}</Row>
                        <Row className="info">설문 기간 - {surveyTime}</Row>
                        <Row className="info">설문 대상 - 그룹 </Row>
                    </Col>
                    
                    <Row className="deployLink">
                        <Col>링크 - {link}</Col>
                        <Col><button className="linkBtn" onClick={downloadLink}/></Col>
                    </Row>

                    {/*
                    <Col className="deployQR">
                        <Row><QRCode className="QRCode" id="qr-gen" value={qrValue} /></Row>
                        <Row><Col>QR 코드</Col>
                             <Col><button className="qrBtn" onClick={downloadQR} /></Col></Row>
                    </Col>
                    */}

                    <Col className="deployQR">
                        <Row><QRCode id="qrCodeEl" value="https://github.com/dntjr41/KAKAO_Chatbot_Lab"/></Row>
                        <Row>
                            <Col>QR 코드</Col>
                            <Col><button className="qrBtn" onClick={downloadQR}></button></Col>
                        </Row>
                    </Col>


                </div>
            </Container>
            <Link to="/home"><button type="button" className="goDeployHomeBtn">홈으로 가기</button></Link>
        </div>
    )
}

export default DeploySurveyPage;