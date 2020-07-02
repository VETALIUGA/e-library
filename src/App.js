import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      {routes}

    </>
  )
}

export default App;
