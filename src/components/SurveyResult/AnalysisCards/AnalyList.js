import { ProgressBar, Col, Table } from "react-bootstrap";
import AnalysisCardList from "../AnalysisCardList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnalyCss.css';

import smile from "../../../images/emoticon/smile.png"
import neutral from "../../../images/emoticon/expressionless.png";
import bad from "../../../images/emoticon/bad.png"

const AnalyList = function ( props ) {
    var sent = props.values.sentiment;
    var imageSrc;
    var value_posi = props.values.positive.toFixed(3);
    var value_nega = props.values.negative.toFixed(3);
    var value_neut = props.values.neutral.toFixed(3);

    switch (sent) {
        case 'positive' :
            sent = '긍정적인'
            imageSrc = smile
            break;

        case 'negative' :
            sent = '부정적인'
            imageSrc = bad
            break;

        case 'neutral' :
            sent = '중립적인'
            imageSrc = neutral
            break;
        
        default:
    }

    const data = {
        labels: ['긍정', '부정', '중립'],
        datasets: [
          {
            label: ['긍정', '부정', '중립'],
            data: [value_posi, value_nega, value_neut],
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: [
              "rgba(52, 226, 0, 1)",
              "rgba(238, 102, 121, 1)",
              "rgba(255, 198, 0, 1)"
            ],
            fill: true
          },
        ],
    }

    return (
        <div className="survey-result-stat">
            <Col className="mb-5 fs-4 fw-bold">Q - {props.values.title}</Col>
            <Col className="mb-5 fs-4 fw-bold">키워드 추출 (Keyword Extraction) <br></br>
            키워드 (Keyword): <span className='highlight'>{props.values.keyword}
            </span> / 비율 (Weight): <span className="highlight">{props.values.weight}</span></Col>

            <Col className="mb-5 fs-4 fw-bold">감정 분석 (Sentiment Analysis) - 감정 (Sentiment): <span className="highlight">{sent}</span> <img className="emoticon" src={imageSrc}></img>
            <br></br> 비율 (Percent %): 긍정 <span className="highlight-positive">{value_posi}</span> / 부정 <span className="highlight-negative">{value_nega}</span> / 중립 <span className="highlight-neutral">{value_neut}</span>
            <br></br> <br></br>
            
            <ProgressBar>
                <ProgressBar now={value_posi} variant="success" label={value_posi+'% - 긍정'} />
                <ProgressBar now={value_nega} variant="danger" label={value_nega+'% - 부정'} />
                <ProgressBar now={value_neut} variant="warning" label={value_neut+'% - 중립'} />    
            </ProgressBar>
      
            </Col>
        </div>
    )
}

export default AnalyList;