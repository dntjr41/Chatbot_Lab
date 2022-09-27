import Nav from 'react-bootstrap/Nav';
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
        <Nav>
            <Nav.Item>
                <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(0, e)}}>전체</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(1, e)}}>제작 중</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(2, e)}}>예약 중</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(3, e)}}>배포 중</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(e) => {newQuestionnaireButtonOnClick(4, e)}}>종료</Nav.Link>
            </Nav.Item>
      </Nav>
    )
}
export default QuestionnaireNav