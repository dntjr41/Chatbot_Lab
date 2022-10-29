import "../css/Layout.css";

import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link, useNavigate } from "react-router-dom";
import { BsQuestionCircle, BsPersonSquare } from "react-icons/bs";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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

    const logoutModal = () => {
        confirmAlert({
          title: '로그아웃 하시겠습니까?',
          message: '계속 하시겠습니까?',
          buttons: [
            {
              label: '네',
              onClick: () => { /*
                window.Kakao.API.request({
                    url: '/v1/user/logout',*/
                    
                console.log("로그아웃 시도");
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                localStorage.removeItem('nickName');
                localStorage.removeItem('profileImage');
                localStorage.removeItem('email');
                alert("로그아웃 되었습니다.")
                navigate("/Home");}
            },
            {
              label: '아니오',
            }
          ]
        })
      }

    return (
        <div>
            <div className="header-top px-5">
                <Col className={props.color === "green" ? "header-logo-green" : "header-logo-purple"} md={0}>
                    <Link to="/home"><button className="header-logohome"></button></Link>
                </Col>

                <Col className="align-self-center" md={{ span: 3, offset: 6 }}>
                    <Stack direction="horizontal" gap={4}>
                        <Link to="/faq" className="ms-auto"><BsQuestionCircle size="32" /></Link>
                        <div className="header-login" onClick={userId === null ? login : logoutModal}>{userId === null ? "로그인" : "로그아웃"}</div>
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