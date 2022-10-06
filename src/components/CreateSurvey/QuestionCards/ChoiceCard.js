import { useDispatch } from "react-redux";
import { ADD_ANSWER, DEL_ANSWER, DEL_CARD, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER, CHECK_OPT } from "../../../modules/createSurveySlice";

import "../../../css/CreateSurveyPage.css";

// 질문 카드 컴포넌트(객관식)

const ChoiceCard = function ({ questionCard, listIdx }) {
    console.log(questionCard);
    const dispatch = useDispatch();
    // 객관식 응답선택지를 추가
    const addAnswer = (listIdx) => {
        dispatch(ADD_ANSWER(listIdx));
    }

    // 객관식 응답 선택지 삭제
    const delAnswer = (listIdx, answerIdx) => {
        dispatch(DEL_ANSWER({ listIdx, answerIdx }));
    }

    //질문 카드 삭제
    const delCard = (listIdx) => {
        dispatch(DEL_CARD(listIdx));
    }

    // 질문 제목 입력 업데이트
    const inputQuestionTitle = (listIdx, title) => {
        console.log(listIdx);
        console.log(title);
        dispatch(CHANGE_QUE_TITLE({ listIdx, title }));
    }

    // 질문 응답 입력 업데이트
    const inputQuestionAnswer = (listIdx, answerIdx, answer) => {
        dispatch(CHANGE_QUE_ANSWER({ listIdx, answerIdx, answer }));
    }

    // 질문 옵션 체크 업데이트
    const checkOption = (listIdx, optIdx) => {
        dispatch(CHECK_OPT({ listIdx, optIdx }));
    }
    return (
        <div className="create-survey-card">
            <input type="text" placeholder="질문을 입력하세요" value={questionCard.title} onChange={(e) => inputQuestionTitle(listIdx, e.target.value)} />
            {
                questionCard.answers.map((answer, answerIdx) =>
                    <div key={answerIdx}>
                        <input type="text" placeholder="답변을 입력하세요" value={answer} onChange={(e) => inputQuestionAnswer(listIdx, answerIdx, e.target.value)} />
                        <button type="button" onClick={() => delAnswer(listIdx, answerIdx)}>응답 지우기</button>
                    </div>
                )
            }
            <button type="button" onClick={() => addAnswer(listIdx)}>응답 추가</button>
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

export default ChoiceCard;