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
    return (
        <div className="finishResponse">
            <button type="button" className="logoBtn">logo</button>
            <button type="button" className="loginBtn">login</button>
            <button type="button" className="myBtn">my</button>
            <button type="button" className="homeBtn">home</button>

            <button type="button" className="showStatisticBtn">통계</button>
            <button type="button" className="showAnalysisBtn">분석</button>
            <button type="button" className="downloadResultBtn">다운로드</button>
        </div>
    )
}

export default SurveyResult;