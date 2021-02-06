import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotosList = (props) => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul> 
            {props.photos.map(photoObj => 
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

//trying to get the unique ID on the Photo component and later getting the "query" on App.js passed to the URL on fetch
export default PhotosList;