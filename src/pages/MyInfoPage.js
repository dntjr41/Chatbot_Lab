import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button } from 'react-bootstrap';
import Grid from "../components/elements/Grid";
import Box from "@mui/material/Box";

import styled from "@emotion/styled";
import { StyledTab, StyledTabs } from "../components/elements/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";


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

const MyInfoPage = function () {


  const REST_API_KEY = "bac376255674f663efac55e7ab39fba9";
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/unlink";
  // const CLIENT_SECRET = "DEnIz7VmtjOrxBNgxVroEl0uivOs3HxE";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // const code = new URL(window.location.href).searchParams.get("code");

  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

  const [TabValue, setTabValue] = React.useState("1");
  const TabhandleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const useModal = () => {
    confirmAlert({
      title: '로그인 된 소셜 계정과 설문베이에 대한 연동을 해제하시겠습니까?',
      message: '계속 하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => { window.location.assign(KAKAO_AUTH_URI) }
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
    }
  });

  return (
    <>
      <Header />
      <MainContainer>
        <UserContainer>
          <Title
            F_size="28px"
            margin_bottom="16px"
            style={{ fontFamily: 'IBM Plex Sans KR' }}
          >
            <h3>
              <span>{localStorage.getItem('nickName')}</span> 님의 마이페이지
            </h3>
            <h5>
              환영합니다
            </h5>
          </Title>
          <UserInfoContainer>
            <UserDataContainer>
              <img style={{
                borderRadius: "50%"
              }} src={localStorage.getItem('profileImage')} />
              <UserNameContainer style={{ marginLeft: "40px", marginTop: "32x" }}>
                <div
                  style={{
                    width: "400px",
                    height: "36px",
                    backgroundColor: "#D3D3D3",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    marginTop: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <h3 style={{ margin: "auto", fontSize: "16px" }}>
                    나의 ID  ({localStorage.getItem('id')})
                  </h3>
                </div>
                <div
                  style={{
                    width: "400px",
                    height: "36px",
                    backgroundColor: "#FEE500",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    marginTop: "12px",
                    marginBottom: "56px",
                  }}
                >
                  <h3 style={{ margin: "auto", fontSize: "16px" }}>
                    카카오 계정과 연동 됨 ({localStorage.getItem('email')})
                  </h3>
                </div>
                <CreateButton
                  onClick={() => { navigate("/questionnaires") }}
                >
                  지금 설문 만들기
                </CreateButton>
              </UserNameContainer>
            </UserDataContainer>
            <InviteContainer>
              <div
                style={{
                  width: "200px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  marginBottom: "12px",
                }}
              >
              </div>


            </InviteContainer>
          </UserInfoContainer>

        </UserContainer>

        <Box sx={{ width: "100%", typography: "body1" }}>
          <div class="col text-center">
            <Button
              variant="danger"
              className="mr-4"
              color="info"
              onClick={useModal}
              size="large"
            >
              연동 해제하기
            </Button>
          </div>
          <TabContext value={TabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "white", mb: 4 }}>
              <StyledTabs
                onChange={TabhandleChange}
                aria-label="lab API tabs"
                TabIndicatorProps={{
                  children: <span className="MuiTabs-indicatorSpan" />,
                }}
              >
                <StyledTab
                  label="나의 설문자 그룹"
                  value="1"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "IBM Plex Sans KR",
                  }}
                />
                <StyledTab
                  label="내가 만든 설문"
                  value="2"
                  sx={{ fontWeight: "bold", fontFamily: "IBM Plex Sans KR" }}
                />
              </StyledTabs>
            </Box>
            <TabPanel value="1" sx={{ p: "0px" }}>
              <Grid margin="auto" position="relative">

              </Grid>
            </TabPanel>
            <TabPanel value="2" sx={{ p: "0px" }}>
              <div className="text-end">
                <Link to="/questionnaires" className="link_info" style={{ textDecoration: 'none', fontSize: '12pt',
              fontFamily: "IBM Plex Sans KR" }} >바로가기 </Link>
              </div>
              <Grid
                padding="40px"
                position="relative"
                width="100%"
                heignt="823px"
                B_radius="20px"
                Border="2px solid #9400D3"
              >
                <Grid is_flex margin_top="44px" B_bottom="1px solid #C4C4C4">

                </Grid>

              </Grid>
              <Grid></Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </MainContainer>
    </>
  );
};
const MainContainer = styled.div`
  background-color: #F0EBF8;
  width: 80%;
  border: 1px solid #F0EBF8;
  border-radius: 30px;
  margin-top: 120px;
  margin-bottom: 100px;
  transform : translate(10%, 0%);
`;

const UserContainer = styled.div`
  width: 1200px;
  height: 320px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 120px;
`;
const UserInfoContainer = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const UserDataContainer = styled.div`
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: row;
`;
const UserNameContainer = styled.div`
  width: 440px;
  height: 176px;
`;
const InviteContainer = styled.div`
  width: 252px;
  height: 88px;
  margin-top: 76px;
`;
const CreateButton = styled.button`
  display: block;
  /* margin: auto; */
  width: 160px;
  height: 40px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 8px;
  border: solid 2px purple;
  background-color: white;
  font-size: 16px;
  color: purple;
  font-weight: bold;
  margin-right: 16px;
  /* font-weight: bold; */
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    background-color: #D8BFD8;
    color: white;
  }
`;
const Title = styled.div`
  h3 {
    font-size: 32px;
    font-family: "IBM Plex Sans KR";
  }
  h5 {
    font-size: 16px;
    font-family: "GmarketSansLight";
  }
  span {
    font-size: 32px;
    font-family: "GmarketSansMedium";
  }
`;

export default MyInfoPage;