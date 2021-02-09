import React, { Component } from 'react';
import Photo from './Photo';


class PhotosList extends Component {
    

    // if (props.images) {
    //     photos = props.images
    //         .map(photo => 
    //             <Photo 
    //                 source={photo.url} 
    //                 key={photo.id}
    //             />)
    // }

    state = {
        photos: []
    };


    componentDidMount() {
        console.log('hi');
        let photos = [];
        this.props.get(this.props.search)
            .then(() => {
                photos = this.props.images.map(photo => 
                    <Photo 
                        source={photo.url} 
                        key={photo.id}
                    />);
                this.setState({ photos });
            });
    }

    render() {
        // let photos = [];
    // const { search } = this.props.match.match.params;
    // console.log(this.props.match);
    

    return (
        <React.Fragment>
            <h2>Results</h2>
            <ul> 
                { this.state.photos }
            </ul>
        </React.Fragment>
    );
    }
}


export default PhotosList;