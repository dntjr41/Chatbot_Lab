import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Container } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dropdown from 'react-multilevel-dropdown';

import "./PeriodNav.css";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Calendar from '../SetSurveyPerTar/Calender.js';


const startDateBtn = () => {
  alert("설문 시작일 버튼 클릭");
}

const startTimeBtn = () => {
  alert("설문 시작 시간 버튼 클릭");
}

const endDateBtn = () => {
  alert("설문 종료일 버튼 클릭");
}

const endTimeBtn = () => {
  alert("설문 종료 시간 버튼 클릭");
}

const periodBtn = () => {
  alert("기간 설정 완료 버튼 클릭");
}

export default function PeriodNav() {
  return (
    <div>
      <Container>
        <Row className="periodText">
          <Col><text className="periodTxt">설문 시작일 설정</text></Col>
          <Col><text className="periodTxt">설문 종료일 설정</text></Col>
        </Row>

        <Row><Calendar className="peroidText"/></Row>
      </Container>
    </div>
  )
}