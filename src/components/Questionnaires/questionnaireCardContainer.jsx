import React from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import QuestionnaireNav from './questionnaireNav';
import QuestionnaireCard from './questionnaireCard';
import QuestionnaireSetting from './questionnaireSetting';

import { useSelector, useDispatch } from 'react-redux';

import '../../css/QuestionnairePage.css';

function QuestionnaireCardContainer(props) {
  /* 리덕스 */
  const dispatch = useDispatch();
  // 현재 보여주는 페이지
  const { questionnairePageOption } = useSelector((state) => ({
    questionnairePageOption: state.questionnairesReducer.questionnairePageOption
  }))
  // page에 따른 card
  let items = [];
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Col xs="auto">
        <QuestionnaireCard />
      </Col>
    )
  }

  return (
    <div className="CardContainer">
      <div className="NavPadding">
        <QuestionnaireNav />
      </div>

      <Form variant="info" className="justify-content-around">
        <Row className="align-items-center justify-content-md-center">
          {/*
            <Col xs="auto">
            <OverlayTrigger
              placement="right"
              overlay={<QuestionnaireSetting />}
            >
              {({ ref, ...triggerHandler }) => (
                
                <div>
                <QuestionnaireCard />
                </div>
              )}
            </OverlayTrigger>
              */}
          {items}
        </Row>
      </Form>
      <br />
      <br />
    </div>
  )
}

export default QuestionnaireCardContainer