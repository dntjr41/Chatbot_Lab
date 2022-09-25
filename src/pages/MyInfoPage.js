import '../css/MyInfoPage.css'

// 내 정보 페이지
// └헤더
// └(연동된 계정의)프로필 사진 
// └연동 계정 알림
// └나의 설문
//   └설문지 
// └탈퇴하기 버튼


const MyInfoPage = function () {
    return (
        <div className="myInfoPage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn">login</a>
            <a href="/myInfo" className="myBtn">my</a>
            <a href="/home" className="homeBtn">home</a>

            <button type="button" className="questionariesBtn">Questionaries 1</button>
            <button type="button" className="secessionBtn">탈퇴하기</button>

        </div>
    )
}

export default MyInfoPage;