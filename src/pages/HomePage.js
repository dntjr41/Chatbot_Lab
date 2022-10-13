import '../css/HomePage.css'
import Slide from '../components/Home/Silde';
import Header from "../components/Header";
import Footer from "../components/Footer";

// 홈 페이지
// └헤더
// └슬라이딩 배너
//   └1 슬라이드 - 홍보
//   └2 슬라이드 - 튜토리얼 
// └푸터
//   └이용약관, 고객센터, 개인정보방침, FAQ 링크
//   └제작자 정보

const HomePage = function () {


    return (
        <div>
            <Header/>
            <Slide/>
            <Footer/>
            
        </div>
    )
}

export default HomePage;