import ListGroup from 'react-bootstrap/ListGroup';

function QuestionnaireSetting(props) {
    // to responseSurveyPage
    function preview () {
        console.log("preview");
    }
    function surveyCopy () {
        console.log("surveyCopy");
        // get survey info
        // create survey info & questionlist
    }
    // to CreateSurveyPage
    function surveyAlter () {
        console.log("surveyAlter");
    }
    function surveyDelete () {
        console.log("surveyDelete");
        // TODO axios api delete survey & involved questionlist & involved answer list
    }
    function surveyResultAnalysis () {
        console.log("surveyResultAnalysis");
    }
        
    return (
        <ListGroup>
        <ListGroup.Item action onClick={preview} >
            설문 보기
        </ListGroup.Item >
        <ListGroup.Item action onClick={surveyCopy} >
            설문 복사 
        </ListGroup.Item>
        <ListGroup.Item action onClick={surveyAlter} >
            설문 수정
        </ListGroup.Item>
        <ListGroup.Item action onClick={surveyDelete} >
            설문 삭제
        </ListGroup.Item>
        <ListGroup.Item action onClick={surveyResultAnalysis} disabled>
            결과 분석
        </ListGroup.Item>
        </ListGroup>
    )
}

export default QuestionnaireSetting