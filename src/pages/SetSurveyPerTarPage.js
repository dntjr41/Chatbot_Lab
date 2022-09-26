import React from 'react';
import '../css/SetSurveyPerTarPage.css'

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

const SetSurveyPerTarPage = function () {
    return (
        <div className="setSurveyPerTarPage">
            <div className="header">            
                <button type="button" className="logoBtn">logo</button>
                <button type="button" className="questionBtn">?</button>
                <button type="button" className="loginBtn">login</button>
                <button type="button" className="myBtn">my</button>
                <button type="button" className="homeBtn">home</button>
            </div>
            <div className="setPeriod">
                <output type="date" className="startDate"></output>
                {/* <input type="dropdown" className="startTime"></input> */}
                <output type="date" className="endDate"></output>
                {/* 
                <input type="dropdown" className="endTime"></input>
                <input type="dropdown" className="setGroup">그룹 설정</input>

                <input type="date" className="calender"></input>
                */}

                {/* 
                <input type="dropdown" className="yearDrop"></input>
                <input type="dropdown" className="monthDrop"></input>
                */}
                <button type="button" className="startBtn">시작일</button>
                <button type="button" className="endBtn">종료일</button>
            </div>

            <div className="setTarget">
                <button type="button" className="myGroupBtn">내 그룹</button>
                <button type="button" className="addGroupBtn">그룹 추가</button>
                {/* <input type="datalist" className="myGroupList"></input> */}

                <button type="button" className="targetBtn">설문 대상</button>
                <button type="button" className="addTargetBtn">대상 추가</button>

                {/* <input type="datalist" className="targetList"></input> */}
            </div>

            <button type="button" className="deployBtn">2. 설문 공유하기</button>
        </div>
    )
}

export default SetSurveyPerTarPage;