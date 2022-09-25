import Modal from 'react-bootstrap/Modal';
import QuestionnaireTemplateNav from './questionnaireTemplateNav';
import QuestionnaireTemplateContainer from './questionnaireTemplateContainer';
const questionnaireTemplatePopup = (props) => {
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
                <QuestionnaireTemplateNav />
                <QuestionnaireTemplateContainer />

            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}
    
export default questionnaireTemplatePopup