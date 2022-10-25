import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SET_QSO, SET_SSL } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function QuestionnaireNav(props) {
    /* 리덕스 */
    // 설문함 선택 옵션
    const { questionnaireSelectionOption } = useSelector((state) => ({
        questionnaireSelectionOption: state.questionnairesReducer.questionnaireSelectionOption,
    }));
    const dispatch = useDispatch();
    const newQuestionnaireButtonOnClick = (qsoIdx) => {
        dispatch(SET_QSO(qsoIdx));
        dispatch(SET_SSL());
    }

    return (
        <Navbar className="mb-3 NavTransparent" expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <br />
                <Nav fill variant="tabs">
                    <Nav.Item >
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(0, e) }}>
                            {
                                questionnaireSelectionOption !== 0 ?
                                    <text className="NavItem">&nbsp;&nbsp;&nbsp;전체&nbsp;&nbsp;&nbsp;</text>
                                    : <b className="NavItem">&nbsp;&nbsp;&nbsp;전체&nbsp;&nbsp;&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(1, e) }}>
                            {
                                questionnaireSelectionOption !== 1 ?
                                    <text className="NavItem">&nbsp;제작 중&nbsp;</text>
                                    : <b className="NavItem">&nbsp;제작 중&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(2, e) }}>
                            {
                                questionnaireSelectionOption !== 2 ?
                                    <text className="NavItem">&nbsp;예약 중&nbsp;</text>
                                    : <b className="NavItem">&nbsp;예약 중&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(3, e) }}>
                            {
                                questionnaireSelectionOption !== 3 ?
                                    <text className="NavItem">&nbsp;배포 중&nbsp;</text>
                                    : <b className="NavItem">&nbsp;배포 중&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(4, e) }}>
                            {
                                questionnaireSelectionOption !== 4 ?
                                    <text className="NavItem">&nbsp;&nbsp;&nbsp;종료&nbsp;&nbsp;&nbsp;</text>
                                    : <b className="NavItem">&nbsp;&nbsp;&nbsp;종료&nbsp;&nbsp;&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <br />
            </Navbar.Collapse>
        </Navbar>
    )
}
export default QuestionnaireNav