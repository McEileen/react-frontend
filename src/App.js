import SeatAdd from './SeatAdd.js';
import React from 'react';

class Concert extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update() {
    this.setState();
  }

  render() {
    return (<div>
      <h1>Uptown Concerts! </h1>
      <h2>Our Venue</h2>
      <SeatAdd />
    </div>
    );
  }
}
export default Concert;
