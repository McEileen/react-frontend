import React from 'react';

class SeatAdd extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.url = 'http://localhost:3310/seats';
  }


  update() {
    const number = this.refs.number.value;
    const section = this.refs.section.value;
    const price = this.refs.price.value;

    const data = {
      number,
      section,
      price,
    };

    fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      } })
      .then(r => r.json())
      .then(j => {
        console.log('json:', j);
      })
  }

  render() {
    return (<div>
      <h2>Add Seats to a Section</h2>
      Number of Seats <input ref="number" type="number" />
      Section <input ref="section" type="string" />
      Price <input ref="price" type="number" />
      <button ref="addBtn" onClick={this.update}>add</button>
    </div>
    );
  }
}
export default SeatAdd;
