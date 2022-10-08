import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import testimg from '../../../src/images/Logo square.png'

import '../../css/QuestionnairePage.css'

import { useSelector, useDispatch } from 'react-redux';

// title(설문 제목), onDeploy(배포여부), startTime(시작일), endTime(종료일), representativeImg(대표 이미지)
function QuestionnaireCard(props) {
  /* 리덕스 */
  const dispatch = useDispatch();
  const {questionnaireSelectionOption} = useSelector((state) => ({
    questionnaireSelectionOption: state.questionnairesReducer.questionnaireSelectionOption,
  }));
  
  const qState = "전체";
  const currentTime = new Date('2022-10-08');

  // 설문 상태 (선택된 옵션이 "전체" 일때만 표기)
  console.log(questionnaireSelectionOption)
  const items = []
  if (questionnaireSelectionOption === 0){
    items.push(
        <ListGroup.Item>
          {
          props.onDeploy === false 
          ? <>제작중</>
          : props.startTIme < currentTime
           ? <>예약중</>
           : props.endTime < currentTime
           ? <>배포중</>
           : <>종료</>
          }
        </ListGroup.Item>
    )
  }

  return (
    <div>
    <Card
    bg='light'
    key={props.id}
    text='dark'
    style={{ width: '15rem' }}
    className="mb-2">
        <Card.Img variant="top" src={testimg} alt={props.id} />
        <Card.Body className="text-center">
        <Card.Title>{props.title}</Card.Title>
        <ListGroup>
            <ListGroup.Item>{props.startTime}</ListGroup.Item>
            <ListGroup.Item>{props.endTime}</ListGroup.Item>
            {items}
          </ListGroup>
        <div className="d-grid gap-2">
          <Button variant="dark" className="QustCardOptionButtonFloat">설정</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default QuestionnaireCard