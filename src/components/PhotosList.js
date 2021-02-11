import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';



class PhotosList extends Component {

    componentDidMount() {
        this.renderPhotos();
    }

    
    renderPhotos = () => { 
        const { search } = this.props.match.params;
        this.props.get(search)
            .then(data => {
                if (data.length) {
                    let images = data.map(photo => 
                        <Photo 
                            source={photo.url} 
                            key={photo.id}
                        />);
                    this.props.set(images);
                } else {
                    this.props.history.push('/not-found');
                }
            });
    }


    render() {
        let { images } = this.props;

        // this.renderPhotos();

        return (
            <React.Fragment>
                <h2>Results</h2>
                <ul> 
                    { images }
                </ul>
            </React.Fragment>    
        );
    }
}


export default withRouter(PhotosList);