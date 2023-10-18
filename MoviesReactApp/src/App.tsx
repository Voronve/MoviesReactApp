import React from 'react';
import config from './config.json';
import './App.css';
import { Counter } from './components/Counter/counter';
import { MovieListPage } from './components/MovieListPage/movieListPage';
import onSelect from './helpers/onSelect';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { MovieDetailsGetter } from './components/MovieDetailsGetter/movieDetailsGetter';
import { SearchForm } from './components/SearchForm/searchForm';

function App() {
  return (
    <div className="App">
      <div id='dialogContainer'></div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MovieListPage/>}>
              <Route index element={<SearchForm/>}/>
              <Route path='/:movieId' element={<MovieDetailsGetter/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export const select = onSelect;
export default App;
