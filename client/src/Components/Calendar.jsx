import React from 'react';
import moment from 'moment';
import { thisExpression } from '@babel/types';

const weekdaysShort = moment.weekdaysShort();
const weekdays = moment.weekdays();
const months = moment.months();

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false
    };
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
  render() {    
    let weekdays = weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">{day}</td>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80} className='calendar-day empty'>{''}</td>
      );
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d === this.currentDay() ? 'day current-day' : 'day');
      daysInMonth.push(
        <td key={d} className={className}>
          <span>{d}</span>
        </td>
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
        <tr key={i * 100}>
          {data}
        </tr>
      );
    });
    console.log('blanks: ', blanks);
    return (
      <div>
        <h2>Calendar</h2>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  } 
}

export default Calendar;


// {weekdaysShort.map((day) => 
//   <th key={day} className='weekday'>
//     {day}
//   </th>
// )}