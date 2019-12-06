import React from 'react';
import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import FindTable from './FindTable.jsx';
import Date from './Date.jsx';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px;
  border: 1px solid white;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  padding: 50px;
  margin: 20px;
`;

const H1 = styled.h3`
  font-family: Oswald;
  font-size: 21px;
  // text-decoration-line: underline;
  border-bottom: 1px solid #d8d9db; 
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.gettingPartySize = this.gettingPartySize.bind(this);
  }
  gettingPartySize(size) {
    console.log('Hi Im from App', size);
  }
  render() {
    return (
      <Div>
        <H1>Make a reservation</H1>
        <PartySize gettingPartySize={this.gettingPartySize}/>
        <Time />
        <Date />
        <FindTable />
      </Div>
    );
  }
}

export default App;