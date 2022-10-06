import "../css/Layout.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import { BsQuestionCircle, BsPersonSquare, BsHouseDoor } from "react-icons/bs";

// 헤더 컴포넌트
// └헤더 상단바
// └헤더 하단바(페이지별에 따라 다른 색상구성)

const Header = function () {
    return (
        <div>
            <Row className="header-top px-5">
                <Col className="header-logo" md={3}>
                    <Link to="/home"></Link>
                </Col>
                <Col className="align-self-center" md={{ span: 3, offset: 6 }}>
                    <Stack direction="horizontal" gap={4}>
                        <Link to="/faq" className="ms-auto"><BsQuestionCircle size="32" /></Link>
                        <Link to="/login" className="header-login">로그인</Link>
                        <Link to="/myinfo"><BsPersonSquare size="32" /></Link>
                    </Stack>
                </Col>


            </Row>
            {/* 여기 부분은 페이지에 따라서 배경색상과 글자 색을 바꿔줘야함 */}
            <Row className="header-bottom primary-color-grad px-5">
                <Col className="header-homelink" md={3}>
                    <Link to="/home">
                        <Stack direction="horizontal" gap={3}>
                            <BsHouseDoor size="32" />
                            <div>홈으로 가기</div>
                        </Stack>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Header;