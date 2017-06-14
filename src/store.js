import { createStore } from 'redux';
import slices from './reducers/rootReducer';
import slice from './data/slices';


const defaultState = {
  risk: '1',
  slices: slice['1'],
};

const store = createStore(
   slices, defaultState
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );


export default store;
