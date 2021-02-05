import React, { Component } from 'react';
import apiKey from './config';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';

class App extends Component {


  state = {
    images: [
      "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
      "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
      "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
    ]
  }

  key = apiKey;

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchForm />
          <Nav />
          <div className='photo-container'>
          <Route path="/cats" render={ () => <PhotosList photo={this.state.images[0]} /> } />
          <Route path="/dogs" render={ () => <PhotosList photo={this.state.images[1]} /> } />
          <Route path="/computers" render={ () => <PhotosList photo={this.state.images[2]} /> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
