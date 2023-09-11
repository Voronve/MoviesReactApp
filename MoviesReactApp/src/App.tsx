import React from 'react';
import config from './config.json';
import './App.css';
import Counter from './components/Counter/counter';
import SearchForm from './components/SearchForm/searchForm';
import GanreSelect from './components/GenreSelect/genreSelect';
import onSearch from './helpers/onSearch';
import onSelect from './helpers/onSelect';

function App() {
  return (
    <div className="App">
      <Counter initialValue={config.initialCounterValue} />
      <SearchForm input={config.initialInput} onSearch={ onSearch }/>
      <GanreSelect genreNameList={config.janres} selectedGenre="ALL" onSelect={ onSelect }/>
    </div>
  );
}
export const select = onSelect;
export default App;
