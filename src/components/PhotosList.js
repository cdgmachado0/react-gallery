import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotosList = (props) => {
    let photos = [];
    if (props.images) {
        photos = props.images
            .map(photo => 
                <Photo 
                    source={photo.url} 
                    key={photo.id}
                />)
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul> 
                { photos }
            </ul>
        </div>       
    );
}


export default PhotosList;