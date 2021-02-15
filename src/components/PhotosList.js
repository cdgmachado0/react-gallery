import React from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';



const PhotosList = (props) => {
    const { images } = props;
    let photos = [];

    if (images.length > 0) {
        photos = images.map(photo => 
            <Photo 
                source={photo.url} 
                key={photo.id}
            />);
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


export default withRouter(PhotosList);