import React from 'react';

class PartySize extends React.Component {
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
    console.log('handle change, target value: ', event.target.value);
    this.props.gettingPartySize(event.target.value);
  }
  render() {
    let partySize = [];
    for (let i = 2; i < 8; i++) {
      partySize.push(i);
    }
    return (
      <div>
        <span style={{fontWeight: 'bold'}}>Party Size </span><br />
        <select value={this.state.value} onChange={this.handleChange}>
          {partySize.map((item) =>
            <option>{item}</option>
          )}
        </select>
      </div>
    );
  }
}

export default PartySize;