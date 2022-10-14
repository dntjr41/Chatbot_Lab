import '../css/LoginPage.css'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KakaoLogin from "../components/Login/KakaoLogin";
import NaverLogin from "../components/Login/NaverLogin";
import GoogleLogin from "../components/Login/GoogleLogin";
import FaceBookLogin from "../components/Login/FaceBookLogin";

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
        <div >
            <Header/>
            <KakaoLogin />
            <NaverLogin/>
            <FaceBookLogin/>
            <GoogleLogin/>
            <p>이용약관 및 개인정보처리방침 동의</p>
            <p>
                회원가입 하시면 본 서비스의 
                <Link to="/tos" >이용약관 </Link>
                및 
                <Link to="/privacy-policy" > 개인정보처리방침</Link>
                에 동의하는 것입니다.

            </p>

            
           
        </div>
     
    )
}

export default LoginPage;