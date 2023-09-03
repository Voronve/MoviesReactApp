import React from 'react';
import './App.css';
import Counter from './components/Counter/counter';
import SearchForm from './components/SearchForm/searchForm';
import onSearch from './helpers/onSearch';

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm input='Initial input' onSearch={ onSearch }/>
    </div>
  );
}

export default App;
