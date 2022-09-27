import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SET_QSO } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function QuestionnaireNav(props) {
    const {newQuestionnairePopupShow} = useSelector((state) => ({
        newQuestionnairePopupShow: state.newQuestionnairePopupShow,
    }));
    const dispatch = useDispatch();    
    const newQuestionnaireButtonOnClick = (qsoIdx) => {
        dispatch(SET_QSO(qsoIdx));
    }
    


    return(
        <Navbar className="mb-3" bg="dark" variant="dark" expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <br/>
            <Nav fill variant="tabs">
                <Nav.Item>
                    <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(0, e)}}>&nbsp;&nbsp;&nbsp;전체&nbsp;&nbsp;&nbsp;</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(1, e)}}>&nbsp;제작 중&nbsp;</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(2, e)}}>&nbsp;예약 중&nbsp;</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(3, e)}}>&nbsp;배포 중&nbsp;</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(4, e)}}>&nbsp;&nbsp;&nbsp;종료&nbsp;&nbsp;&nbsp;</Nav.Link>
                </Nav.Item>
            </Nav>
            <br/>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default QuestionnaireNav