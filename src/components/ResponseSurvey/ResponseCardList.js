import { useSelector } from "react-redux";

import ChoiceCard from "./ResponseCards/ChoiceCard";
import SubjectiveCard from "./ResponseCards/SubjectiveCard";

import "../../css/ResponseSurveyPage.css";

// └응답용 질문 카드 컴포넌트 리스트
//   └질문 카드 컴포넌트(유형별 다른 컴포넌트)
//   └질문 추가 컴포넌트

const QuestionCardList = function () {
    const questionCardList = useSelector(state => state.responseSurvey.questionCardList);

    return (
        <div className="response-survey-cardlist">
            {
                questionCardList.map((questionCard, listIdx) => {
                    if (questionCard.type === 1) {
                        return <ChoiceCard questionCard={questionCard} listIdx={listIdx} key={listIdx} />
                    }
                    else {
                        return <SubjectiveCard questionCard={questionCard} listIdx={listIdx} key={listIdx} />
                    }
                }

                )
            }
        </div>
    )
}

export default QuestionCardList;