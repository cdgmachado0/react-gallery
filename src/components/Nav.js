import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Nav = ({ getPhotos }) => {
    return (
        <nav className="main-nav">
            <ul>
                <li onClick={ (e) => getPhotos(e.target.textContent.toLowerCase()) } ><NavLink to='/football'>Football</NavLink></li>
                <li onClick={ (e) => getPhotos(e.target.textContent.toLowerCase()) }><NavLink to='/baseball'>Baseball</NavLink></li>
                <li onClick={ (e) => getPhotos(e.target.textContent.toLowerCase()) }><NavLink to='/rugby'>Rugby</NavLink></li>
            </ul>
        </nav>
    );
} 


Nav.propTypes = {
    getPhotos: PropTypes.func
};


export default Nav;