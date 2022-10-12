import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NewQuestionnarieCard from './newQuestionnarieCard';

import newQust from '../../../images/newQuestionnaireButton/newQust.png';
import prevQustTemp from '../../../images/newQuestionnaireButton/prevQustTemp.png';
import qustTemp from '../../../images/newQuestionnaireButton/qustTemp.png';

function NewQuestionnairePopup(props) {
    return (
        <Modal 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            onHide={props.hide}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Form variant="info" className="d-flex justify-content-around">
        
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <NewQuestionnarieCard newQuestionnaireOption="새 설문 작성" cardImg={newQust} />
                        </Col>
                        <Col xs="auto">
                            <NewQuestionnarieCard newQuestionnaireOption="설문 템플릿 탐색" cardImg={prevQustTemp} />
                        </Col>
                        <Col xs="auto">
                            <NewQuestionnarieCard newQuestionnaireOption="이전 설문 가져오기" cardImg={qustTemp} />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}    
export default NewQuestionnairePopup