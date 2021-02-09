import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';
import apiKey from './config';



class App extends Component {

  state = {
    images: '',
    fetchFlag: false,
    per_page: 24 
  }


  // componentDidMount() {
  //   this.getPhotos('cats');
  // }

  

  getPhotos = (query) => {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${this.state.per_page}&format=json&nojsoncallback=1`;
    return fetch(url)
      .then(res => res.json())
      .then(resData => {
        let photos = resData.photos.photo.map(photo => {
          return {
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            id: photo.id
          };
        });
        this.setState({
          images: photos
        });
        if (photos.length > 0) {
          this.setState({ fetchFlag: true });
        }
      })
      .catch(err => console.log('Error fetching and parsing data', err)); //still managing to get the fetch work with no componentDidMount()
  }

  resetFlag = () => {
    this.setState({ fetchFlag: false });
  }


  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchForm 
            get={this.getPhotos}
            images={this.state.images}
            flag={this.state.fetchFlag}
            resetFlag={this.resetFlag}
          />
          <Nav get={this.getPhotos} />
          <div className='photo-container'>
            <Switch>
              <Route exact path="/not-found" component={ NotFound } />
              <Route path="/:search" render={ () => <PhotosList images={ this.state.images } /> } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}



export default App;
