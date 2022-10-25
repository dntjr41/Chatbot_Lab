import Pagination from 'react-bootstrap/Pagination';

import { SET_QPO } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function Pager() {
    /* 리덕스 */
    const dispatch = useDispatch();
    // 현재 보여주는 페이지
    const { active } = useSelector((state) => ({
        active: state.questionnairesReducer.questionnairePageOption
    }))
    const questionnairePageOnClick = (number) => {
        dispatch(SET_QPO(number));
    }
    // 유저 ID, option에 따른 설문 리스트
    const { selectedSurveyList } = useSelector((state) => ({
        selectedSurveyList: state.questionnairesReducer.selectedSurveyList,
    }));

    // 컨텐츠 갯수
    let myQuestionnaireCount = selectedSurveyList.length;
    // 페이지 수
    let totalPage = Math.ceil(myQuestionnaireCount / 8);
    // Pagination.Item 배열
    let items = [];
    if (active === 1 || active === 2) {
        for (let number = 1; number <= totalPage && number < 6; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={(e) => { questionnairePageOnClick(number, e) }}>
                    {number}
                </Pagination.Item>
            )
        }
    }
    else if (active === totalPage || active === totalPage - 1) {
        for (let number = totalPage - 4; number <= totalPage; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={(e) => { questionnairePageOnClick(number, e) }}>
                    {number}
                </Pagination.Item>
            )
        }
    }
    else {
        for (let number = active - 2; number <= active + 2; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={(e) => { questionnairePageOnClick(number, e) }}>
                    {number}
                </Pagination.Item>
            )
        }
    }

    return (
        <>
            <Pagination className="d-flex justify-content-center" >
                <Pagination.First onClick={(e) => { questionnairePageOnClick(1, e) }} />
                <Pagination.Prev
                    onClick={(e) => {
                        if (active != 1) {
                            questionnairePageOnClick(active - 1, e)
                        }
                    }}
                />
                {items}
                <Pagination.Next
                    onClick={(e) => {
                        if (active != totalPage) {
                            questionnairePageOnClick(active + 1, e)
                        }
                    }}
                />
                <Pagination.Last onClick={(e) => { questionnairePageOnClick(totalPage, e) }} />
            </Pagination>
        </>
    );
}

export default Pager;