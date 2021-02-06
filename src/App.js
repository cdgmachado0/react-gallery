import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';



const App = () => (
  <BrowserRouter>
    <div className='container'>
      <SearchForm />
      <Nav />
      <div className='photo-container'>
      <Route path="/cats" component={ PhotosList } />
      {/* <Route path="/dogs" render={ () => <PhotosList photo={this.state.images[1]} /> } />
      <Route path="/computers" render={ () => <PhotosList photo={this.state.images[2]} /> } /> */}
      </div>
    </div>
  </BrowserRouter>
)


export default App;
