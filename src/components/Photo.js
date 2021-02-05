import React from 'react';
// import { Consumer } from 'react-router-dom';


const Photo = (props) => {

    return (
        <li>
            <img src={props.photo} alt="" />
        </li>
    );
    
 }


export default Photo;