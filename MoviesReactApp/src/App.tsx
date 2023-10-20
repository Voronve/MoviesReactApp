import React from 'react';
import config from './config.json';
import './App.css';
import { Counter } from './components/Counter/counter';
import { MovieListPage } from './components/MovieListPage/movieListPage';
import onSelect from './helpers/onSelect';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { MovieDetailsGetter } from './components/MovieDetailsGetter/movieDetailsGetter';
import { SearchForm } from './components/SearchForm/searchForm';
import { Dialog } from './components/Dialog/dialog';
import { MovieForm } from './components/MovieForm/movieForm'
function App() {
  return (
    <div className="App">
      <div id='dialogContainer'></div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MovieListPage/>}>
              <Route path='/' element={<SearchForm/>}>
                  <Route path='/new' element={
                    <Dialog title={<h3>Add movie</h3>}>
                      <MovieForm></MovieForm>
                    </Dialog>}>
                  </Route>
              </Route>
              <Route path='/:movieId' element={<MovieDetailsGetter/>}>
                <Route path='/:movieId/edit' element={
                    <Dialog title={<h3>Edit movie</h3>}>
                      <MovieForm></MovieForm>
                    </Dialog>}>
                </Route>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export const select = onSelect;
export default App;
