import React from 'react';

import PuzzleBoard from './PuzzleBoard.jsx';

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="fh display-flex-column flex-align-center page-body ">
        <h1 className="page-title no-select">
          Welcome to Sudoku Redux!
        </h1>
        <div className="fw display-flex-row flex-align-center flex-justify-evenly flex-wrap">
          <PuzzleBoard actions={this.props.actions}/>
          <div className="signup-container bg-orange-light fh fw">
            Signup container
          </div>
        </div>
      </div>

    );

  }


};
