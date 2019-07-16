import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import store from './store';
import routes from './routes';
import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
            <DevTools/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
