import '../css/MyInfoPage.css'

// 내 정보 페이지
// └헤더
// └(연동된 계정의)프로필 사진 
// └연동 계정 알림
// └나의 설문
//   └설문지 
// └탈퇴하기 버튼


const MyInfoPage = function () {

    const Myquestionaries = () => {
        alert("Message : 해당 설문지가 존재하는 설문 제작함으로 이동시킴");
    }

    const secession = () => {
        alert("Message : 로그인 유무 확인 후 로그인 되어있다면 해당 계정의 연동을 해지시킴");
    }

    return (
        <div className="myInfoPage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn_home">login</a>
            <a href="/myInfo" className="myBtn_home">my</a>
            <a href="/home" className="homeBtn">home</a>

            <button type="button" className="questionariesBtn" onClick={Myquestionaries}>Questionaries 1</button>
            <button type="button" className="secessionBtn" onClick={secession}>탈퇴하기</button>

        </div>
    )
}

export default MyInfoPage;