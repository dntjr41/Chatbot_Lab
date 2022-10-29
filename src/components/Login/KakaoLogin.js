import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../../css/LoginPage.css'

const KakaoLogin = () => {
  const REST_API_KEY = "bac376255674f663efac55e7ab39fba9"; 
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const code = new URL(window.location.href).searchParams.get("code");// 인가코드

/*
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios
          .get(
            //`http://localhost:8080/user/kakao/callback?code=${code}`
          )

          .then((response) => {
            console.log("응답 확인", response);
            const token = response.headers.authorization;
            window.localStorage.setItem("token", token);//토큰 저장
          });
        console.log(res);
      } catch (e) {
        console.error(e);
      }

      const token = window.localStorage.getItem("token");//토큰 불러오기

      try {
        const res = await axios

          .get(
            //"http://localhost:8080/user/kakao/callback?code=${code}",
            {
              headers: {
                Authorization: token,
                request: token,
              },
            }
          )
          //유저 정보
          .then((data) => {
            window.localStorage.setItem("profile", data);
            console.log(data);

            if (data) {
              navigate("/Home");//유저 정보 데이터 성공 시 mypage로 이동
            }
          });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
*/
  return (
    <>
      <div>
        <Button className="kakaoLoginBtn" href={KAKAO_AUTH_URI} ></Button>
      </div>
    </>
  );
};

export default KakaoLogin;