import { combineReducers } from 'redux';
import userPuzzle from './userPuzzle';
import currentPuzzle from './currentPuzzle';

const reducers = combineReducers({
  userPuzzle,
  currentPuzzle
});

export default reducers;