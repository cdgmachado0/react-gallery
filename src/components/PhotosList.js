import React from 'react';
import Photo from './Photo';


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
        <React.Fragment>
            <h2>Results</h2>
            <ul> 
                { photos }
            </ul>
        </React.Fragment>
    );
}


export default PhotosList;