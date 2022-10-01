import "../css/Layout.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// 헤더 컴포넌트
// └헤더 상단바
// └헤더 하단바(페이지별에 따라 다른 색상구성)

const Header = function () {
    const gotoHome = () => {
        alert("홈으로");
    }
    return (
        <div>
            <Row className="header-top px-5">
                <Col className="col-md-4 logo-image" onClick={gotoHome}></Col>
                <Col className="col-md-3 offset-md-5">menu</Col>
            </Row>
            <Row className="header-bottom px-5">
                <Col>홈으로 가기</Col>
            </Row>
        </div>
    )
}

export default Header;