import React from 'react';
import { Consumer } from './Context';
import { NavLink } from 'react-router-dom';


const Nav = () => (
    <Consumer>
        {({ action }) => {
            return (
                <nav className="main-nav">
                    <ul>
                        <li onClick={ (e) => action.get(e.target.textContent.toLowerCase())}><NavLink to='/cats'>Cats</NavLink></li>
                        <li><NavLink to='/dogs'>Dogs</NavLink></li>
                        <li><NavLink to='/computers'>Computers</NavLink></li>
                    </ul>
                </nav>
            );
        }}
    </Consumer>
    
)


export default Nav;