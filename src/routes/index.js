import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksGrid from '../components/BooksGrid/BooksGrid';
import BooksCard from '../components/BooksCard/BooksCard';

export default (
    <Switch>
        <Route
            exact
            path={'/'}
            component={BooksGrid}
        />
        <Route
            path={'/book/:bookId'}
            component={BooksCard}
        />
    </Switch>
)