import React from 'react';

const Puzzles = () => {

  return (

    <div className="display-flex-column flex-align-center page-body fh">
      <h1 className="page-title no-select">
        All Puzzles
      </h1>
      <div className="card-grid display-flex-column flex-justify-center">
        <div className="card display-flex-column flex-align-center flex-justify-center">
          Card
        </div>
        <div className="card display-flex-column flex-align-center flex-justify-center">
          Card
        </div>
        <div className="card display-flex-column flex-align-center flex-justify-center">
          Card
        </div>
      </div>
    </div>

  );

};

export default Puzzles;