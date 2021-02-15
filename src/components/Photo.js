import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ source }) => {
    return (
        <li>
            <img src={source} alt="" />
        </li>
    );  
 }

 
 Photo.propTypes = {
     source: PropTypes.string
 };


export default Photo;