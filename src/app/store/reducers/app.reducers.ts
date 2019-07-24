import { combineReducers } from 'redux'
import { userReducer } from './user.reducers';
import { modeReducer } from './mode.reducers';

export const appReducer = combineReducers({
  user: userReducer,
  mode: modeReducer
})