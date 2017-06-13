import * as actions from '../actions/actions';
import slice from '../data/slices';

const slices = (state = { slices: slice['1'], risk: '1' }, action) => {
  switch (action.type) {
    case actions.UPDATE_RISK:
      return {
        ...state,
        risk: action.risk,
        slices: slice[action.risk],
      };
    default:
      return state;
  }
};

export default slices;
