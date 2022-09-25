import Card from 'react-bootstrap/Card';
import testimg from '../../../../src/images/Logo square.png'
const newQuestionnaireCard = (props) => {
    return (
        <a style={{cursor:'pointer'}}>
            <Card
                bg='light'
                key='Light'
                text='dark'
                style={{ width: '12rem' }}
                className="mb-2"
            >
                <Card.Img variant="top" src={testimg} alt="Card image" />
                <Card.Title>{props.newQuestionnaireOption}</Card.Title>
            </Card>
        </a>
    )
}

export default newQuestionnaireCard