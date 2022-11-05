// bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// component
import QuestionnaireTemplateCard from './questionnaireTemplateCard';
// redux
import { useSelector } from 'react-redux';

function QuestionnaireTemplateContainer(props) {
  /* redux */
  const { templateSelectOption } = useSelector((state) => ({ // 0: 기본 제공 템플릿, 1: 이전 작성 설문 템플릿
    templateSelectOption: state.questionnairesReducer.templateSelectOption,
  }));
  const { surveyList } = useSelector((state) => ({ // 설문 리스트
    surveyList: state.questionnairesReducer.surveyList
  }));
  let items = [];
  /* 이전 설문 템플릿 */
  if (templateSelectOption === 1) {
    for (let number = 0; number < surveyList.length; number++) {
      if (surveyList[number] != null) {
        items.push(
          <Col xs="auto" key={"templateCardId" + surveyList[number]["surveyId"]}>
            <QuestionnaireTemplateCard
              id={surveyList[number]["surveyId"]}
              title={surveyList[number]["surveyTitle"]}
              surveyDescription={surveyList[number]["surveyDescription"]}
              representativeImg={surveyList[number]["surveyTitle"]}
            />
          </Col>
        )
      }
    }
  }
  /* main */
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