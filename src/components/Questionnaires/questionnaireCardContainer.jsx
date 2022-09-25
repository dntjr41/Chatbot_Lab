import React from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import QuestionnaireNav from './questionnaireNav';
import QuestionnaireCard from './questionnaireCard';
import QuestionnaireSetting from './questionnaireSetting';

function QuestionnaireCardContainer(props) {
    return (
      <div >
        <QuestionnaireNav />
        <Form variant="info" className="d-flex justify-content-around">
        
          <Row className="align-items-center">
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
          
            </Col>
            <Col xs="auto">
              <QuestionnaireCard />
            </Col>
          </Row>
        </Form>
      </div>
    )
}
  
export default QuestionnaireCardContainer