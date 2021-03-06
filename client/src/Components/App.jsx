import React from 'react';
import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import FindTable from './FindTable.jsx';
import Date from './Date.jsx';
// import styled from 'styled-components';

const Div = window.styled.div`
  width: 300px;
  border: 1px solid white;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  padding: 20px;
  margin: 20px;
`;

const H1 = window.styled.h3`
  font-family: Oswald;
  font-size: 21px;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 4px
`;
const Select = window.styled.select`
  cursor: pointer;
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
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      reservation: '',
      partySize: 0,
      date: ''
    };
    this.gettingTime = this.gettingTime.bind(this);
    this.gettingSize = this.gettingSize.bind(this);
  }
  componentDidMount() {
    this.getReservation();
  }
  gettingTime(times) {
    this.setState({
      time: times
    }, () => { console.log('new state: ', this.state.time); });
    console.log('from app, the value being passed in: ', times);
  }
  getReservation() {
    let url = window.location.href.split('/');
    let id = url[length - 2];
    fetch(`http://localhost:3001/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            reservation: result
          });
        },
        (error) => { console.log('error'); }
      );
  }
  gettingSize(size) {
    this.setState({
      partySize: size
    }, () => {
      console.log(this.state.partySize);
    });
  }

  render() {
    return (
      <Div>
        <H1>Make a reservation</H1>
        <PartySize Select={Select} gettingSize={this.gettingSize} />
        <Time Select={Select} gettingTime={this.gettingTime} />
        <Date Select={Select}/>
        <FindTable time={this.state.time} />
      </Div>
    );
  }
}

export default App;