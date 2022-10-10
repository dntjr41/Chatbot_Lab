import { useDispatch } from "react-redux";
import { DEL_CARD, CHANGE_QUE_TITLE, CHECK_OPT } from "../../../modules/createSurveySlice";

import "../../../css/CreateSurveyPage.css";

// 질문 카드 컴포넌트(주관식)

const SubjectiveCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();
    //질문 카드 삭제
    const delCard = (listIdx) => {
        dispatch(DEL_CARD(listIdx));
    }

    // 질문 제목 입력 업데이트
    const inputQuestionTitle = (listIdx, title) => {
        dispatch(CHANGE_QUE_TITLE({ listIdx, title }));
    }

    // 질문 옵션 체크 업데이트
    const checkOption = (listIdx, optIdx) => {
        dispatch(CHECK_OPT({ listIdx, optIdx }));
    }
    return (
        <div className="create-survey-card">
            <input type="text" placeholder="질문??을 입력하세요" value={questionCard.title} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} />
            {
                questionCard.options.map((option, optIdx) =>
                    <div key={optIdx}>
                        <input type="checkbox" defaultChecked={option} onClick={() => checkOption(listIdx, optIdx)} />
                        옵션{optIdx}
                    </div>
                )
            }
            <button type="button" onClick={() => delCard(listIdx)}>질문 삭제</button>
        </div>
    )
}

export default SubjectiveCard;