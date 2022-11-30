import { Col, Table } from "react-bootstrap";
import AnalysisCardList from "../AnalysisCardList";

const AnalyList = function ( props ) {
    console.log(props.values.sentiment);

    return (
        <div className="survey-result-stat">
            <Col className="mb-5 fs-4 fw-bold">Q - {props.values.title}</Col>
            <Col className="mb-5 fs-4 fw-bold">키워드 추출 (Keyword Extraction) - 키워드 (Keyword): {props.values.keyword} 
            | 비율 (Weight): {props.values.weight}</Col>
            <Col className="mb-5 fs-4 fw-bold">감정 분석 (Sentiment Analysis) - 감정 (Sentiment): {props.values.sentiment} <br></br>
            비율 긍정: {props.values.positive} / 부정: {props.values.negative} / 중립: {props.values.neutral} 
            </Col>
        </div>
    )
}

export default AnalyList;