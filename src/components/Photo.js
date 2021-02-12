import React from 'react';


const Photo = (props) => {

    return (
        <li>
            <img src={props.source} alt="" />
        </li>
    );  
 }


export default Photo;