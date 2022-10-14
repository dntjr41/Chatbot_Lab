import { useSelector } from "react-redux";

import ChoiceCard from "./QuestionCards/ChoiceCard";
import SubjectiveCard from "./QuestionCards/SubjectiveCard";
import AddQuestionComponent from "./AddQuestionComponent";

import "../../css/CreateSurveyPage.css";

// └질문 카드 컴포넌트 리스트
//   └질문 카드 컴포넌트(유형별 다른 컴포넌트)
//   └질문 추가 컴포넌트

const QuestionCardList = function () {
    const questionCardList = useSelector(state => state.createSurvey.questionCardList);

    return (
        <div className="create-survey-cardlist">
            {
                questionCardList.map((questionCard, listIdx) => {
                    // 질문 유형ID 1: 객관식, 2: 객관식 이미지, 3: 드롭다운, 4: 주관식, 5: 감정바, 6: 날짜, 7: 시간 8: 동영상
                    if (questionCard.type === 1) {
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