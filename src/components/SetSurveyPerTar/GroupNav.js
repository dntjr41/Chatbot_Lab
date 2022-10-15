import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, Link } from "react-router-dom"; 
import { Row, Col, Button, Container } from 'react-bootstrap';

import { User } from "../SetSurveyPerTar/groupList/components/User"
import "./GroupNav.css";

const groupAddBtn = () => {
    alert("그룹 추가 버튼");
}

export default function GroupNav() {
    return (
        <div>
            <Container className="groupFrame">
                <Row className="groupButton">
                    <Col><button className="groupAddBtn">내 그룹</button></Col>                
                    <Col><button className="groupAddBtn" onClick={groupAddBtn}>그룹 추가</button></Col>
                </Row>

                <Row>
                    <User />
                </Row>
            </Container>

        </div>
    )
}