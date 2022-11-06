import { DateRange } from 'react-date-range';
import React, { useState } from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Col, Container } from 'react-bootstrap';
import './Calender.css';

import { useNavigate } from 'react-router-dom';

export default function Calendar() {

  const navigate = useNavigate();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      startT: '',
      endT: ''
    }
  ]);

  let startDateValue = state[0].startDate.toISOString().slice(0, 11);
  let endDateValue = state[0].endDate.toISOString().slice(0, 11);

  const startTimeBtn = (params, e) => {
    startDateValue = startDateValue + params + ":00:00.000Z";
  }

  const endTimeBtn = (params, e) => {
    endDateValue = endDateValue + params + ":00:00.000Z";
  }

  const setSurveyTime = () => {
    navigate("/set-survey-per-tar", { state: { surveyStart: startDateValue, surveyEnd: endDateValue } });

    console.log(startDateValue);
    console.log(endDateValue);
  }

  return (
    <div>
      <Col className="periodNavigationFrame">
        <DateRange months={2} direction={"horizontal"}
          onChange={item => setState([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={state} />
      </Col>

      <Container >
        <Col className="periodNavigationTime">
          <Col><Dropdown title="시작 시간 선택" position='right'> <Dropdown.Item>오전(AM)
            <Dropdown.Submenu className="AM" position='right'>
              <Dropdown.Item onClick={(e) => { startTimeBtn("01", e) }} children="1:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("02", e) }} children="2:00" />
              <Dropdown.Item onClick={(e) => { startTimeBtn("03", e) }} children="3:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("04", e) }} children="4:00" />
              <Dropdown.Item onClick={(e) => { startTimeBtn("05", e) }} children="5:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("06", e) }} children="6:00" />
              <Dropdown.Item onClick={(e) => { startTimeBtn("07", e) }} children="7:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("08", e) }} children="8:00" />
              <Dropdown.Item onClick={(e) => { startTimeBtn("09", e) }} children="9:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("10", e) }} children="10:00" />
              <Dropdown.Item onClick={(e) => { startTimeBtn("11", e) }} children="11:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("12", e) }} children="12:00" />
            </Dropdown.Submenu></Dropdown.Item>
            <Dropdown.Item >오후(PM)
              <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e) => { startTimeBtn("13", e) }} children="1:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("14", e) }} children="2:00" />
                <Dropdown.Item onClick={(e) => { startTimeBtn("15", e) }} children="3:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("16", e) }} children="4:00" />
                <Dropdown.Item onClick={(e) => { startTimeBtn("17", e) }} children="5:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("18", e) }} children="6:00" />
                <Dropdown.Item onClick={(e) => { startTimeBtn("19", e) }} children="7:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("20", e) }} children="8:00" />
                <Dropdown.Item onClick={(e) => { startTimeBtn("21", e) }} children="9:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("22", e) }} children="10:00" />
                <Dropdown.Item onClick={(e) => { startTimeBtn("23", e) }} children="11:00" /><Dropdown.Item onClick={(e) => { startTimeBtn("24", e) }} children="12:00" />
              </Dropdown.Submenu></Dropdown.Item>
          </Dropdown></Col>

          <Col><Dropdown title="종료 시간 선택" position='right'> <Dropdown.Item>오전(AM)
            <Dropdown.Submenu className="AM" position='right'>
              <Dropdown.Item onClick={(e) => { endTimeBtn("01", e) }} children="1:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("02", e) }} children="2:00" />
              <Dropdown.Item onClick={(e) => { endTimeBtn("03", e) }} children="3:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("04", e) }} children="4:00" />
              <Dropdown.Item onClick={(e) => { endTimeBtn("05", e) }} children="5:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("06", e) }} children="6:00" />
              <Dropdown.Item onClick={(e) => { endTimeBtn("07", e) }} children="7:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("08", e) }} children="8:00" />
              <Dropdown.Item onClick={(e) => { endTimeBtn("09", e) }} children="9:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("10", e) }} children="10:00" />
              <Dropdown.Item onClick={(e) => { endTimeBtn("11", e) }} children="11:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("12", e) }} children="12:00" />
            </Dropdown.Submenu></Dropdown.Item>
            <Dropdown.Item >오후(PM)
              <Dropdown.Submenu className="AM" position='right'>
                <Dropdown.Item onClick={(e) => { endTimeBtn("13", e) }} children="1:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("14", e) }} children="2:00" />
                <Dropdown.Item onClick={(e) => { endTimeBtn("15", e) }} children="3:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("16", e) }} children="4:00" />
                <Dropdown.Item onClick={(e) => { endTimeBtn("17", e) }} children="5:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("18", e) }} children="6:00" />
                <Dropdown.Item onClick={(e) => { endTimeBtn("19", e) }} children="7:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("20", e) }} children="8:00" />
                <Dropdown.Item onClick={(e) => { endTimeBtn("21", e) }} children="9:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("22", e) }} children="10:00" />
                <Dropdown.Item onClick={(e) => { endTimeBtn("23", e) }} children="11:00" /><Dropdown.Item onClick={(e) => { endTimeBtn("24", e) }} children="12:00" />
              </Dropdown.Submenu></Dropdown.Item>
          </Dropdown></Col>
        </Col>
        <Col><button className="periodOKButton" onClick={setSurveyTime}>기간 선택 완료</button></Col>
      </Container>
    </div>
  )
}