import { combineReducers } from 'redux';
import { reducers as k }  from './app/reducer';

const rootReducer = combineReducers({
  ...k
});

export default rootReducer;