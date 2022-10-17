import { DateRange } from 'react-date-range';
import { Component } from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Row, Col, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

import SetSurveyPerTarPage from '../../pages/SetSurveyPerTarPage';
import { useDispatch, useSelector } from 'react-redux';
import './Calender.css';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import surveyInfo, { SET_PERIOD_START, SET_PERIOD_END } from '../../modules/surveyInfo';

export default function Calendar() {
  const dispatch = useDispatch();
  const surveyTimeStart = useSelector(surveyInfo => surveyInfo.surveyTime);
  const surveyTimeEnd = useSelector(surveyInfo => surveyInfo.surveyTime);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      startT: '',
      endT: ''
    }
  ]);

  var startDateValue = state[0].startDate;
  var endDateValue = state[0].endDate;

  const startTimeBtn = (params, e) => {
    startDateValue = startDateValue.setHours(params);

    dispatch(SET_PERIOD_START(startDateValue));
    console.log(startDateValue);
  }
  
  const endTimeBtn = (params, e) => {
    endDateValue = endDateValue.setHours(params);

    dispatch(SET_PERIOD_END(endDateValue));
    console.log(endDateValue);
  }

  return (
  <div>
      <Col className="periodNavigationFrame">
          <DateRange months={2} direction={"horizontal"}
          onChange={item => setState([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={state}/>
        </Col>
      
      <Container >
        <Col className="periodNavigationTime">
        <Col><Dropdown title="시작 시간 선택" position='right'> <Dropdown.Item>오전(AM)
            <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("1", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("2", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("3", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("4", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("5", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("6", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("7", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("8", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("9", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("10", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("11", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("12", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
            <Dropdown.Item >오후(PM)
            <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("13", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("14", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("15", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("16", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("17", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("18", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("19", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("20", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("21", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("22", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("23", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("24", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
        </Dropdown></Col>


        <Col><Dropdown title="종료 시간 선택" position='right'> <Dropdown.Item>오전(AM)
        <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("1", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("2", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("3", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("4", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("5", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("6", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("7", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("8", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("9", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("10", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("11", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("12", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
            <Dropdown.Item >오후(PM)
            <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("13", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("14", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("15", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("16", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("17", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("18", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("19", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("20", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("21", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("22", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("23", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("24", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
        </Dropdown></Col>
        </Col>
      </Container>
    </div>
  )
}