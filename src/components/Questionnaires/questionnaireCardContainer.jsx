import React from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import QuestionnaireNav from './questionnaireNav';
import QuestionnaireCard from './questionnaireCard';
import QuestionnaireSetting from './questionnaireSetting';

import '../../css/QuestionnairePage.css';

function QuestionnaireCardContainer(props) {
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
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
          </Row>
        </Form>
        <br/>
        <br/>
      </div>
    )
}
  
export default QuestionnaireCardContainer