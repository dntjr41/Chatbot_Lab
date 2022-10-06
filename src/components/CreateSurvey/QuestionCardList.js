import { useDispatch, useSelector } from "react-redux";
import { ADD_ANSWER, DEL_ANSWER, DEL_CARD, CHANGE_QUE_TITLE, CHANGE_QUE_ANSWER, CHECK_OPT } from "../../modules/createSurveySlice";

import ChoiceCard from "./QuestionCards/ChoiceCard";
import SubjectiveCard from "./QuestionCards/SubjectiveCard";
import AddQuestionComponent from "./AddQuestionComponent";

import "../../css/CreateSurveyPage.css";

// └질문 카드 컴포넌트 리스트
//   └질문 카드 컴포넌트(유형별 다른 컴포넌트)
//   └질문 추가 컴포넌트

// 해야할 일: 카드 컴포넌트로 분리 시켜서 보여주기

const QuestionCardList = function () {
    const questionCardList = useSelector(state => state.createSurvey.questionCardList);

    return (
        <div className="create-survey-cardlist">
            {
                questionCardList.map((questionCard, listIdx) => {
                    if (questionCard.type === "choice") {
                        return <ChoiceCard questionCard={questionCard} listIdx={listIdx} key={listIdx} />
                    }
                    else{
                        return <SubjectiveCard questionCard={questionCard} listIdx={listIdx} key={listIdx} />
                    }
                }

                )
            }
            <AddQuestionComponent />
        </div>
    )
}

export default QuestionCardList;