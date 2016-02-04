import qs from 'query-string';
import React from 'react';
import { renderToString } from 'react-dom/server';
import createStore from '../../shared/create-store';

import { match, createMemoryHistory, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import html from '../html';

import getRoutes from '../../shared/routes';

const renderMarkup = (store, routerProps) => {
  const htmlString = renderToString(
    <Provider store={store}>
      <RouterContext {...routerProps}/>
    </Provider>
  );

  return html(htmlString, store.getState(), true);
};

export const requestHandler = (req, res, store, render) => {
  return (error, redirectLocation, routerProps) => {
    if (error) {
      console.error('Routing error:', error);
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!routerProps) {
      res.status(404).send('Not Found');
    } else {
      res.status(200).send(render(store, routerProps));
    }
  };
};

export default((req, res) => {
  const history = createMemoryHistory();
  const store = createStore(history);

  const query = qs.stringify(req.query);
  const url = req.path + (query.length ? '?' + query : '');

  match({ routes: getRoutes(store), location: url }, requestHandler(req, res, store, renderMarkup));
});
