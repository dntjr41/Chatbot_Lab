import { useDispatch } from "react-redux";
import { addCardAction } from "../../modules/createSurveySlice";


import "../../css/CreateSurveyPage.css";

// └질문 추가 컴포넌트
//   └질문 추가 버튼, 질문 유형 리스트 팝업

const AddQuestionComponent = function () {
    const dispatch = useDispatch();

    // 질문 카드 추가
    const addCard = () => {
        dispatch(addCardAction());
    }

    return (
        <>
            <button type="button" onClick={addCard}>질문 추가</button>
        </>
    )
}

export default AddQuestionComponent;