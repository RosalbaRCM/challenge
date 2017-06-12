import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'


const defaultState = {
    risk: {},
    slices: []
}

const store = createStore(rootReducer, defaultState);

export default store;
