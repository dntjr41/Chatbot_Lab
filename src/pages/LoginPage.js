import '../css/LoginPage.css'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import KakaoLogin from "../components/Login/KakaoLogin";

import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components


class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
            </div>
            <Header color="green" />
            <Container className="pt-lg-7 py-5">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-2">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>소셜 로그인을 통해 간편하게 SurMoonVey와 함께하세요!</small>
                      </div>
                      <div className="btn-wrapper text-center">

                        {/*<GoogleLogin/>*/}
                        {/*<FaceBookLogin/>*/}
                        {/*<NaverLogin/>*/}
                        <KakaoLogin />

                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5" >
                      <div className="text-center text-white">

                        <p>이용약관 및 개인정보처리방침 동의</p>
                        <small>
                          회원가입 하시면 본 서비스의
                          <Link to="/tos" style={{ textDecoration: 'none' }} >이용약관 </Link>
                          및
                          <Link to="/privacy-policy" style={{ textDecoration: 'none' }} > 개인정보처리방침</Link>
                          에 동의하는 것입니다.

                        </small>
                      </div>
                    </CardBody>
                  </Card>

                </Col>
              </Row>
            </Container>

          </section>
        </main>
      </>
    );
  }
}

export default Login;