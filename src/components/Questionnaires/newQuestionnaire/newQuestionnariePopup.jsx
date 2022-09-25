import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NewQuestionnarieCard from './newQuestionnarieCard';

function NewQuestionnairePopup(props) {
    return (
        <Modal 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form variant="info" className="d-flex justify-content-around">
        
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <NewQuestionnarieCard newQuestionnaireOption="새 설문 작성" />
                        </Col>
                        <Col xs="auto">
                            <NewQuestionnarieCard newQuestionnaireOption="설문 템플릿 탐색" />
                        </Col>
                        <Col xs="auto">
                            <NewQuestionnarieCard newQuestionnaireOption="이전 설문 가져오기" />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}    
export default NewQuestionnairePopup