import React from 'react';

let times = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'];

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '5:30 PM'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div>
        <span style={{fontWeight: 'bold'}}>Time </span><br />
        <select value={this.state.value} onChange={this.handleChange}>
          {times.map((item) =>
            <option>{item}</option>
          )}
        </select>
      </div>
    );
  }
}

export default Time;