import React, { Component } from 'react';

const SearchAppContext = React.createContext();

export class Provider extends Component {
    
      state = {
        loading: true
      }
    
    

      render() {
          return (
              <SearchAppContext.Provider value={{
                  loading: this.state.loading
              }}>
                  {this.props.children}
              </SearchAppContext.Provider>
          );
      }
}

export const Consumer = SearchAppContext.Consumer;

