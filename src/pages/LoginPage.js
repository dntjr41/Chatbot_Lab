import '../css/LoginPage.css'
import { Link } from "react-router-dom";

// 로그인 페이지
// └헤더
// └로그인 버튼
//   └1 구글 로그인
//   └2 페이스북 로그인
//   └3 카카오 로그인
//   └4 네이버 로그인
// └로그인 약관 알림말
//   └1 이용약관 링크
//   └2 개인정보 처리방침 링크


const LoginPage = function () {
    return (
        <div className="loginPage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn">login</a>
            <a href="/myInfo" className="myBtn">my</a>
            <a href="/home" className="homeBtn">home</a>

            <button type="button" className="googleLoginBtn">Continue with Google</button>
            <button type="button" className="facebookLoginBtn">Continue with Facebook</button>
            <button type="button" className="kakaoLoginBtn">Continue with KaKao</button>
            <button type="button" className="naverLoginBtn">Continue with Naver</button>

            <Link to="/tos" className="tosLink_login" >이용약관</Link>
            <Link to="/privacy-policy" className="privacyLink_login" >개인정보처리방침</Link>
           
             
        </div>
    )
}

export default LoginPage;