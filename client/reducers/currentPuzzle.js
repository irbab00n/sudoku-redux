import * as types from '../types';
import axios from 'axios';

import matrixCompressor from '../helpers/matrixCompressor';

const INITIAL_STATE = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '']
];

// fetch quickplay puzzle

const fetchQuickplay = () => {
  axios.get('/test')
    .then(response => {
      console.log('response from server: ', response);
    })
    .error(error => {
      console.log('error from server: ', error);
    });
};

// fetch selected puzzle

const currentPuzzleReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.FETCH_QUICKPLAY_PUZZLE:
      fetchQuickplay();
      return state;
    default:
      return state;
  }
};

export default currentPuzzleReducer;