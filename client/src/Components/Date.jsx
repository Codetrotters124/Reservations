import React from 'react';

const dates = ['today', 'tomorrow', 'day after', 'next week', 'next month'];

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2'
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
        <span style={{fontWeight: 'bold'}}>Date </span><br />
        <this.props.Select value={this.state.value} onChange={this.handleChange}>
          {dates.map((date) =>
            <option>{date}</option>
          )}
        </this.props.Select>
      </div>
    );
  }
}

export default Date;