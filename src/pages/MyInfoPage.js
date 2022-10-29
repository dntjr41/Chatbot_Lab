import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Card, Container, Row, Col } from "reactstrap";
import { Link, useNavigate, useHistory } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import qs from "qs";

import '../css/MyInfoPage.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// 내 정보 페이지
// └헤더
// └(연동된 계정의)프로필 사진 
// └연동 계정 알림
// └나의 설문
//   └설문지 
// └탈퇴하기 버튼


const REST_API_KEY = "bac376255674f663efac55e7ab39fba9";
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
const CLIENT_SECRET = "DEnIz7VmtjOrxBNgxVroEl0uivOs3HxE";
const code = new URL(window.location.href).searchParams.get("code");




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

  const userId = localStorage.getItem("id");
  const navigate = useNavigate();
  
  const useModal = () => {
    confirmAlert({
      title: '로그인 된 소셜 계정과 설문베이에 대한 연동을 해제하시겠습니까?',
      message: '계속 하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => { window.Kakao.API.request({
            url: '/v1/user/unlink',
            success: function(response) {
              localStorage.removeItem('token');
              localStorage.removeItem('id');
              localStorage.removeItem('nickName');
              localStorage.removeItem('profileImage');
              localStorage.removeItem('email');
      
              console.log(response);
              
              navigate("/Home");
            },
            fail: function(error) {
              console.log(error);
            },
          });}
        },
        {
          label: '아니오',
        }
      ]
    })
  }

  useEffect(() => {
    console.log(userId);
    if (userId === null) {
        alert("로그인이 필요합니다");
        navigate("/login");
    }});
    
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
                          onClick={useModal}
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