import { combineReducers } from '@reduxjs/toolkit';

import tasksReducer from './tasksSlice';
import logedUserReducer from './userSlice';

export default combineReducers({
  tasksReducer,
  logedUserReducer
});
