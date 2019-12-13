import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
const weekdaysShort = moment.weekdaysShort();
const weekdays = moment.weekdays();
const months = moment.months();
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';


const Div = styled.div`
  background-color: #f1f2f4;
  width: 100%;
  margin: 0px 1px;
  padding: 16px 0;
  border: 1px solid #d8d9db;
  font-family: BrandonText
`;
const Tbody = styled.tbody`
  border: 1px solid #d8d9db;
  display: table;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  font-weight: 500;
  background-clip: padding-box
`;
const Leftbutton = styled.div`
  float: left;
  margin-left: 20px;
  border: 1px solid #d8d9db;
  border-radius: 50px;
  // &:hover {
  //   border: red 2px solid;
  //   cursor: pointer
  // }
`;
const Rightbutton = styled.div`
  float: right;
  margin-right: 20px;
  border: 1px solid #d8d9db;
  border-radius: 50px;
  // &:hover {
  //   border: red solid;
  //   cursor: pointer
  // }
`;
const Span = styled.span`
  display: block;
  text-align: center;
`;
const Table = styled.table`
  width: 86%;
  margin: 0 auto;

`;
const Tr = styled.tr`
  display: table-row;
  border: 1px solid #d8d9db;
  background-color: #fff;
`;
const Td = styled.td`
&:hover {
  border: red 2px solid;
  cursor: pointer
}
`;

const Day = styled.tr`
  width: 100%;
  display: table-header-group
`;


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false
    };
    this.monthNav = this.monthNav.bind(this);
    this.SelectList = this.SelectList.bind(this);
    // this.yearNav = this.yearNav.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
  }
  year() {
    return this.state.dateObject.format('Y');
  }
  month() {
    return this.state.dateObject.format('MMMM');
  }
  daysInMonth() {
    return this.state.dateObject.daysInMonth();
  }
  currentDate() {
    return this.state.dateObject.get('date');
  }
  currentDay() {
    return this.state.dateObject.format('d');
  }
  firstDayOfMonth() {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  }
  setMonth(month) {
    let monthNum = months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateObject);
    dateContext = moment(dateContext).set('month', monthNum);
    this.setState({
      dateObject: dateContext
    });
  }
  onSelectChange(e, data) {
    this.setMonth(data);
    this.props.onChangeMonth() && this.props.onChangeMonth();
  }
  SelectList(props) {
    let popup = props.data.map((data) => {
      return (
        <div key={data}>
          <a href="#" onClick={(e) => { this.onSelectChange(e, data); }}>
            {data}
          </a>
        </div>
      );
    });
    return (
      <div>
        {popup}
      </div>
    );
  }
  // showYearEditor() {
  //   this.setState({
  //     showYearPopup: true
  //   });
  // }

  onChangeMonth(e, month) {
    let monthPopup = this.state.showMonthPopup;
    this.setState({
      showMonthPopup: !monthPopup
    });
  }
  monthNav() {
    return (
      <span
        onClick={(e) => { this.onChangeMonth(e, this.month()); }}>
        {this.month()}
        {this.state.showMonthPopup && <this.SelectList data={months} />}
      </span>
    );
  }
  nextMonth() {
    let dateContext = Object.assign({}, this.state.dateObject);
    dateContext = moment(dateContext).add(1, 'month');
    this.setState({
      dateObject: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  }
  previousMonth() {
    let dateContext = Object.assign({}, this.state.dateObject);
    dateContext = moment(dateContext).subtract(1, 'month');
    this.setState({
      dateObject: dateContext
    });
    this.props.onPreviousMonth && this.props.onPreviousMonth();
  }
  onDayClick(e, day) {
    this.props.onDayClick && this.props.onDayClick(e, day);
    console.log(day);
  }
  render() {
    let weekdays = weekdaysShort.map((day) => {
      return (
        <td key={day}>{day}
          <span onClick={(e) => { this.onDayClick(e, day); }}></span>
        </td>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80}>{''}</td>
      );
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d === this.currentDay() ? 'day current-day' : 'day');
      daysInMonth.push(
        <Td key={d}>
          <span onClick={(e)=> { this.onDayClick(e, d); }}>{d}</span>
        </Td>
      );
    }
    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    let trElems = rows.map((data, i) => {
      return (
        <Tr key={i * 100}>
          {data}
        </Tr>
      );
    });
    return (
      <Div>
        <Span>
          <Leftbutton onClick={this.previousMonth}> <GoChevronLeft onClick={() => this.previousMonth} /> </Leftbutton>
          <span>
            {this.month()} {this.year()}
          </span>
          <Rightbutton onClick={this.nextMonth}> <GoChevronRight onClick={() => this.nextMonth} /> </Rightbutton>
        </Span>
        <Table>
          <Tbody>
            <Day>
              {weekdays}
            </Day>
            {trElems}
          </Tbody>
        </Table>
      </Div>
    );
  }
}

export default Calendar;
