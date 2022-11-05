import React from "react";
// bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// components
import QuestionnaireNav from './questionnaireNav';
import QuestionnaireCard from './questionnaireCard';
// redux
import { useSelector } from 'react-redux';
// css
import '../../css/QuestionnairePage.css';
import '../../App.css'

function QuestionnaireCardContainer(props) {
  /* redux */
  // 현재 보여주는 페이지
  const { questionnairePageOption } = useSelector((state) => ({
    questionnairePageOption: state.questionnairesReducer.questionnairePageOption
  }))
  // 유저 ID, option에 따른 설문 리스트
  const {selectedSurveyList} = useSelector((state) => ({
    selectedSurveyList: state.questionnairesReducer.selectedSurveyList,
  }));
  /* 설문 카드 렌더링 */
  // page에 따른 card
  let items = [];
  // card page에 디스플레이 할 것들만 생성
  for (let number = 0; number <= 7; number++) {
    const currentIdx = (questionnairePageOption - 1) * 8 + number;
    if (selectedSurveyList[currentIdx] != null) {
      items.push(
        <Col xs="auto" key={ "cardid" + selectedSurveyList[currentIdx]["surveyId"]}>
          <QuestionnaireCard
            id={ selectedSurveyList[currentIdx]["surveyId"]}
            title={ selectedSurveyList[currentIdx]["surveyTitle"]}
            startTime={selectedSurveyList[currentIdx]["surveyStart"]}
            endTime={selectedSurveyList[currentIdx]["surveyEnd"]}
            representativeImg={selectedSurveyList[currentIdx]["surveyTitle"]}
            surveyState={selectedSurveyList[currentIdx]["surveyState"]}
            />
        </Col>
      )
    }
  }
  
  /* main */
  return (
    <div className="color-second CardContainer">
      <div className="NavPadding">
        <QuestionnaireNav />
      </div>
      <Form variant="info" className="justify-content-around">
        <Row className="align-items-center justify-content-md-center">
          {items}
        </Row>
      </Form>
      <br />
      <br />
    </div>
  )
}

export default QuestionnaireCardContainer