// bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// redux
import { SET_QSO, SET_SSL } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function QuestionnaireNav(props) {
    /* 리덕스 */
    const { questionnaireSelectionOption } = useSelector((state) => ({ // 설문함 페이지 선택 옵션
        questionnaireSelectionOption: state.questionnairesReducer.questionnaireSelectionOption,
    }));
    const dispatch = useDispatch();
    const newQuestionnaireButtonOnClick = (qsoIdx) => { // 새설문 버튼 클릭
        dispatch(SET_QSO(qsoIdx));
        dispatch(SET_SSL());
    }
    /* main */
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
                                    <p className="NavItem">&nbsp;&nbsp;&nbsp;전체&nbsp;&nbsp;&nbsp;</p>
                                    : <b className="NavItem">&nbsp;&nbsp;&nbsp;전체&nbsp;&nbsp;&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(1, e) }}>
                            {
                                questionnaireSelectionOption !== 1 ?
                                    <p className="NavItem">&nbsp;제작 중&nbsp;</p>
                                    : <b className="NavItem">&nbsp;제작 중&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(2, e) }}>
                            {
                                questionnaireSelectionOption !== 2 ?
                                    <p className="NavItem">&nbsp;예약 중&nbsp;</p>
                                    : <b className="NavItem">&nbsp;예약 중&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(3, e) }}>
                            {
                                questionnaireSelectionOption !== 3 ?
                                    <p className="NavItem">&nbsp;배포 중&nbsp;</p>
                                    : <b className="NavItem">&nbsp;배포 중&nbsp;</b>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link onClick={(e) => { newQuestionnaireButtonOnClick(4, e) }}>
                            {
                                questionnaireSelectionOption !== 4 ?
                                    <p className="NavItem">&nbsp;&nbsp;&nbsp;종료&nbsp;&nbsp;&nbsp;</p>
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