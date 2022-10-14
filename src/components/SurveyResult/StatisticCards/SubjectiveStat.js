// 응답 카드 컴포넌트(주관식)

import { Col, Table } from "react-bootstrap";

const SubjectiveStat = function ({ statCard }) {
    return (
        <div className="survey-result-stat">
            <Col className="mb-5 fs-4">Q{statCard.questionOrder}. {statCard.title}</Col>
            <div className="survey-result-subjectiveAnswer mb-4 fs-5">
                <Table striped bordered hover>
                    <tbody  >
                        {
                            statCard.answers.map((answer, answerIdx) => {
                                return <tr className="py-1" key={answerIdx}><td>{answer.value}</td></tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>

        </div >
    )
}

export default SubjectiveStat;