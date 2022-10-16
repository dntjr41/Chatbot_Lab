import "../css/Layout.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import { BsQuestionCircle, BsPersonSquare, BsHouseDoor } from "react-icons/bs";
import { Container } from "react-bootstrap";

// 헤더 컴포넌트
// └헤더 상단바
// └헤더 하단바(페이지별에 따라 다른 색상구성)

const Header = function (props) {
    return (
        <div>
            <div className="header-top px-5">
                <Col className={props.color === "green" ? "header-logo-green" : "header-logo-purple"} md={0}>
                    <Link to="/home"></Link>
                </Col>

                <Col className="align-self-center" md={{ span: 3, offset: 6 }}>
                    <Stack direction="horizontal" gap={4}>
                        <Link to="/faq" className="ms-auto"><BsQuestionCircle size="32" /></Link>
                        <Link to="/login" className="header-login">로그인</Link>
                        <Link to="/myinfo"><BsPersonSquare size="32" /></Link>
                    </Stack>
                </Col>


            </div>
            <div className={props.color === "green" ? "header-bottom px-5 primary-color-grad" : "header-bottom px-5 secondary-color-grad"}>
                <Col className="header-homelink" md={3}>
                    <Link to="/home">
                        <Stack direction="horizontal" gap={3}>
                            <BsHouseDoor size="32" />
                            <div>홈으로 가기</div>
                        </Stack>
                    </Link>
                </Col>
            </div>
        </div >
    )
}

export default Header;