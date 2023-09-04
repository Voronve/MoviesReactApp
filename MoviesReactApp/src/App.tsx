import React from 'react';
import './App.css';
import Counter from './components/Counter/counter';
import SearchForm from './components/SearchForm/searchForm';
import GanreSelect from './components/GenreSelect/genreSelect';
import onSearch from './helpers/onSearch';
import onSelect from './helpers/onSelect';

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm input='Initial input' onSearch={ onSearch }/>
      <GanreSelect genreNameList={['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']} selectedGenre="ALL" onSelect={ onSelect }/>
    </div>
  );
}

export default App;
