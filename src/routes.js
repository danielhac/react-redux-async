import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import WinesPage from './components/wine/WinesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="wines" component={WinesPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
