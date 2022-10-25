import Nav from 'react-bootstrap/Nav';
import { SET_TSO } from '../../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function QuestionnaireTemplateNav(props) {
    /* 리덕스 */
    // 설문함 선택 옵션
    const dispatch = useDispatch();
    const templateNavButtonOnClick = (temOption) => {
        dispatch(SET_TSO(temOption));
    }
    const { templateSelectOption } = useSelector((state) => ({
        templateSelectOption: state.questionnairesReducer.templateSelectOption,
    }));
    return (
        <Nav justify variant="tabs">
            <Nav.Item>
                <Nav.Link onClick={(e) => { templateNavButtonOnClick(0, e) }}>
                    {
                        templateSelectOption !== 0 ?
                            <text className="">설문 템플릿</text>
                            : <b className="">설문 템플릿</b>
                    }
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(e) => { templateNavButtonOnClick(1, e) }}>
                    {
                        templateSelectOption !== 1 ?
                            <text className="">이전 템플릿</text>
                            : <b className="">이전 템플릿</b>
                    }
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default QuestionnaireTemplateNav