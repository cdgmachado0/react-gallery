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
    images: ''
    // getMore: async (query) => {
    //   let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    //   let images = await fetch(url)
    //     .then(res => res.json())
    //     .then(resData => {
    //       let images = resData.photos.photo.map(photo => {
    //         return {
    //           url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
    //           id: photo.id
    //         };
    //       });
    //       // this.setState({ images });
    //       return images;
    //     })
    //     .catch(err => console.log('Error fetching and parsing data', err)); 
    //   return images;
    // }
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
          this.setState({ images });
          return images;
        }
      })
      .catch(err => console.log('Error fetching and parsing data', err)); 
    return images;
  }

    componentDidUpdate(prevProps, state) {
      // console.log('1- this.props: ', this.props.location.pathname);
      // console.log('2- prevProps: ', prevProps.location.pathname);
      // console.log(state);

      if (this.props.location.pathname !== prevProps.location.pathname) {
        let query = this.props.location.pathname;
        query = query.slice(1);
        this.getPhotos(query);
      }
    }



  // static getDerivedStateFromProps(props, state) {
  //   let query = props.history.location.pathname;
  //   query = query.slice(1);
  //   // let images =[];

  //   if (query.length > 0) {
  //     state.getMore(query)
        
  //   }
  //   return null;
  // }
//try putyying getPhotos() into its on module and exporte it so the state here is alone
  


  render() {
    return (
      <div className='container'>
        <SearchForm getPhotos={this.getPhotos}/>
        <Nav getPhotos={this.getPhotos} />
        <div className='photo-container'>
          <Switch> 
            <Route exact path="/not-found" component={ NotFound } />
            <Route path='/:search' render={ () => <PhotosList images={this.state.images} />  } />
          </Switch>
        </div>
      </div>
    );
  }

}



export default withRouter(App);
