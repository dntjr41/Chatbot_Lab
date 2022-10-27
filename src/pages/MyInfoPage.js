import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Card, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import '../css/MyInfoPage.css'

// 내 정보 페이지
// └헤더
// └(연동된 계정의)프로필 사진 
// └연동 계정 알림
// └나의 설문
//   └설문지 
// └탈퇴하기 버튼

const kakaoUnlink = () => {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('nickName');
        localStorage.removeItem('profileImage');
        localStorage.removeItem('email');

        console.log(response);

        document.location.href('/Home');
      },
      fail: function(error) {
        console.log(error);
      },
    });
  } 

  const kakaoLogout = () => {
    window.Kakao.API.request({
      url: '/v1/user/logout',
      success: function(response) {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('nickName');
        localStorage.removeItem('profileImage');
        localStorage.removeItem('email');
        
        console.log(response);

        document.location.href('/Home');
      },
      fail: function(error) {
        console.log(error);
      },
    });
  } 
  

const MyInfoPage = function () {

  
      return (
        <div className="UserInfo">
          <Header color="green"/>
          <section className="section-profile-cover section-shaped my-0 ">
            <div className="shape shape-style-1 shape-default alpha-4">
            </div>
       
          </section>
          <section className="section">
            <Container className="pt-lg-7 py-5">
              <Card className="card-profile shadow mt--300 ">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-3" lg="1">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={localStorage.getItem('profileImage')}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-center align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">

                        <Button
                          variant="danger"
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={kakaoUnlink}
                          size="sm"
                        >
                          연동 해제하기
                        </Button>
                        {/*
                        <Button
                          variant="danger"
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={kakaoLogout}
                          size="sm"
                        >
                          로그아웃(테스트)
                        </Button>
                        */}
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                      <div className="user_info">{localStorage.getItem('nickName')}님의 마이페이지</div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-left">
                  <div className="user_info">회원 ID : {localStorage.getItem('id')}</div>
                  <div className="user_info">연동된 계정 : {localStorage.getItem('email')} / Kakao</div>
                  </div>

              
                  <div className="mt-5 py-5 border-top">
                  <div className="text-end">
                        <Link to="/questionnaires" className="link_info" style={{ textDecoration: 'none'}} >바로가기 </Link>
                        </div>
                    <Row className="justify-content-right">
                      <Col lg="9">
                        <p className="user_info">나의 설문</p>
            
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
    
        
         
          
         
            
        </div>
      );

};


export default MyInfoPage;