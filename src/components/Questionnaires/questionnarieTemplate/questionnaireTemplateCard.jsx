import Card from 'react-bootstrap/Card';
import testimg from '../../../../src/images/Logo square.png'
import Button from 'react-bootstrap/Button';
const questionnaireTemplateCard = (props) => {
  return (
    <Card
    bg='light'
    key={props.id}
    text='dark'
    style={{ width: '12rem' }}
    className="mb-2">
      <Card.Img variant="top" src={testimg} alt="Card image" />
        <Card.Body className="text-center d-grid gap-2">
          <Card.Title><b>{props.title}</b></Card.Title>
          <Card.Text>
            {props.surveyDescription ?
              props.surveyDescription.substring(0,20)
              :"설문 설명이 없습니다"
            }
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-center d-grid gap-2">
          <Button variant="dark" size="sg">선택</Button>
        </Card.Footer>
      </Card>
  )
}

export default questionnaireTemplateCard