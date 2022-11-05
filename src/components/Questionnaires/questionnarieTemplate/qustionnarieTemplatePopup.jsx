// bootstrap
import Modal from 'react-bootstrap/Modal';
// component
import QuestionnaireTemplateNav from './questionnaireTemplateNav';
import QuestionnaireTemplateContainer from './questionnaireTemplateContainer';

const questionnaireTemplatePopup = (props) => {    
    /* main */
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
                <QuestionnaireTemplateNav />
                <QuestionnaireTemplateContainer />
            </Modal.Body>
        </Modal>
    )
}
    
export default questionnaireTemplatePopup