import React from 'react';

class SeatAdd extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update() {
    this.setState();
  }

  render() {
    return (<div>
      <h2>Add Your Seat</h2>
    </div>
    );
  }
}
export default SeatAdd;
