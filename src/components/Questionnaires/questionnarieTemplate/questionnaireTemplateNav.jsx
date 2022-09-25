import Nav from 'react-bootstrap/Nav';

const questionnaireTemplateNav = (props) => {
    return(
        <Nav activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">설문 템플릿</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">이전 템플릿</Nav.Link>
            </Nav.Item>
      </Nav>
    )
}
export default questionnaireTemplateNav