import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {

    return (
        <nav className="main-nav">
            <ul>
                <li onClick={ (e) => props.getPhotos(e.target.textContent.toLowerCase()) } ><NavLink to='/cats'>Cats</NavLink></li>
                <li onClick={ (e) => props.getPhotos(e.target.textContent.toLowerCase()) }><NavLink to='/dogs'>Dogs</NavLink></li>
                <li onClick={ (e) => props.getPhotos(e.target.textContent.toLowerCase()) }><NavLink to='/sports'>Sports</NavLink></li>
            </ul>
        </nav>
    );
} 


export default Nav;