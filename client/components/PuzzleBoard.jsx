import React from 'react';
import PuzzleSquare from './PuzzleSquare.jsx';

export default class PuzzleBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buildPuzzle = this.buildPuzzle.bind(this);
  }
  
  buildPuzzle() {
    let size = 8;
    let row = 0;
    let column = 0;
    let elements = [];
    while (true) {
      let connectedElement = <PuzzleSquare key={`${row}${column}`} coordinates={`${row}-${column}`} actions={this.props.actions}/>
      elements.push(connectedElement);
      if (column === size && row === size) {
        break;
      }
      column === size ? (column = 0, row++): column++;
    }
    return elements;
  }

  render() {

    return (

        <div className="puzzle-grid">
          {this.buildPuzzle()}
        </div>

    );

  }
}