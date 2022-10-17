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
  // page에 따른 card
  let items = [];

  for (let number = 1; number <= 8; number++) {
    const currentIdx = (questionnairePageOption - 1) * 8 + number;
    items.push(
      <Col xs="auto">
        <QuestionnaireCard
          id={currentIdx}
          title={"questionnaire[" + currentIdx + "].title"}
          startTime={"startTime"}
          endTime={"endTime"}
          representativeImg={"img"}
          onDeploy={"onDeploy"} />
      </Col>
    )
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