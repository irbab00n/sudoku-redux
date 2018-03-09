import { combineReducers } from 'redux';
import example from './example';
import currentPuzzle from './currentPuzzle';

const reducers = combineReducers({
  currentPuzzle
});

export default reducers;