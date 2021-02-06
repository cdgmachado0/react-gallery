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
    ],
    images2: ''
  }


  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(resData => {
        let photos = resData.photos.photo.map(photo => {
          return {
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            id: photo.id
          };
        });
        this.setState({ images2: photos });
      })
      .catch(err => console.log('Error fetching and parsing data', err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchForm />
          <Nav />
          <div className='photo-container'>
          <Route path="/cats" render={ () => <PhotosList photos={this.state.images2} /> } />
          <Route path="/dogs" render={ () => <PhotosList photo={this.state.images[1]} /> } />
          <Route path="/computers" render={ () => <PhotosList photo={this.state.images[2]} /> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
