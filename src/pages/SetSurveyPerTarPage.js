import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import Header from "../components/Header";
import '../css/SetSurveyPerTarPage.css';

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

    // 시작일 설정 버튼
    const startBtn = () => {
        alert("시작일 설정 버튼");
    }

    // 시작 시간 설정 드롭다운
    const startTime = () => {
        alert("시작 시간 설정 드롭다운");
    }

    // 종료일 설정 버튼
    const endBtn = () => {
        alert("종료일 설정 버튼");
    }

    // 종료 시간 설정 드롭다운
    const endTime = () => {
        alert("종료 시간 설정 드롭다운");
    }

    // 내 그룹 설정 버튼
    const myGroupBtn = () => {
        alert("내 그룹 설정 버튼");
    }

    // 그룹 추가 설정 버튼
    const addGroupBtn = () => {
        alert("그룹 추가 설정 버튼");
    }

    // 설문 대상 선택 버튼
    const targetBtn = () => {
        alert("설문 대상 선택 버튼");
    }

    // 대상 추가 선택 버튼
    const addTargetBtn = () => {
        alert("대상 추가 선택 버튼");
    }

    // 설문 공유 (Deploy Survey) 페이지로 이동
    const gotoDeploySurvey = () => {

    }

    return (
        <div className="setSurveyPerTarPage">
            <Header />

            <div className="setPeriod">
                <output type="date" className="startDate"></output>
                {/* <input type="dropdown" className="startTime" onClick={startTime}></input> */}
                <output type="date" className="endDate"></output>
                {/* 
                <input type="dropdown" className="endTime" onClick={endTime}></input>
                <input type="dropdown" className="setGroup">그룹 설정</input>

                <input type="date" className="calender"></input>
                */}

                {/* 
                <input type="dropdown" className="yearDrop"></input>
                <input type="dropdown" className="monthDrop"></input>
                */}
                <button type="button" className="startBtn" onClick={startBtn}>시작일</button>
                <button type="button" className="endBtn" onClick={endBtn}>종료일</button>
            </div>

            <div className="setTarget">
                <button type="button" className="myGroupBtn" onClick={myGroupBtn}>내 그룹</button>
                <button type="button" className="addGroupBtn" onClick={addGroupBtn}>그룹 추가</button>
                {/* <input type="datalist" className="myGroupList"></input> */}

                <button type="button" className="targetBtn" onClick={targetBtn}>설문 대상</button>
                <button type="button" className="addTargetBtn" onClick={addTargetBtn}>대상 추가</button>
                {/* <input type="datalist" className="targetList"></input> */}
            </div>

            <Link to="/deploy-survey"><button type="button" className="deployBtn" onClick={gotoDeploySurvey}>2. 설문 공유하기</button></Link>
        </div>
    )
}

export default SetSurveyPerTarPage;