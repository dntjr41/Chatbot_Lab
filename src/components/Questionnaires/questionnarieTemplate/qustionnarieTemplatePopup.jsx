import Modal from 'react-bootstrap/Modal';
import QuestionnaireTemplateNav from './questionnaireTemplateNav';
import QuestionnaireTemplateContainer from './questionnaireTemplateContainer';

import { } from '../../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
const questionnaireTemplatePopup = (props) => {
    /* 리덕스 */
    // 템플릿 옵션
    
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