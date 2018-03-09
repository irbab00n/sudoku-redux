import React from 'react';

export default class PuzzleSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    let values = '123456789';
    if (values.includes(e.target.value) && e.target.value.length < 2) {
      this.setState({
        value: e.target.value
      }, () => this.props.actions.updatePuzzleSquare(this.props.coordinates, this.state.value));
    }
  }

  render() {

    let coordinates = this.props.coordinates.split('-')
    let row = coordinates[0];
    let column = coordinates[1];

    return (

      <div className="grid-example fh fw display-flex-row flex-align-center flex-justify-center">
        <input className="puzzle-box" value={this.state.value} onChange={(e) => {this.updateValue(e)}}/>
      </div>

    );

  }

}