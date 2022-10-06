import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_TITLE, CHANGE_CONTENT } from "../modules/createSurveySlice";

import Header from "../components/Header";
import QuestionCardList from "../components/CreateSurvey/QuestionCardList";

import '../css/CreateSurveyPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsRainbow } from 'react-icons/bs';

// 새 설문 작성 페이지
// └헤더
// └설문지 컴포넌트
//   └설문 제목, 부연설명 입력
//   └질문 카드 컴포넌트 리스트
//   └질문 추가 컴포넌트
//   └저장 버튼

const CreateSurveyPage = function () {
    const dispatch = useDispatch();
    const title = useSelector(state => state.createSurvey.surveyTitle);
    const content = useSelector(state => state.createSurvey.surveyContent);
    const surveyInfo = useSelector(state => state.createSurvey);

    // 설문의 제목 입력 업데이트
    const inputTitle = (title) => {
        dispatch(CHANGE_TITLE(title));
    }

    // 설문의 부연설명 입력 업데이트
    const inputContent = (content) => {
        dispatch(CHANGE_CONTENT(content));
    }

    // 설문 저장 버튼 클릭시 입력한 모든 정보를 console에 띄움
    const createSurvey = () => {
        console.log(surveyInfo);
        console.log(JSON.stringify(surveyInfo));
        alert(JSON.stringify(surveyInfo));
    }

    return (
        <div className="create-survey-layout">
            <Header />
            <div className="text-center">설문지 작성</div>
            <Container className="create-survey-form">
                <Row className="mt-5 mb-5">
                    <Col className="mt-5 mx-5" ><input type="text" placeholder="설문지 제목" /></Col>
                </Row>
                <Row className="mb-5">
                    <Col className="mx-5"><input type="text" placeholder="설문지 제목" /></Col>
                </Row>
                <Row>
                    <QuestionCardList />
                </Row>
                <button type="button" onClick={createSurvey}>저장</button>
            </Container>
        </div >
    )
}

export default CreateSurveyPage;