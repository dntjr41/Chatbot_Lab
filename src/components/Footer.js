import React from 'react';
import {Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div id="main-footer" className="text-center p-2"> 
            <Row>
                <Col>
                    <p>
                        <Link to="/tos" className="footer-tos" >이용약관 </Link>
                        <Link to="/service-center" className="footer-service" >고객센터 </Link>
                        <Link to="/privacy-policy" className="footer-privacy" >개인정보처리방침 </Link>
                        <Link to="/faq" className="footer-faq" >FAQ </Link>
                        Copyright &copy; <span>{thisYear()}</span>
                        
                    </p>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;