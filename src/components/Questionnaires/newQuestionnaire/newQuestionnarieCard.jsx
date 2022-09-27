import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const newQuestionnaireCard = (props) => {
    return (
        <a style={{cursor:'pointer'}}>
            <Card
                bg='light'
                key='Light'
                text='dark'
                style={{ width: '13rem' }}
                className="mb-2"
            >
                <Card.Img variant="top" src={props.cardImg} alt="Card image" />
                <Card.Body className="text-center d-grid gap-2">
                    <Button variant="dark">
                        {props.newQuestionnaireOption}
                    </Button>
                </Card.Body>
            </Card>
        </a>
    )
}

export default newQuestionnaireCard