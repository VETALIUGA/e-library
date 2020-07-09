import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksGrid from '../components/BooksGrid/BooksGrid';
import BooksCard from '../components/BooksCard/BooksCard';
import AddBook from '../components/BookActions/AddBook';
import EditBook from '../components/BookActions/EditBook';

export default (
  <Switch>
    <Route
      exact
      path="/"
      component={BooksGrid}
    />
    <Route
      exact
      path="/newBook"
      component={AddBook}
    />
    <Route
      exact
      path="/editBook/:bookId"
      component={EditBook}
    />
    <Route
      path="/book/:bookId"
      component={BooksCard}
    />
  </Switch>
);
