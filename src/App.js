import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header/Header';

const App = () => (
  <>
    <Header />
    {routes}

  </>
);

export default App;
