import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';
import NotFound from './components/NotFound';
import apiKey from './config';



class App extends Component {

  state = {
    images: '',
    fetchFlag: false,
    per_page: 24,
    photo_components: ''
  }


//************************************************************ */


  getPhotos = async (query) => {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${this.state.per_page}&format=json&nojsoncallback=1`;
    let data = await fetch(url)
      .then(res => res.json())
      .then(resData => {
        let photos = resData.photos.photo.map(photo => {
          return {
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            id: photo.id
          };
        });
        return photos;
      })
      .catch(err => console.log('Error fetching and parsing data', err)); 
    return data;
  }


//************************************************************ */


  resetFlag = () => {
    this.setState({ fetchFlag: true });
  }


  setImages = (images) => {
    this.setState({ images });
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
            set={this.setImages}
          />
          <Nav get={this.getPhotos} set={this.setImages} />
          <div className='photo-container'>
            <Switch> 
              <Route exact path="/not-found" component={ NotFound } />
              <Route path="/:search" render={ () => <PhotosList images={this.state.images} get={this.getPhotos} set={this.setImages} get2={() => this.getPhotos()} />  } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}



export default App;
