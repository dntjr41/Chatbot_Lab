import { DateRange } from 'react-date-range';
import { Component } from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Row, Col, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

class CalendarComponent extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    };
  };

  startDateMoment = "";
  endDateMoment = "";
  
  onRangeChange = (ranges) => {
    this.setState({
        startDate:ranges['selection'].startDate,
        endDate:ranges['selection'].endDate,
        key:ranges['selection'].key,
    });

    this.startDateMoment = moment(this.state.startDate).format('YYYY-MM-DD-HH:MM');
    this.endDateMoment = moment(this.state.endDate).format('YYYY-MM-DD-HH:MM');
  }

  startTimeBtn = (params, e) => {
    this.startDateMoment = moment(this.state.startDate).format('YYYY-MM-DD-')+params;
  }

  endTimeBtn = (params, e) => {
    this.endDateMoment = moment(this.state.endDate).format('YYYY-MM-DD-')+params;
    console.log(this.startDateMoment);
    console.log(this.endDateMoment);
  }

  render() {    
    return (
        <div>
            <Container>
                <Row className="periodBtnNav">
                <Col><Dropdown title="시작 시간 선택" position="right"> <Dropdown.Item>오전(AM)
                    <Dropdown.Submenu className="AM">
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("1:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("2:00", e)}} children="2:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("3:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("4:00", e)}} children="4:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("5:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("6:00", e)}} children="6:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("7:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("8:00", e)}} children="8:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("9:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("10:00", e)}} children="10:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("11:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("12:00", e)}} children="12:00"/>         
                    </Dropdown.Submenu></Dropdown.Item>
                    <Dropdown.Item >오후(PM)
                    <Dropdown.Submenu className="AM">
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("13:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("14:00", e)}} children="2:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("15:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("16:00", e)}} children="4:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("17:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("18:00", e)}} children="6:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("19:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("20:00", e)}} children="8:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("21:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("22:00", e)}} children="10:00"/>
                        <Dropdown.Item onClick={(e)=>{this.startTimeBtn("23:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{this.startTimeBtn("24:00", e)}} children="12:00"/>         
                    </Dropdown.Submenu></Dropdown.Item>
                </Dropdown></Col>

                <Col><Dropdown title="종료 시간 선택" position="right"> <Dropdown.Item>오전(AM)
                <Dropdown.Submenu className="AM">
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("1:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("2:00", e)}} children="2:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("3:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("4:00", e)}} children="4:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("5:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("6:00", e)}} children="6:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("7:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("8:00", e)}} children="8:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("9:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("10:00", e)}} children="10:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("11:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("12:00", e)}} children="12:00"/>         
                    </Dropdown.Submenu></Dropdown.Item>
                    <Dropdown.Item >오후(PM)
                    <Dropdown.Submenu className="AM">
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("13:00", e)}} children="1:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("14:00", e)}} children="2:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("15:00", e)}} children="3:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("16:00", e)}} children="4:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("17:00", e)}} children="5:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("18:00", e)}} children="6:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("19:00", e)}} children="7:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("20:00", e)}} children="8:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("21:00", e)}} children="9:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("22:00", e)}} children="10:00"/>
                        <Dropdown.Item onClick={(e)=>{this.endTimeBtn("23:00", e)}} children="11:00"/><Dropdown.Item onClick={(e)=>{this.endTimeBtn("24:00", e)}} children="12:00"/>         
                    </Dropdown.Submenu></Dropdown.Item>
                </Dropdown></Col>
                </Row>
                
                <Row className="periodBtnNav">
                    <DateRange editableDateInputs={true} onChange={this.onRangeChange}
                    moveRangeOnFirstSelection={false} ranges={[this.state]} />
                </Row>
            </Container>
        </div>
    )
  }
}

export default CalendarComponent;