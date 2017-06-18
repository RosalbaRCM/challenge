import { combineReducers } from 'redux'
import * as actions from '../actions/actions';
import slice from '../data/slices';

const risk = (state = '1', action) => {
  switch (action.type) {
    case actions.UPDATE_RISK:
      if (action.risk)
        return action.risk;
      return state;
    default:
      return state;
  }
};

const slices = (state = slice['1'], action) => {
  switch (action.type) {
    case actions.UPDATE_RISK:
      if (action.risk)
        return slice[action.risk];
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  risk,
  slices,
});

export default rootReducer;
