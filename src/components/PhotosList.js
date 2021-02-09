import React, { Component } from 'react';
import Photo from './Photo';


class PhotosList extends Component {
    // let photos = [];
    // if (props.images) {
    //     photos = props.images
    //         .map(photo => 
    //             <Photo 
    //                 source={photo.url} 
    //                 key={photo.id}
    //             />)
    // }

    state = {
        photos: ''
    };

    

    render() {
        // const { search } = this.props;
        // this.props.get(search)
        //     .then(() => {
        //         let photos = this.props.images.map(photo => 
        //             <Photo 
        //                 source={photo.url} 
        //                 key={photo.id}
        //             />);
        //         this.setState({ photos });
        //     });

        let photos = this.props.images.map(photo => 
                        <Photo 
                            source={photo.url} 
                            key={photo.id}
                        />);

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul> 
                    { photos}
                </ul>
            </div>       
        );
    }
}


export default PhotosList;