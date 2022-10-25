import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import QuestionnaireTemplateCard from './questionnaireTemplateCard';

import { useSelector, useDispatch } from 'react-redux';

function QuestionnaireTemplateContainer(props) {
  const { templateSelectOption } = useSelector((state) => ({
    templateSelectOption: state.questionnairesReducer.templateSelectOption,
  }));
    // 유저 ID, option에 따른 설문 리스트
    const {surveyList} = useSelector((state) => ({
      surveyList: state.questionnairesReducer.surveyList
    }));
    let items = [];
  if (templateSelectOption === 1) {
    // page에 따른 card
    
    // card page에 디스플레이 할 것들만 생성
    for (let number = 0; number < surveyList.length; number++) {
      if (surveyList[number] != null) {
        items.push(
          <Col xs="auto">
            <QuestionnaireTemplateCard
              id={surveyList[number]}
              title={surveyList[number]["surveyTitle"]}
              surveyDescription={surveyList[number]["surveyDescription"]}
              representativeImg={surveyList[number]["surveyTitle"]}
            />
          </Col>
        )
      }
    }
  }
  return (
    <div>
      <Form variant="info" className="d-flex justify-content-around ">

        <Row className="align-items-center  justify-content-md-center ">
          {items}
        </Row>
      </Form>
    </div>
  )
}

export default QuestionnaireTemplateContainer