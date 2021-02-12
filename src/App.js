import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';
import NotFound from './components/NotFound';

//Import API Key
import apiKey from './config';



class App extends Component {

  state = {
    images: [],
    per_page: 24
  }


  componentDidMount() {
    let query = this.props.history.location.pathname;
    query = query.slice(1);
    if (query.length > 0) {
      this.getPhotos(query)
        .then(images => {
          if (images.length <= 0) {
            this.props.history.push('/not-found');
          }
        });
    }
  }
 


  getPhotos = async (query) => {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${this.state.per_page}&format=json&nojsoncallback=1`;
    let images = await fetch(url)
      .then(res => res.json())
      .then(resData => {
        let images = resData.photos.photo.map(photo => {
          return {
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            id: photo.id
          };
        });
        this.setState({ images });
        return images;
      })
      .catch(err => console.log('Error fetching and parsing data', err)); 
    return images;
  }


  render() {
    return (
      <div className='container'>
        <SearchForm get={this.getPhotos}/>
        <Nav get={this.getPhotos} />
        <div className='photo-container'>
          <Switch> 
            <Route exact path="/not-found" component={ NotFound } />
            <Route path="/:search" render={ () => <PhotosList images={this.state.images} get={this.getPhotos} />  } />
          </Switch>
        </div>
      </div>
    );
  }

}



export default withRouter(App);
