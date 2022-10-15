import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
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
        console.log(response);
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
        console.log(response);
      },
      fail: function(error) {
        console.log(error);
      },
    });
  } 
  

const MyInfoPage = function () {

    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();

    const getProfile = async () => {
        try {
          // Kakao SDK API를 이용해 사용자 정보 획득
          let data = await window.Kakao.API.request({
            url: "/v2/user/me",
          });
          // 사용자 정보 변수에 저장
          setUserId(data.id);
          setNickName(data.properties.nickname);
          setProfileImage(data.properties.profile_image);
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        getProfile();
      }, []);
      return (
        <div className="UserInfo">
          <Header color="green"/>
          <img src={profileImage}></img>
         
          <div className="user_info">{nickName}님의 마이페이지</div>
          <div className="user_info">회원 ID : {user_id}</div>
          <Button type="button" variant="danger" className="secessionBtn" onClick={kakaoUnlink}>탈퇴하기</Button>       
        </div>
      );

};


export default MyInfoPage;