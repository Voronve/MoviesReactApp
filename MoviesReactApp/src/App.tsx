import React from 'react';
import config from './config.json';
import movieList from './moviesList.json';
import './App.css';
import { Counter } from './components/Counter/counter';
import { SearchForm } from './components/SearchForm/searchForm';
import { MovieListStateHandler } from './components/MovieListStateHandler/movieListStateHandler';
import { Dialog } from './components/Dialog/dialog';
import onSearch from './helpers/onSearch';
import onSelect from './helpers/onSelect';
import { MovieForm } from './components/MovieForm/movieForm';

function App() {
  return (
    
    <div className="App">
      <Dialog title={<h2>Test title</h2>} closeFunc={()=> { return }}><MovieForm onSubmit={()=> { return }}></MovieForm></Dialog>
      <div id='dialogContainer'></div>
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
