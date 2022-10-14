import { Col, Stack } from "react-bootstrap";
import StatisticChart from "./StatisticChart";
// 응답 카드 컴포넌트(객관식)

const ChoiceStat = function ({ statCard }) {
    let total = 0;
    total = statCard.answers.reduce(function add(sum, answer) {
        return sum + answer.cnt;
    }, 0);

    return (
        <div className="survey-result-stat">
            <Col className="mb-5 fs-4">Q{statCard.questionOrder}. {statCard.title}</Col>
            {
                statCard.answers.map((answer, answerIdx) =>
                    <Stack className="survey-result-choiceAnswer mb-4 fs-5" key={answerIdx} direction="horizontal">
                        <div className="survey-result-choiceBar" style={{ width: "inherit*" + (answer.cnt / total * 100) + "%" }} />
                        <div>{answer.value}</div>
                        <div className="ms-auto">{(answer.cnt / total * 100).toFixed(1) + "%"}</div>
                    </Stack>
                )
            }
            <StatisticChart data={statCard.answers} />
        </div>
    )
}

export default ChoiceStat;

