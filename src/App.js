import React from 'react';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';

const App = () => {
  return (
    <div className='container'>
      <SearchForm />
      <Nav />
      <div className='photo-container'>
        <PhotosList />
      </div>
    </div>
  );
}

export default App;
