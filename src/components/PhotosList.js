import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotosList = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
            <Photo />
            {/* <!-- Not Found --> */}
            <NotFound />
            </ul>
        </div>
    );
}


export default PhotosList;