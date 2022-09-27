import ListGroup from 'react-bootstrap/ListGroup';

function QuestionnaireSetting(props) {
    function preview () {
        console.log("preview");
        alert('You clicked preview');
    }
    function surveyCopy () {
        console.log("surveyCopy");
        alert('You clicked survey Copy');
    }
    function surveyAlter () {
        console.log("surveyAlter");
        alert('You clicked survey Alter');
    }
    function surveyDelete () {
        console.log("surveyDelete");
        alert('You clicked survey Delete');
    }
    function surveyResultAnalysis () {
        console.log("surveyResultAnalysis");
        alert('You clicked survey Result Analysis');
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