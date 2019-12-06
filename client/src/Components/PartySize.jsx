import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: .875rem;
  font-weight: 500;
  padding-bottom: .25rem; 
`;
const Select = styled.select`
  cursor: pointer;
  font-family: inherit;
  background-color: #fff;
  font-size: .875rem;
  display: block;
  outline: none;
  border: none;
  width: 100%;
  height: 35px;
  -webkit-appearance: none;
  border-radius: 0;
  border-bottom: 1px solid #d8d9db;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
`;

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
        <Span style={{fontWeight: 'bold'}}>Party Size </Span><br />
        <Select value={this.state.value} onChange={this.handleChange}>
          {partySize.map((item) =>
            <option>{item}</option>
          )}
        </Select>
      </div>
    );
  }
}

export default PartySize;