import '../css/FinishResponsePage.css'

// 피설문자의 응답 완료 페이지
// └헤더 (조금 다름)
// └응답완료 컴포넌트
//   └감사인사, 수정링크, 메인페이지 링크 버튼

const FinishResponsePage = function () {
    return (
        <div className="finishResponse">
            <button type="button" className="logoBtn">logo</button>
            <button type="button" className="exitPageBtn">exit</button>

            <button type="button" className="editResponseBtn">수정하기</button>
            <button type="button" className="gotoHomeBtn">알아보기</button>
        </div>
    )
}

export default FinishResponsePage;