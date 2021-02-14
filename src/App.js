import React, { Component } from 'react';
import {
  Route,
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
    images: '',
    loading: true
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
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    let images = await fetch(url)
      .then(res => res.json())
      .then(resData => {
        if (resData.photos) {
          let images = resData.photos.photo.map(photo => {
            return {
              url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
              id: photo.id
            };
          });
          this.setState({
            images,
            loading: false
          });
          return images;
        }
      })
      .catch(err => console.log('Error fetching and parsing data', err)); 
      console.log(1);
    return images;
  }

    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        let query = this.props.location.pathname;
        query = query.slice(1);
        this.getPhotos(query);
      }
    }

    changeLoading = () => {
      this.setState({ loading: true });

    }

  

  render() {
    return (
      <div className='container'>
        <SearchForm getPhotos={this.getPhotos} isLoading={this.changeLoading}/>
        <Nav getPhotos={this.getPhotos} />
        <div className='photo-container'>
          <Route exact path="/not-found" component={ NotFound } />
          {
            (this.state.loading) 
              ? <p>Loading...</p> 
              : <Route path='/:search' render={ () => <PhotosList images={this.state.images} isLoading={this.changeLoading} loading={this.state.loading} />  } />
          }
        </div>
      </div>
    );
  }

}

// && this.props.history.location.pathname !== "/"

export default withRouter(App);
