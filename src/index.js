import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // STORE -> GLOBALIZED STATE

// // ACTION -> FUNCTION (INCREMENT)
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// // REDUCER -> which action u use, connect action and state

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // DISPATCH -> execute action

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
