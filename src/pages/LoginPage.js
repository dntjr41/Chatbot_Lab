import '../css/LoginPage.css'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import KakaoLogin from "../components/Login/KakaoLogin";

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

    const googleLogin = () => {
        alert("Message : 구글 계정과의 연동 유무 확인. 만약 이미 연동되었을 시 로그인 진행, 미연동 계정일 시 연동을 설정하는 창으로 넘김.");
    }

    const facebookLogin = () => {
        alert("Message : 페이스북 계정과의 연동 유무 확인. 만약 이미 연동되었을 시 로그인 진행, 미연동 계정일 시 연동을 설정하는 창으로 넘김.");
    }


    const naverLogin = () => {
        alert("Message : 네이버 계정과의 연동 유무 확인. 만약 이미 연동되었을 시 로그인 진행, 미연동 계정일 시 연동을 설정하는 창으로 넘김.");
    }

    return (
        <div >
            <Header/>
            <KakaoLogin />
            <button type="button" className="googleLoginBtn"  onClick={googleLogin}>Continue with Google</button>
            <button type="button" className="facebookLoginBtn" onClick={facebookLogin}>Continue with Facebook</button>
            <button type="button" className="naverLoginBtn" onClick={naverLogin}>Continue with Naver</button>
            <p>이용약관 및 개인정보처리방침 동의</p>
            <p>
                회원가입 하시면 본 서비스의 
                <Link to="/tos" >이용약관</Link>
                및
                <Link to="/privacy-policy" >개인정보처리방침</Link>
                에 동의하는 것입니다.

            </p>
            
            
           
             
        </div>
    )
}

export default LoginPage;