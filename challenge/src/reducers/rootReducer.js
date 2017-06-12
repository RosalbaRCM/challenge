import { combineReducers } from 'redux'
import * as actions from '../actions/actions'

const risk = (state = {}, action) => {
    switch (action.type) {
        case actions.UPDATE_RISK:
            return {
                ...state,
                risk: action.risk
            }
        default:
            return state;
    }
}

const slices = (state = [], action) => {
    switch (action.type) {
        case actions.UPDATE_SLICES:
            return {
                ...state,
                slices: action.slices
            }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    risk, slices
});

export default rootReducer;