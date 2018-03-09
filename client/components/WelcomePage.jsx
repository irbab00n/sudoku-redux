import React from 'react';

import PuzzleBoard from './PuzzleBoard.jsx';

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="fh fw display-flex-column flex-align-center page-body ">
        <h1 className="page-title no-select">
          Welcome to Sudoku Redux!
        </h1>
        <div className="fw display-flex-column flex-align-center bg-orange-light">
          <PuzzleBoard actions={this.props.actions}/>
        </div>
      </div>

    );

  }


};
