import Nav from 'react-bootstrap/Nav';

const questionnaireTemplateNav = (props) => {
    return(
        <Nav justify variant="tabs">
            <Nav.Item>
                <Nav.Link >설문 템플릿</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >이전 템플릿</Nav.Link>
            </Nav.Item>
      </Nav>
    )
}
export default questionnaireTemplateNav