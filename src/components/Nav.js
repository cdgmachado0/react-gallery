import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => (
    <nav className="main-nav">
        <ul>
            <li onClick={ (e) => props.get(e.target.textContent.toLowerCase()) }><NavLink to='/cats'>Cats</NavLink></li>
            <li onClick={ (e) => props.get(e.target.textContent.toLowerCase()) }><NavLink to='/dogs'>Dogs</NavLink></li>
            <li onClick={ (e) => props.get(e.target.textContent.toLowerCase()) }><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
    </nav>
)


export default Nav;