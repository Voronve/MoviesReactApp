import React from 'react';
import config from './config.json';
import './App.css';
import { Counter } from './components/Counter/counter';
import { MovieListPage } from './components/MovieListPage/movieListPage';
import onSelect from './helpers/onSelect';

function App() {
  return (
    <div className="App">
      <div id='dialogContainer'></div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <Counter initialValue={config.initialCounterValue} />
      <MovieListPage/>
    </div>
  );
}
export const select = onSelect;
export default App;
