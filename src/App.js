import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

//Import components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotosList from './components/PhotosList';
import NotFound from './components/NotFound';
import apiKey from './config';
import Photo from './components/Photo';



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
        let images = resData.photos.photo.map(photo => {
          return {
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            id: photo.id
          };
        });
        this.setState({ images });
      })
      .catch(err => console.log('Error fetching and parsing data', err)); 
    return data;
  }


//************************************************************ */


  resetFlag = (bool) => {
    this.setState({ fetchFlag: bool });
  }


  setImages = (query) => {
    this.getPhotos(query);
  }

//************************************************************ */


//   renderPhotos = (query) => { 
//     this.getPhotos(query)
//         .then(data => {
//             if (data.length) {
//                 let images = data.map(photo => 
//                     <Photo 
//                         source={photo.url} 
//                         key={photo.id}
//                     />);
//                 this.setState({ images });
//                 return images;
//             } else {
//                 this.props.history.push('/not-found');
//             }
            
//         }).then(data => {
//           return data;
//         })
// }

//************************************************************ */
  
  componentDidMount() {
    let query = this.props.history.location.pathname;
    query = query.slice(1);
    if (query.length > 0) {
      this.getPhotos(query);
    }
  }


  render() {
    return (
      // <BrowserRouter>
        <div className='container'>
          <SearchForm 
            get={this.getPhotos}
            images={this.state.images}
            flag={this.state.fetchFlag}
            resetFlag={this.resetFlag}
            set={this.setImages}
            renderPhotos={this.renderPhotos}
          />
          <Nav get={this.getPhotos} set={this.setImages} />
          <div className='photo-container'>
            <Switch> 
              <Route exact path="/not-found" component={ NotFound } />
              <Route path="/:search" render={ () => <PhotosList renderPhotos={this.renderPhotos} resetFlag={this.resetFlag} flag={this.state.fetchFlag} images={this.state.images} get={this.getPhotos} set={this.setImages} />  } />
            </Switch>
          </div>
        </div>
      // </BrowserRouter>
    );
  }

}



export default withRouter(App);
