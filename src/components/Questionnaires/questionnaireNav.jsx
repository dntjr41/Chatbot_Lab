import Nav from 'react-bootstrap/Nav';


function QuestionnaireNav(props) {
    return(
        <Nav activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">전체</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">제작 중</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">예약 중</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">배포 중</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled">종료</Nav.Link>
            </Nav.Item>
      </Nav>
    )
}
export default QuestionnaireNav