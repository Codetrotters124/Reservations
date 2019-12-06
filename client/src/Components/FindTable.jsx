import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #da3743;
  border: none;
  color: white;
  margin-top: 0.5em;
  padding: .75rem 1rem;
  text-align: center;
  align-items: flex-start;
  font-weight: 500;
  display: inline-block;
  border-radius: 2px;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  &:hover {
    opacity: 0.7;
  }
`;

class FindTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button>Find Table</Button>
      </div>
    );
  }
}

export default FindTable;