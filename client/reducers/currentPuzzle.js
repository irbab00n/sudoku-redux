import * as types from '../types';
import sudoku from '../helpers/sudoku';

const INITIAL_STATE = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.']
];

const currentPuzzleReducer = (state = INITIAL_STATE, action) => {
  let newState = [...state];
  switch(action.type) {
    case types.UPDATE_PUZZLE_SQUARE:
      let row = action.payload.coordinates[0];
      let column = action.payload.coordinates[1];
      newState[row][column] = action.payload.value;
      return newState;
    default:
      return state;
  }
};

export default currentPuzzleReducer;