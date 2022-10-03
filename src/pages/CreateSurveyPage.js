import { useSelector, useDispatch } from 'react-redux';
import { changeTitleAction, changeContentAction } from "../modules/createSurveySlice";

import Header from "../components/Header";
import QuestionCardList from "../components/CreateSurvey/QuestionCardList";

import '../css/CreateSurveyPage.css';

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

    // 홈페이지로 이동
    const gotoHome = () => {
        alert("홈 페이지로 이동");
    }

    // 로그인 페이지로 이동
    const gotoLogin = () => {
        alert("로그인 페이지로 이동")
    }

    // 마이 페이지로 이동
    const gotoMyPage = () => {
        alert("마이페이지로 이동");
    }

    // 설문의 제목 입력 업데이트
    const inputTitle = (title) => {
        dispatch(changeTitleAction(title));
    }

    // 설문의 부연설명 입력 업데이트
    const inputContent = (content) => {
        dispatch(changeContentAction(content));
    }

    // 설문 저장 버튼 클릭시 입력한 모든 정보를 console에 띄움
    const createSurvey = () => {
        console.log(surveyInfo);
        console.log(JSON.stringify(surveyInfo));
        alert(JSON.stringify(surveyInfo));
    }

    return (
        <div className="createSurveyPage">
            {/* <button type="button" className="logoBtn" onClick={gotoHome} />
            <button type="button" className="loginBtn" onClick={gotoLogin} />
            <button type="button" className="myBtn" onClick={gotoMyPage} />
            <button type="button" className="homeBtn" onClick={gotoHome} /> */}
            <Header />

            <div><input type="text" className="surveyTitle" placeholder="제목을 입력하세요" value={title} onChange={(e) => inputTitle(e.target.value)} />
                <input type="text" className="surveyContent" value={content} placeholder="설명을 입력하세요" onChange={(e) => inputContent(e.target.value)} />

                <QuestionCardList />

                < button type="button" className="submitBtn" onClick={createSurvey} />
            </div>



        </div >
    )
}

export default CreateSurveyPage;