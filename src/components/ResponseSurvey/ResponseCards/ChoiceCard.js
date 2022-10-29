import { useDispatch } from "react-redux";
import { ANS_CHOICE_CHECK, ANS_CHOICE_RADIO } from "../../../modules/responseSurveySlice";

import "../../../css/ResponseSurveyPage.css";

import { Form, Col } from "react-bootstrap";


// 질문 카드 컴포넌트(객관식)
const ChoiceCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    // 객관식 응답 선택 업데이트
    // listIdx(int): 질문 리스트의 몇번째인지, answerIdx(int): 응답 리스트의 몇번째인지
    const answerCheck = (listIdx, answerIdx) => {
        dispatch(ANS_CHOICE_CHECK({ listIdx, answerIdx }))
    }

    const answerRadio = (listIdx, answerIdx) => {
        dispatch(ANS_CHOICE_RADIO({ listIdx, answerIdx }))
    }

    return (
        <div className="response-survey-card">
            <Col className="mb-5 fs-4 fw-bold">Q{questionCard.questionOrder}. {questionCard.questionTitle} {questionCard.questionOptions[1] ? "(중복가능)" : ""}</Col>
            {
                questionCard.questionAnswers.map((answer, answerIdx) =>
                    <Form.Check
                        key={answerIdx}
                        className="response-survey-choice mb-3 fs-5"
                        name={questionCard.questionId}
                        type={questionCard.questionOptions[1] ? "checkbox" : "radio"}
                        id={questionCard.questionId + "-" + answerIdx}
                        label={answer.value}
                        checked={answer.isCheck}
                        onChange={() => (questionCard.questionOptions[1]) ? answerCheck(listIdx, answerIdx) : answerRadio(listIdx, answerIdx)} />

                )
            }
        </div >
    )
}

export default ChoiceCard;