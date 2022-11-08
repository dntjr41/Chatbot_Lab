// bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// component
import QuestionnaireTemplateCard from './questionnaireTemplateCard';
// redux
import { useSelector } from 'react-redux';
// template
import QuestionnaireTemplate from "./questionnaireTemplate.json";

function QuestionnaireTemplateContainer(props) {
  /* redux */
  const { templateSelectOption } = useSelector((state) => ({ // 0: 기본 제공 템플릿, 1: 이전 작성 설문 템플릿
    templateSelectOption: state.questionnairesReducer.templateSelectOption,
  }));
  const { surveyList } = useSelector((state) => ({ // 설문 리스트
    surveyList: state.questionnairesReducer.surveyList
  }));
  let items = [];
  if (templateSelectOption === 0) {
    items.push(
      <Col xs="auto" key={"templateCardId" + "eventAttendTemplate"}>
        <QuestionnaireTemplateCard
          id={null}
          title={QuestionnaireTemplate.eventAttendTemplate.surveyTitle}
          surveyDescription={QuestionnaireTemplate.eventAttendTemplate.surveyContent}
          representativeImg={QuestionnaireTemplate.eventAttendTemplate.surveyContent}
          templateData={QuestionnaireTemplate.eventAttendTemplate}
        />
      </Col>
    )
    items.push(
      <Col xs="auto" key={"templateCardId" + "customerExperienceTemplate"}>
        <QuestionnaireTemplateCard
          id={null}
          title={QuestionnaireTemplate.customerExperienceTemplate.surveyTitle}
          surveyDescription={QuestionnaireTemplate.customerExperienceTemplate.surveyContent}
          representativeImg={QuestionnaireTemplate.customerExperienceTemplate.surveyContent}
          templateData={QuestionnaireTemplate.customerExperienceTemplate}
        />
      </Col>
    )
    items.push(
      <Col xs="auto" key={"templateCardId" + "contactInformationTemplate"}>
        <QuestionnaireTemplateCard
          id={null}
          title={QuestionnaireTemplate.contactInformationTemplate.surveyTitle}
          surveyDescription={QuestionnaireTemplate.contactInformationTemplate.surveyContent}
          representativeImg={QuestionnaireTemplate.contactInformationTemplate.surveyContent}
          templateData={QuestionnaireTemplate.contactInformationTemplate}
        />
      </Col>
    )
  }
  /* 이전 설문 템플릿 */
  else if (templateSelectOption === 1) {
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