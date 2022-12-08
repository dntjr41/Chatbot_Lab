import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const REST_API_KEY = "bac376255674f663efac55e7ab39fba9";
    const REDIRECT_URI = process.env.REACT_APP_API_URL+":"+process.env.REACT_APP_PORT+"/auth/kakao/callback";
    const CLIENT_SECRET = "DEnIz7VmtjOrxBNgxVroEl0uivOs3HxE";
    const code = new URL(window.location.href).searchParams.get("code");
    let navigate = useNavigate();

    const [user_id, setUserId] = useState();
    const [nick, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const [mail, setEmail] = useState();


    const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    axios.defaults.withCredentials = false;
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      localStorage.setItem("token", res.data.access_token);


      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
      setEmail(data.kakao_account.email);

      localStorage.setItem('id', data.id);
      localStorage.setItem('nickName', data.properties.nickname);
      localStorage.setItem('profileImage', data.properties.profile_image);
      localStorage.setItem('email', data.kakao_account.email);

      axios
      .post(process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT+"/api/user", {
        userId: data.id,
        nickName: data.properties.nickname,
        profileImg: data.properties.profile_image,
        eMail: data.kakao_account.email,
      });
      console.log("hello");
      
      navigate("/Home");
    } catch (err) {
      console.log(err);
    }
  };

 
  useEffect(() => {
    getToken();
  }, []);
  return null;
};


export default Auth;



  