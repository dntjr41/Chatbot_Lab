import '../css/ServicePage.css';
import Header from "../components/Header";
import { Row, Col, Container} from 'react-bootstrap';

// 고객 센터 페이지
// └헤더

const ServicePage = function () {
    return (
        <div className="servicePage">
            <Header color="purple"/>

            <Container className="MainFrame">
                <Col><h3>고객 센터</h3></Col>
                
                <div className="SubFrame">

                </div>
            </Container>
        </div>
    )
}

export default ServicePage;