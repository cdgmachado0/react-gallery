import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


<<<<<<< HEAD
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
    

=======
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

>>>>>>> parent of 0d54777 (Got to work when pasting the URL, but I stil have to try it out with the other components to know I didn't brake anythig)
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