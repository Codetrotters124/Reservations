import React from 'react';
import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import FindTable from './FindTable.jsx';
import Date from './Date.jsx';

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
      <div>
        <h1>Make a reservation</h1>
        <PartySize gettingPartySize={this.gettingPartySize}/>
        <Time />
        <Date />
        <FindTable />
      </div>
    );
  }
}

export default App;