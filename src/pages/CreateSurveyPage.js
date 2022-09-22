import '../css/CreateSurveyPage.css'

// 새 설문 작성 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명 입력
//   └질문 카드 컴포넌트 리스트
//     └질문 카드 컴포넌트(유형별 다른 컴포넌트)
//   └질문 추가
//     └질문 추가 버튼, 질문 유형 리스트 팝업
//   └저장 버튼

const CreateSurveyPage = function () {
    return (
        <div className="createSurveyPage">
            <button type="button" className="logoBtn">logo</button>
            <button type="button" className="loginBtn">login</button>
            <button type="button" className="myBtn">my</button>
            <button type="button" className="homeBtn">home</button>

            <input type="text" className="surveyTitle" />
            <input type="text" className="surveyContent" />

            <input type="text" className="questionTitle" />
            <input type="text" className="answer1" />
            <input type="text" className="answer2" />

            <input type="checkbox" className="checkOption1" />
            <input type="checkbox" className="checkOption2" />
            <input type="checkbox" className="checkOption3" />

            <button type="button" className="submitBtn">저장</button>
        </div>
    )
}

export default CreateSurveyPage;