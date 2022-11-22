import { Col, Table } from "react-bootstrap";

const SubjectiveAnaly = function ({ statCard }) {
    return (
        <div className="survey-result-stat">
            <Col className="mb-5 fs-4 fw-bold">Q{statCard.questionOrder}. {statCard.title}</Col>
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

export default SubjectiveAnaly;