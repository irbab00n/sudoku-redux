import React from 'react';

export default class PuzzleSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: ''
    };
    this.updateValue = this.updateValue.bind(this);
    this.updatePlaceholder = this.updatePlaceholder.bind(this);
    this.replaceValueWithPlaceholder = this.replaceValueWithPlaceholder.bind(this);
  }

  updateValue(keyCode) {
    if (keyCode === 8) {
      this.setState({
        value: '',
        placeholder: ''
      }, () => this.props.actions.updatePuzzleSquare(this.props.coordinates, this.state.value));
    }
    let keyValue = String.fromCharCode(keyCode);
    let values = '123456789';
    if (values.includes(keyValue)) {
      this.setState({
        value: keyValue,
        placeholder: ''
      }, () => this.props.actions.updatePuzzleSquare(this.props.coordinates, this.state.value));
    }
  }

  updatePlaceholder(value) {
    let newPlaceholder = value === '' ? '' : value;
    this.setState({
      placeholder: newPlaceholder,
      value: ''
    });
  }

  replaceValueWithPlaceholder() {
    if (this.state.placeholder !== '') {
      this.setState({
        value: this.state.placeholder,
        placeholder: ''
      });
    }
  }

  render() {

    let coordinates = this.props.coordinates.split('-')
    let row = coordinates[0];
    let column = coordinates[1];

    return (

      <div className="grid-item fh fw display-flex-row flex-align-center flex-justify-center">
        <input 
          className={`puzzle-box ${this.props.background}`} 
          placeholder={this.state.placeholder} 
          value={this.state.value} 
          onKeyDown={(e) => {this.updateValue(e.keyCode)}}
          onFocus={() => this.updatePlaceholder(this.state.value)} 
          onBlur={() => this.replaceValueWithPlaceholder()}
        />
      </div>

    );

  }

}

// when the user clicks into the form field, we want to take the current value and place it as the placeholder, then change the value back to ''
// this will save the old value
// when the user un-selects the form field, if