import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Photo from './Photo';


class Nav extends Component {

    handleSearch = (query) => {
        this.props.get(query)
            .then(data => {
                let images = data.map(photo => 
                    <Photo 
                        source={photo.url} 
                        key={photo.id}
                    />);
                this.props.set(images);
                this.props.history.push(`/${query}`);
            });
      } 

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li onClick={ (e) => this.handleSearch(e.target.textContent.toLowerCase()) } ><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/sports'>Sports</NavLink></li>
                </ul>
            </nav>
        );
    }
}


export default withRouter(Nav);