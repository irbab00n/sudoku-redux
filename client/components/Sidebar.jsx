import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div id="sidebar" className="bg-orange-default display-flex-column fh fw">
        <span id="sidebar-logo" className="display-flex-row flex-align-center flex-justify-center bg-orange-dark">
          LOGO
        </span>

        <div id="sidebar-navigation" className="display-flex-column flex-justify-around">

          <a href="/">
            <button className="sidebar-navigation-button bg-orange-default">
              <svg fill="#212121" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </button>
          </a>

          <a href="/puzzles">
            <button className="sidebar-navigation-button bg-orange-default">
              <svg fill="#212121" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
              </svg>
            </button>
          </a>

        </div>

      </div>

    );

  }
}