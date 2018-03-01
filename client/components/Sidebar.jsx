import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div id="sidebar" className="bg-orange-default display-flex-column flex-justify-between fh fw">
        <span id="sidebar-logo" className="display-flex-row flex-align-center flex-justify-center bg-orange-dark">LOGO</span>

        <div className="self-align-end">
          NAV BUTTONS
        </div>

        <span>Company Info</span>
      </div>

    );

  }
}