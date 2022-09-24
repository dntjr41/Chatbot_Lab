import '../css/FinishResponsePage.css'

// 피설문자의 응답 완료 페이지
// └헤더 (조금 다름)
// └응답완료 컴포넌트
//   └감사인사, 수정링크, 메인페이지 링크 버튼

const FinishResponsePage = function () {
    // 홈페이지로 이동
    const gotoHome = () => {
        alert("홈 페이지로 이동");
    }

    // 설문창 닫기
    const closeWindow = () => {
        alert("창 닫기");
    }

    // 이전 페이지로 돌아가서 응닫 수정하기
    const backToResponse = () => {
        alert("이전 페이지로 돌아가기");
    }

    return (
        <div className="finishResponse">
            <button type="button" className="logoBtn" onClick={gotoHome}>logo</button>
            <button type="button" className="exitPageBtn" onClick={closeWindow}>exit</button>

            <button type="button" className="editResponseBtn" onClick={backToResponse}>수정하기</button>
            <button type="button" className="gotoHomeBtn" onClick={gotoHome}>알아보기</button>
        </div>
    )
}

export default FinishResponsePage;