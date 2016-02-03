// import getRoutes from '../shared/routes';
// import reducers from '../shared/reducers';
//
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import { syncHistory, routeReducer } from 'react-router-redux';
//
// const initialStateString = document.getElementById('initialState').textContent;
// const initialState = JSON.parse(initialStateString);
//
// const reducer = combineReducers(Object.assign({}, reducers, {
//   routing: routeReducer
// }));
//
// const reduxRouterMiddleware = syncHistory(browserHistory);
// const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
// const store = createStoreWithMiddleware(reducer, initialState);
//
// const rootComponent = (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       {getRoutes(store)}
//     </Router>
//   </Provider>
// );
//
// const mountNode = document.getElementById('mount');
//
// ReactDOM.render(rootComponent, mountNode);
