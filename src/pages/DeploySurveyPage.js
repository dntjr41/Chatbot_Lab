import React from 'react';
import '../css/DeploySurveyPage.css'

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
    return (
        <div className="deploySurveyPage">
            <div className="header">            
                <button type="button" className="logoBtn">logo</button>
                <button type="button" className="loginBtn">login</button>
                <button type="button" className="myBtn">my</button>
                <button type="button" className="homeBtn">home</button>
            </div>

            <div className="deploySurvey">
                <div className="deployInfo">
                    <output type="text" className="surveyTitle"></output>
                    <output type="text" className="surveyPeriod"></output>
                    <output type="text" className="surveyTarget"></output>
                </div>
                
                <div>
                    <link className="deployLink" rel=""></link>
                    <button type="button" className="linkBtn">link</button>

                    <output type="img" className="deployQR" src=""></output>
                    <button type="button" className="qrBtn">download</button>
                </div>

                <button type="button" className="goHomeBtn">홈으로 가기</button>
            </div>
        </div>
    )
}

export default DeploySurveyPage;