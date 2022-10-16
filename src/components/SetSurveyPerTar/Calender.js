import { DateRange } from 'react-date-range';
import { Component } from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Row, Col, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useState } from 'react';

import SetSurveyPerTarPage from '../../pages/SetSurveyPerTarPage';
import { useDispatch } from 'react-redux';
import './Calender.css';

export default function Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      startT: '',
      endT: ''
    }
  ]);

  const startTimeBtn = (params, e) => {
    console.log(params);
  }
  

  const endTimeBtn = (params, e) => {
    console.log(params);
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
                <Dropdown.Item onClick={(e)=>{startTimeBtn("1:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("2:00", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("3:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("4:00", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("5:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("6:00", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("7:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("8:00", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("9:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("10:00", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("11:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("12:00", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
            <Dropdown.Item >오후(PM)
            <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("13:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("14:00", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("15:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("16:00", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("17:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("18:00", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("19:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("20:00", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("21:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("22:00", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{startTimeBtn("23:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{startTimeBtn("24:00", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
        </Dropdown></Col>
        <Col className="timeText" onChange={state.startT}></Col>

        <Col><Dropdown title="종료 시간 선택" position='right'> <Dropdown.Item>오전(AM)
        <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("1:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("2:00", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("3:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("4:00", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("5:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("6:00", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("7:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("8:00", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("9:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("10:00", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("11:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("12:00", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
            <Dropdown.Item >오후(PM)
            <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("13:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("14:00", e)}} children="2:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("15:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("16:00", e)}} children="4:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("17:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("18:00", e)}} children="6:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("19:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("20:00", e)}} children="8:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("21:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("22:00", e)}} children="10:00"/>
                <Dropdown.Item onClick={(e)=>{endTimeBtn("23:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{endTimeBtn("24:00", e)}} children="12:00"/>         
            </Dropdown.Submenu></Dropdown.Item>
        </Dropdown></Col>
        <Col className="timeText">{state.endT}</Col>
        </Col>
      </Container>
    </div>
  )
}