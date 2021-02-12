import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Photo from './Photo';


class Nav extends Component {

    

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li onClick={ (e) => this.props.get(e.target.textContent.toLowerCase()) } ><NavLink to='/cats'>Cats</NavLink></li>
                    <li onClick={ (e) => this.props.get(e.target.textContent.toLowerCase()) }><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li onClick={ (e) => this.props.get(e.target.textContent.toLowerCase()) }><NavLink to='/sports'>Sports</NavLink></li>
                </ul>
            </nav>
        );
    }
}


export default withRouter(Nav);