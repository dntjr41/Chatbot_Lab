import Card from 'react-bootstrap/Card';
import testimg from '../../../../src/images/Logo square.png'
import Button from 'react-bootstrap/Button';
const questionnaireTemplateCard = (props) => {
  return (
    <Card
    bg='light'
    key='Light'
    text='dark'
    style={{ width: '12rem' }}
    className="mb-2">
      <Card.Img variant="top" src={testimg} alt="Card image" />
        <Card.Body>
          <Card.Title>템플릿 제목</Card.Title>
          <Card.Text>
            Text
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <Button variant="dark" size="sg">선택</Button>
        </Card.Footer>
      </Card>
  )
}

export default questionnaireTemplateCard