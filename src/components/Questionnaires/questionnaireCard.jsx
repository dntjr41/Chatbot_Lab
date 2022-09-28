import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import testimg from '../../../src/images/Logo square.png'

import '../../css/QuestionnairePage.css'
const questionnaireCard = (props) => {
  return (
    <div>
    <Card
    bg='light'
    key='Light'
    text='dark'
    style={{ width: '15rem' }}
    className="mb-2">
        <Card.Img variant="top" src={testimg} alt="Card image" />
        <Card.Body className="text-center">
        <Card.Title>설문 제목</Card.Title>
        <ListGroup>
            <ListGroup.Item>시작일: 2022-09-27</ListGroup.Item>
            <ListGroup.Item>종료일: 2022-10-27</ListGroup.Item>
            <ListGroup.Item>상태: 제작 중</ListGroup.Item>
          </ListGroup>
        <div className="d-grid gap-2">
          <Button variant="dark" className="QustCardOptionButtonFloat">설정</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default questionnaireCard