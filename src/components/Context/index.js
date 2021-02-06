import React, { Component } from 'react';
import apiKey from '../../config';

const SearchAppContext = React.createContext();

export class Provider extends Component {
    
    state = {
        images2: ''
      }
    
    
      componentDidMount() {
        this.getPhotos();
      }
    
      getPhotos = (query) => {
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
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
          .catch(err => console.log('Error fetching and parsing data menol', err));
      }

      render() {
          return (
              <SearchAppContext.Provider value={{
                  images: this.state.images2,
                  action: {
                      get: this.getPhotos
                  }
              }}>
                  {this.props.children}
              </SearchAppContext.Provider>
          );
      }
}

export const Consumer = SearchAppContext.Consumer;

