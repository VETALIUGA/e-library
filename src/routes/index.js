import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksGrid from '../components/smart/BooksGrid/BooksGrid';
import BooksCard from '../components/smart/BooksCard/BooksCard';

export default (
    <Switch>
        <Route
            exact
            path={'/'}
            component={()=><BooksGrid/>}
        />
        <Route
            exact
            path={'/info'}
            component={()=><BooksCard/>}
        />
    </Switch>
)