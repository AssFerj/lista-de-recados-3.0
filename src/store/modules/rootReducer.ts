import { combineReducers } from '@reduxjs/toolkit';

import tasksReducer from './tasksSlice';
import logedUserReducer from './userSlice';
import userReducer from './usersSlice';

export default combineReducers({
  tasksReducer,
  logedUserReducer,
  userReducer
});
