import '../css/SurveyResultPage.css'

// 결과 통계 페이지
// └헤더
// └결과 통계 컴포넌트
//   └통계, 분석보기 버튼
//   └설문 제목, 설문 기간, 설문 설명
//   └응답별 통계 리스트
//     └응답별 통계(유형별 다른 컴포넌트)
//   └다운로드 버튼

const SurveyResult = function () {
    // 홈페이지로 이동
    const gotoHome = () => {
        alert("홈 페이지로 이동");
    }

    // 로그인 페이지로 이동
    const gotoLogin = () => {
        alert("로그인 페이지로 이동")
    }

    // 마이 페이지로 이동
    const gotoMyPage = () => {
        alert("마이페이지로 이동");
    }

    // 설문 통계로 보여주기
    const showStatistic = () => {
        alert("설문 통계 보여주기");
    }

    // 설문 분석으로 보여주기
    const showAnalysis = () => {
        alert("설문 분석 보여주기");
    }

    // 설문 통계 다운로드
    const downloadResult = () => {
        alert("설문 결과 다운로드");
    }

    return (
        <div className="surveyResult">
            <button type="button" className="logoBtn" onClick={gotoHome}>logo</button>
            <button type="button" className="loginBtn" onClick={gotoLogin}>login</button>
            <button type="button" className="myBtn" onClick={gotoMyPage}>my</button>
            <button type="button" className="homeBtn" onClick={gotoHome}>home</button>

            <button type="button" className="showStatisticBtn" onClick={showStatistic}>통계</button>
            <button type="button" className="showAnalysisBtn" onClick={showAnalysis}>분석</button>
            <button type="button" className="downloadResultBtn" onClick={downloadResult}>다운로드</button>
        </div>
    )
}

export default SurveyResult;