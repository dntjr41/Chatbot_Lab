import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Grid as MuiGrid,
} from "@mui/material";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

//import { p } from "../elements";
import MainLogo from "../images/home/mainlogo.png";
import Intro from "../images/home/intro.png";

import Advantages1 from "../images/home/advantages1.png";
import Advantages2 from "../images/home/advantages2.png";
import Advantages3 from "../images/home/advantages3.png";
import Advantages4 from "../images/home/advantages4.png";

import ScreenImg from "../images/home/screen.png";
import Wifi from "../images/home/wifi.png";
import Summary from "../images/home/summary.png";

import useScrollFadeIn from "../components/Scroll/useScrollFadeIn";
import useWindowSize from "../components/Scroll/useWindowSize";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToQuestion = () => {
    navigate("/questionnaires");
  };

  const goToFaq = () => {
    navigate("/faq");
  };


  // ** 모바일
  const size = useWindowSize();
  const { width, height } = size;



  // ** 스크롤 FadeIn
  const animatedItem = useScrollFadeIn("up", 2, 0);
  const animatedRoom = useScrollFadeIn("up", 4, 0);
  const animatedStoryTitle = useScrollFadeIn("up", 2, 0);
  const animatedStory = useScrollFadeIn("up", 4, 0);
  const animatedService = useScrollFadeIn("up", 4, 0);
  const animatedAboutTitle = useScrollFadeIn("up", 2, 0);
  const animatedHowToTitle = useScrollFadeIn("up", 2, 0);
  const animatedWhatIs = useScrollFadeIn("center", 3, 0);
  const animatedGroup1 = useScrollFadeIn("center", 3, 0);
  const animatedGroup2 = useScrollFadeIn("center", 3, 0);
  const animatedIntro = useScrollFadeIn("center", 4, 0);


  if (width < height) {
    return (
      <>
      <Header color="green"/>
        <Wrap>
          <Container sx={{ py: 1, width: "100%" }}>
            <>
              <div>
                <MMainTitle width={width}>
                  <h3>나만의 설문을 제작하고 공유</h3>
                  <h5>다양한 유형의 질문을 선택하고 나만의 설문을 만들 수 있습니다.</h5>
                </MMainTitle>
              </div>
              <Wrap>
                <Container sx={{ py: 8, width: "100%" }}>
                  <div>
                    <MuiGrid container spacing={2}>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "end",
                          marginTop: "32px",
                          width: "100%",
                        }}
                      >

                      <PlusButton
                        cursor="pointer"
                        onClick={goToQuestion}
                      >
                        설문 만들기 +
                      </PlusButton>
                      </div>
                    </MuiGrid>
                  </div>
                </Container>
                <MMainTitle>
                  <h3>설문베이를 이용하고 싶어요</h3>
                  <h5>어떻게 설문베이를 완벽하게 사용할 수 있나요?</h5>
                </MMainTitle>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginTop: "32px",
                  }}
                >
                  <PlusButton 
                    cursor="pointer"
                    onClick={goToFaq}
                  >
                    이용방법 보기 +
                  </PlusButton>
                </div>
                <div {...animatedAboutTitle}>
                  <p margin_top="120px">
                    설문베이는 무엇인가요?
                  </p>
                  <p margin_top="24px">
                    설문베이는 다양한 기능과 함께 설문을 만들어 이를 공유하고
                    <br />
                    전문적인 결과 분석까지 받을 수 있는 설문 플랫폼입니다.
                  </p>
                </div>
              </Wrap>
            </>
            <MFooterBxSlideCon width={width} src={Intro}></MFooterBxSlideCon>

            <div {...animatedHowToTitle}>
              <p margin_top="80px">
                설문베이의 장점은 무엇인가요?
              </p>
              <p margin_top="24px">
                설문베이는 다음과 같은 장점을 가지고 있습니다.
              </p>
            </div>
            <ImageGroup>
              <img
                alt=""
                src={Advantages1}
                width="100%"
                // height="30vw"
                style={{ marginBottom: "12px" }}
              />
              <img
                alt=""
                src={Advantages3}
                width="100%"
                // height="30vw"
                style={{ marginBottom: "12px" }}
              />
              <img
                alt=""
                src={Advantages2}
                width="100%"
                // height="30vw"
                style={{ marginBottom: "12px" }}
              />

              <img
                alt=""
                src={Advantages4}
                width="100%"
                // height="30vw"
                style={{ marginBottom: "36px" }}
              />
            </ImageGroup>
          </Container>
        </Wrap>
        <Footer/>
      </>
    );
  }

  return (
    <>
    <Header color="green"/>
      <Wrap>
        <BxSlideCon src={MainLogo} width={width}>
          <InsideTextDiv width={width}>
            <h1>
              설문조사 <span>제작 공유 분석</span>
            </h1>
            <h3>바로 설문베이에서!</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <button id="questionnaires" onClick={() => navigate("/questionnaires")}>
                설문 만들러 가기
              </button>
            </div>
          </InsideTextDiv>

          {/* <img alt="" src={BxSlide} width="100%" /> */}
        </BxSlideCon>

        <Container sx={{ py: 8, width: "100%" }}>
          <>
            <InviteLiveNow width={width} src={Wifi} {...animatedIntro}>
              <div id="invite-text">
                <h1>
                  설문베이를 통해 <br />
                  설문을 제작하고 참여도 해보세요.
                </h1>
                <h3>
                  다양한 질문 유형, 질문 옵션, 질문 로직 등
                  <br /> 설문조사 제작의 필수 요소를 모두 담았습니다.
                  <br />
                  <br />
                  설문베이에서 제공하는 템플릿과 설문 대상자 그룹 관리로 편리하게 제작 및 공유해보고
                  <br /> 
                  <br />
                  설문조사의 결과에 대한 <br />
                  전문적인 분석 또한 받아보아요.
                </h3>
              </div>
              <div id="invite-image">
                <img id="wifi" src={Wifi} alt="" />
                <img src={ScreenImg} alt="" />
              </div>
            </InviteLiveNow>
            <DescribeUse width={width} {...animatedService}>
              <h3>설문베이에서 이런 서비스를 이용하실 수 있습니다.</h3>
              <img src={Summary} alt="" />
            </DescribeUse>

            <div {...animatedItem}>
              <MainTitle>
                <h3>나만의 설문을 제작하고 공유</h3>
                <h5>다양한 유형의 질문을 선택하고 나만의 설문을 만들 수 있습니다.</h5>
              </MainTitle>
            </div>
            <Wrap>
              <Container sx={{ py: 8, width: "100%" }}>
                <div {...animatedRoom}>
                  <MuiGrid container spacing={2}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        marginTop: "32px",
                        width: "100%",
                      }}
                    >
                      <PlusButton
                        cursor="pointer"
                        onClick={goToQuestion}
                      >
                        설문 만들기 +
                      </PlusButton>
                    </div>
                  </MuiGrid>
                </div>
              </Container>
              <MainTitle {...animatedStoryTitle}>
                <h3>설문베이를 이용하고 싶어요</h3>
                <h5>어떻게 설문베이를 완벽하게 사용할 수 있나요?</h5>
              </MainTitle>
            
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  marginTop: "32px",
                }}
              >
                <PlusButton
                  cursor="pointer"
                  onClick={goToFaq}
                >
                  이용방법 보기 +
                </PlusButton>
              </div>
              <div {...animatedAboutTitle}>
                <p margin_top="240px">
                설문베이는 무엇인가요?
                </p>
                <p margin_top="24px">
                  설문베이는 다양한 기능과 함께 설문을 만들어 이를 공유하고
                  전문적인 결과 분석까지 받을 수 있는 설문 플랫폼입니다.
                </p>
              </div>
            </Wrap>
          </>
          <FooterBxSlideCon {...animatedWhatIs}>
            <img
              alt=""
              src={Intro}
              width="100%"
              // height="30vw"
              style={{ margin: "0px" }}
            />
          </FooterBxSlideCon>

          <div {...animatedHowToTitle}>
            <p margin_top="80px">
              설문베이의 장점은 무엇인가요?
            </p>
            <p margin_top="24px">
              설문베이는 다음과 같은 장점을 가지고 있습니다.
            </p>
          </div>
          <ImageGroup {...animatedGroup1}>
            <img
              alt=""
              src={Advantages1}
              width="45%"
              // height="30vw"
              style={{ margin: "12px" }}
            />
            <img
              alt=""
              src={Advantages2}
              width="45%"
              // height="30vw"
              style={{ margin: "12px" }}
            />
          </ImageGroup>
          <ImageGroup2 {...animatedGroup2}>
            <img
              alt=""
              src={Advantages3}
              width="45%"
              // height="30vw"
              style={{ margin: "12px" }}
            />

            <img
              alt=""
              src={Advantages4}
              width="45%"
              // height="30vw"
              style={{ margin: "12px" }}
            />
          </ImageGroup2>
        </Container>
      </Wrap>
      <Footer/>
    </>
  );
};

const BxSlideCon = styled.div`
  width: 100%;
  height: ${(props) => props.width * 0.35}px;
  background-image: url("${(props) => props.src}");
  background-size: 100% auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px;
  position: relative;
`;

const InsideTextDiv = styled.div`
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  top: 20%;
  left: 23%;
  transform: translate(-20%, -20%);
  position: absolute;
  color: white;
  width: ${(props) => props.width * 0.25}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-size: ${(props) => props.width * 0.018}px;
    font-family: "IBM Plex Sans KR";
    margin: 8px 32px;
    span {
      font-weight: bold;
      font-family: "IBM Plex Sans KR";
      color: Orchid;
    }
  }
  h3 {
    font-size: ${(props) => props.width * 0.018}px;
    font-family: "IBM Plex Sans KR";
    margin: 4px 16px 120px 32px;
  }
  button {
    /* margin: auto; */
    margin: 4px 16px 4px 32px;
    width: 172px;
    height: 52px;
    border-radius: 8px;
    border: solid 2px greenyellow;
    background-color: rgb(0, 0, 0, 0);
    font-size: 16px;
    color: greenyellow;
    font-weight: bold;
    z-index: 13000;
    /* font-weight: bold; */
    cursor: pointer;
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      background-color: greenyellow;
      color: black;
    }
  }
  #questionnaires {
    /* margin: auto; */
    margin: 4px 16px;
    width: 172px;
    height: 52px;
    border-radius: 8px;
    border: solid 2px white;
    background-color: white;
    font-size: 16px;
    color: black;
    font-weight: bold;
    margin-right: 16px;
    z-index: 13000;
    /* font-weight: bold; */
    cursor: pointer;
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      border: solid 2px Plum;
      background-color: Plum;
      color: black;
    }
  }

`;



const InviteLiveNow = styled.div`
  width: 100%;
  height: ${(props) => props.width * 0.35}px;
  margin: 0px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  #invite-text {
    width: 32%;
    height: ${(props) => props.width * 0.35}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-family: "IBM Plex Sans KR";
      font-size: ${(props) => props.width * 0.024}px;
    }
    h3 {
      font-family: "GmarketSansLight";
      font-size: ${(props) => props.width * 0.012}px;
    }
  }
  #invite-image {
    width: 68%;
    position: relative;
    /* background-image: url("${(props) => props.src}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    #wifi {
      position: absolute;
      width: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.1;
    }
    img {
      position: absolute;
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const DescribeUse = styled.div`
  width: 100%;
  text-align: center;
  margin-top: ${(props) => props.width * 0.08}px;
  margin-bottom: ${(props) => props.width * 0.08}px;
  img {
    width: 100%;
  }
  h3 {
    margin-bottom: ${(props) => props.width * 0.04}px;
    font-family: "IBM Plex Sans KR";
    font-size: ${(props) => props.width * 0.016}px;
  }
`;

const MBxSlideCon = styled.div`
  width: 100%;
  height: ${(props) => props.width * 0.5}px;
  margin: 0px;
  cursor: pointer;
  background-image: url("${(props) => props.src}");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MFooterBxSlideCon = styled.div`
  width: 100%;
  height: ${(props) => props.width * 0.6}px;
  margin: 0px;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const FooterBxSlideCon = styled.div`
  width: 100%;
  padding-bottom: 96px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
`;


////////////////////////////////////

const MainTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 64px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 64px;

  h3 {
    font-size: 36px;
    font-family: "IBM Plex Sans KR";
    margin: 0px;
    margin-bottom: 16px;
    color: black;
  }
  h5 {
    font-size: 18px;
    font-family: "GmarketSansLight";
    margin: 0px;
  }
`;

const MMainTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: ${(props) => props.width * 0.1}px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 64px;

  h3 {
    font-size: ${(props) => props.width * 0.05}px;
    font-family: "IBM Plex Sans KR";
    margin: 0px;
    margin-bottom: 16px;
  }
  h5 {
    font-size: ${(props) => props.width * 0.03}px;
    font-family: "GmarketSansLight";
    margin: 0px;
  }
`;

const PlusButton = styled.button`
    margin: 4px 16px;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    border: solid 2px black;
    background-color: white;
    font-size: 16px;
    color: black;
    font-weight: bold;
    margin-right: 16px;
    z-index: 13000;
    /* font-weight: bold; */
    cursor: pointer;
    transition: 0.3s;
    :hover {
    transition: 0.3s;
    border: solid 2px Plum;
    background-color: Plum;
    color: black;
    }
`;


const QuestionButton = styled.button`
  background-color: rgb(0, 0, 0, 0);
  border: solid 0px;
  cursor: pointer;
`;

const ImageGroup = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const ImageGroup2 = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 160px;
`;

const HandleScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

export default Home;