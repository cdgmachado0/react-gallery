import React, { Component } from 'react';
import apiKey from './config';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';

class App extends Component {

  
  key = apiKey;


  render() {
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

}

export default App;
