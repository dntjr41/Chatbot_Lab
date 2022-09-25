import Card from 'react-bootstrap/Card';
import testimg from '../../../src/images/Logo square.png'
const questionnaireCard = (props) => {
  return (
    <div>
    <Card
    bg='light'
    key='Light'
    text='dark'
    style={{ width: '18rem' }}
    className="mb-2">
        <Card.Img variant="top" src={testimg} alt="Card image" />
        <Card.Body>
        <Card.Title>설문 제목</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default questionnaireCard