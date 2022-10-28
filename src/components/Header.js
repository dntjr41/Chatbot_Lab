import "../css/Layout.css";

import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link, useNavigate } from "react-router-dom";
import { BsQuestionCircle, BsPersonSquare } from "react-icons/bs";

// 헤더 컴포넌트
// └헤더 상단바
// └헤더 하단바(페이지별에 따라 다른 색상구성)

const Header = function (props) {
    const navigate = useNavigate();
    const userId = localStorage.getItem("id");

    const login = () => {
        console.log("로그인 시도");
        navigate("/login");
    };

    const logout = () => {
        console.log("로그아웃 시도");
        // 로그아웃 처리 필요
    };
    return (
        <div>
            <div className="header-top px-5">
                <Col className={props.color === "green" ? "header-logo-green" : "header-logo-purple"} md={0}>
                    <Link to="/home"><button className="header-logohome"></button></Link>
                </Col>

                <Col className="align-self-center" md={{ span: 3, offset: 6 }}>
                    <Stack direction="horizontal" gap={4}>
                        <Link to="/faq" className="ms-auto"><BsQuestionCircle size="32" /></Link>
                        <div className="header-login" onClick={userId === null ? login : logout}>{userId === null ? "로그인" : "로그아웃"}</div>
                        <Link to="/myinfo"><BsPersonSquare size="32" /></Link>
                    </Stack>
                </Col>


            </div>
            { /* 

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
            */ }

        </div >
    )
}

export default Header;