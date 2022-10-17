import React from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import QuestionnaireNav from './questionnaireNav';
import QuestionnaireCard from './questionnaireCard';

import { useSelector, useDispatch } from 'react-redux';

import '../../css/QuestionnairePage.css';
import '../../App.css'
function QuestionnaireCardContainer(props) {
  /* 리덕스 */
  const dispatch = useDispatch();
  // 현재 보여주는 페이지
  const { questionnairePageOption } = useSelector((state) => ({
    questionnairePageOption: state.questionnairesReducer.questionnairePageOption
  }))
  // 유저 ID에 따른 설문 리스트
  const {surveyList} = useSelector((state) => ({
    surveyList: state.questionnairesReducer.surveyList,
  }));
  // nav 디스플레이 옵션
  const {questionnaireSelectionOption} = useSelector((state) => ({
    questionnaireSelectionOption: state.questionnairesReducer.questionnaireSelectionOption,
  }));
  
  // page에 따른 card
  let items = [];

  for (let number = 1; number <= 8; number++) {
    const currentIdx = (questionnairePageOption - 1) * 8 + number;
    if (surveyList[currentIdx] != null) {
      items.push(
        <Col xs="auto">
          <QuestionnaireCard
            id={ surveyList[currentIdx]}
            title={ surveyList[currentIdx]["surveyTitle"]}
            startTime={surveyList[currentIdx]["startTime"]}
            endTime={surveyList[currentIdx]["endTime"]}
            representativeImg={surveyList[currentIdx]["surveyTitle"]}
            />
        </Col>
      )
    }
  }

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