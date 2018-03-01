import React from 'react';

import Sidebar from './components/Sidebar.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="display-flex-row fh fw">
        <Sidebar />
        <div className="display-flex-column fh fw">
          Content
        </div>
      </div>

    );

  }
};