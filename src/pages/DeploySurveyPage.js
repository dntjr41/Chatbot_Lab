import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import Header from "../components/Header";
import '../css/DeploySurveyPage.css';

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

    // 홈페이지로 이동
    const gotoHome = () => {
        
    }

    // 링크 복사하기
    const downloadLink = () => {
        alert("링크 복사하기");
    }

    // QR코드 다운로드하기
    const downloadQR = () => {
        alert("QR코드 다운로드하기");
    }

    return (
        <div className="deploySurveyPage">
            <Header />

            <div className="deploySurvey">
                <div className="deployInfo">
                    <output type="text" className="surveyTitle"></output>
                    <output type="text" className="surveyPeriod"></output>
                    <output type="text" className="surveyTarget"></output>
                </div>
                
                <div>
                    <link className="deployLink" rel=""></link>
                    <button type="button" className="linkBtn" onClick={downloadLink}>link</button>

                    <output type="img" className="deployQR" src=""></output>
                    <button type="button" className="qrBtn" onClick={downloadQR}>download</button>
                </div>

                <Link to="/home"><button type="button" className="goHomeBtn" onClick={gotoHome}>홈으로 가기</button></Link>
            </div>
        </div>
    )
}

export default DeploySurveyPage;