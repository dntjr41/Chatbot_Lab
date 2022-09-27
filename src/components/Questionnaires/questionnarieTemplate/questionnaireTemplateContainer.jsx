import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import QuestionnaireTemplateCard from './questionnaireTemplateCard';
const questionnaireTemplateContainer = (props) => {
    return (
      <div>
        <Form variant="info" className="d-flex justify-content-around ">
        
          <Row className="align-items-center  justify-content-md-center ">
            <Col xs="auto">
              <QuestionnaireTemplateCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireTemplateCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireTemplateCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireTemplateCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireTemplateCard />
            </Col>
            <Col xs="auto">
              <QuestionnaireTemplateCard />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
  
  export default questionnaireTemplateContainer