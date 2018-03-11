import * as types from '../types';
import sudoku from '../helpers/sudoku';

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

const currentPuzzleReducer = (state = INITIAL_STATE, action) => {
  let newState = state.map(arr => {
    return arr.slice();
  });
  switch(action.type) {
    case types.UPDATE_PUZZLE_SQUARE:
      let row = action.payload.coordinates[0];
      let column = action.payload.coordinates[1];
      newState[row][column] = action.payload.value;
      return newState;
    case types.CHECK_PUZZLE_SOLUTION:
      let valid = sudoku.checkGrid(newState);
      console.log('valid solution?: ', valid); 
      return state;
    default:
      return state;
  }
};

export default currentPuzzleReducer;