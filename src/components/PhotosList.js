import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Photo from './Photo';


const PhotosList = ({ images }) => {
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


PhotosList.propTypes = {
    images: PropTypes.array
};


export default withRouter(PhotosList);