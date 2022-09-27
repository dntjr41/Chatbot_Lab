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
            </Modal.Header>
            <Modal.Body>
                <QuestionnaireTemplateNav />
                <QuestionnaireTemplateContainer />

            </Modal.Body>
        </Modal>
    )
}
    
export default questionnaireTemplatePopup