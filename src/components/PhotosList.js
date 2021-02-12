import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';



class PhotosList extends Component {

    
    // componentDidMount() {
    //     this.props.renderPhotos(this.props.match.params.search);
    // }

    


    // renderPhotos = () => { 
    //     const { search } = this.props.match.params;
    //     this.props.get(search)
    //         .then(data => {
    //             if (data.length) {
    //                 let images = data.map(photo => 
    //                     <Photo 
    //                         source={photo.url} 
    //                         key={photo.id}
    //                     />);
    //                 this.props.set(images);
    //             } else {
    //                 this.props.history.push('/not-found');
    //             }
    //         });
    // }

    

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