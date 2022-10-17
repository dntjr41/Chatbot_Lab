import '../css/FaqPage.css';
import Header from "../components/Header";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import gif1 from "../images/faq/resultPage.gif";
import gif2 from "../images/faq/createSurvey.gif";
import gif3 from "../images/faq/questionPage.gif";
import gif4 from "../images/faq/resultPage.gif";
import gif5 from "../images/faq/responsePage.gif";

import icon1 from "../images/logo/Icon-logo-green.png";
import icon2 from "../images/logo/Icon-green.png";
import icon3 from "../images/logo/Icon-logo-purple.png";
import icon4 from "../images/logo/Icon-purple.png";
import icon5 from "../images/Logo square.png";
import icon6 from "../images/Logo for banner.png";
// FAQ 페이지
// └헤더

const FaqPage = function () {
    return (
        <div className="faqPage">
            <Header color="purple"/>

            <div className="TosMainFrame">
                <Col><h3>FAQ</h3></Col>
    
                <div className="TosSubFrame">
                    <Col className="FaQContentFrame">
                        <h2>모두의 생각에 대해 효과적으로 조사하고 결과를 받길 원하시나요?</h2><br></br>
                        <p>설문베이는 AI 분석을 기반으로한 설문조사 소프트웨어를 제공합니다!</p>
                        <Link to ="/login"><button className="FaQBtn">지금 시작하기</button></Link>
                        <br></br>
                    </Col>

                    <Col className="FaQContentFrame">
                        <h2>자동 요약이 포함된 응답 분석 및 AI 분석을 통해 정확한 정보 제공</h2><br></br>
                        <p>응답 데이터가 실시간으로 업데이트되는 차트를 확인할 수 있으며 CSV 형태로 데이터를 받아볼 수 있습니다.<br></br>또한 설문베이는 강력한 AI 분석을 통해서 한층 정확하고 의미있는 결과를 받아볼 수 있습니다.</p>
                        <img className="fit-picture" src={gif1}/>
                        <br></br>
                    </Col>

                    <Col className="FaQContentFrame">
                        <h2>문서 작성만큼 쉬운 온라인 양식 만들기</h2><br></br>
                        <p>다양한 설문조사 템플릿과 [객관식, 객관식 이미지, 드롭다운, 감정바, 날짜 및 시간, 주관식, 동영상] 등 <br></br>다양한 질문 형식을 제공해 풍성한 설문을 작성할 수 있습니다.</p>
                        <img className="fit-picture" src={gif2}/>
                        <br></br>
                    </Col>

                    <Col className="FaQContentFrame">
                        <h2>설문 기간 설정을 통한 효과적인 관리</h2><br></br>
                        <p>[제작 중, 예약 중, 배포 중, 종료] 4가지의 형태로 진행 중인 설문에 대해서 <br></br>효과적인 관리와 앞으로 진행될 설문에 대해서 관리할 수 있습니다.</p>
                        <img className="fit-picture" src={gif3}/>
                        <br></br>
                    </Col>

                    <Col className="FaQContentFrame">
                        <h2>정돈된 설문조사 및 다양한 방식으로의 배포</h2><br></br>
                        <p>다양한 맞춤 설정을 통해 설문을 정돈하여 디자인을 조정할 수 있습니다.<br></br>또한 링크, QR코드 등의 다양한 방식으로 설문을 배포할 수 있습니다.</p>
                        <img className="fit-picture" src={gif4}/>
                        <br></br>
                    </Col>

                    <Col className="FaQContentFrame">
                        <h2>어디서나 설문조사 작성 및 응답</h2><br></br>
                        <p>설문베이는 반응형 웹으로써 이동 중에도 액세스하여 양식을 만들고 수정할 수 있습니다.<br></br>피설문자도 다양한 형태로 어디서나 설문조사에 응답할 수 있습니다.</p>
                        <img className="fit-picture" src={gif5}/>
                        <br></br>
                    </Col>

                    <Col className="FaQContentFrame">
                        <h2>설문베이의 로고 및 배너</h2><br></br>
                            <p><img className="surveyIconImg" src={icon1}/>&nbsp;
                                <img className="surveyIconImg" src={icon2}/>
                            - 설문베이 아이콘 (Green)</p>
                            <p><img className="surveyIconImg" src={icon3}/>&nbsp;
                                <img className="surveyIconImg" src={icon4}/>            
                            - 설문베이 아이콘 (Purple)</p>
                            <p><img className="surveyIconImg" src={icon5}/>- 설문베이 메인 로고</p>
                            <p><img className="surveyIconImg" src={icon6}/>- 설문베이 메인 배너</p>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default FaqPage;
