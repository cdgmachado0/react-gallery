import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotosList = (props) => {


    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul> 
            {props.images.map(photoObj => 
                <Photo 
                source={photoObj.url} 
                key={photoObj.id}
            />)}
            {/* <!-- Not Found --> */}
            <NotFound />
            </ul>
        </div>
                
            
    );
}


export default PhotosList;