import React from 'react';
import config from './config.json';
import movieList from './moviesList.json';
import './App.css';
import { Counter } from './components/Counter/counter';
import { SearchForm } from './components/SearchForm/searchForm';
import { MovieListStateHandler } from './components/MovieListStateHandler/movieListStateHandler';
import onSearch from './helpers/onSearch';
import onSelect from './helpers/onSelect';

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <Counter initialValue={config.initialCounterValue} />
      <SearchForm input={config.initialInput} onSearch={ onSearch }/>
      <MovieListStateHandler janres={config.janres} moviesList={movieList}/>
    </div>
  );
}
export const select = onSelect;
export default App;
