import { useDispatch } from "react-redux";
import { ANS_SUBJECTIVE_INPUT } from "../../../modules/responseSurveySlice";

import "../../../css/ResponseSurveyPage.css";
import { Form, Col } from "react-bootstrap";

// 질문 카드 컴포넌트(주관식)

const SubjectiveCard = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    // 주관식 응답 선택 업데이트
    // listIdx(int): 질문 리스트의 몇번째인지, answer(string): 입력한 응답 내용
    const inputAnswer = (listIdx, answer) => {
        dispatch(ANS_SUBJECTIVE_INPUT({ listIdx, answer }));
    }
    return (
        <div className="response-survey-card">
            <Col className="mb-5 fs-4">Q{questionCard.questionOrder}. {questionCard.title}</Col>
            <Form.Control
                className="response-survey-subjective fs-5"
                as="textarea"
                placeholder="답변을 입력해주세요"
                value={questionCard.answers}
                row={2}
                onChange={(e) => inputAnswer(listIdx, e.target.value)} />
        </div>
    )
}

export default SubjectiveCard;