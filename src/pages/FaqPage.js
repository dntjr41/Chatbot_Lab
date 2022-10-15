import '../css/FaqPage.css';
import Header from "../components/Header";
import { Row, Col, Container} from 'react-bootstrap';

// FAQ 페이지
// └헤더

const FaqPage = function () {
    return (
        <div className="faqPage">
            <Header color="purple"/>

            <Container className="MainFrame">
                <Col><h3>FAQ</h3></Col>
    
                <div className="SubFrame">

                </div>
            </Container>
        </div>
    )
}

export default FaqPage;
