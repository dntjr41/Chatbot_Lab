import { useDispatch, useSelector } from "react-redux";
import { addAnswerAction, delAnswerAction, delCardAction, changeQuestionTitleAction, changeQuestionAnswerAction, checkOptionAction } from "../../modules/createSurveySlice";

import AddQuestionComponent from "./AddQuestionComponent";

import "../../css/CreateSurveyPage.css";

// └질문 카드 컴포넌트 리스트
//   └질문 카드 컴포넌트(유형별 다른 컴포넌트)
//   └질문 추가 컴포넌트

// 해야할 일: 카드 컴포넌트로 분리 시켜서 보여주기

const QuestionCardList = function () {
    const dispatch = useDispatch();
    const questionCardList = useSelector(state => state.createSurvey.questionCardList);

    // 객관식 응답선택지를 추가
    const addAnswer = (listIdx) => {
        dispatch(addAnswerAction(listIdx));
    }

    // 객관식 응답 선택지 삭제
    const delAnswer = (listIdx, answerIdx) => {
        dispatch(delAnswerAction({ listIdx, answerIdx }));
    }

    //질문 카드 삭제
    const delCard = (listIdx) => {
        dispatch(delCardAction(listIdx));
    }

    // 질문 제목 입력 업데이트
    const inputQuestionTitle = (listIdx, title) => {
        dispatch(changeQuestionTitleAction({ listIdx, title }));
    }

    // 질문 응답 입력 업데이트
    const inputQuestionAnswer = (listIdx, answerIdx, answer) => {
        dispatch(changeQuestionAnswerAction({ listIdx, answerIdx, answer }));
    }

    // 질문 옵션 체크 업데이트
    const checkOption = (listIdx, optIdx) => {
        dispatch(checkOptionAction({ listIdx, optIdx }));
    }

    return (
        <div className="questionCardListLayout">
            {
                questionCardList.map((questionCard, listIdx) =>
                    <div key={listIdx} className="questionCardLayout">
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
            <AddQuestionComponent />
        </div>
    )
}

export default QuestionCardList;