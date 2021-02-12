import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';



class PhotosList extends Component {

    render() {
        const { images } = this.props;
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
}


export default withRouter(PhotosList);