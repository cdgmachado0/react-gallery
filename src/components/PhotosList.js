import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';



class PhotosList extends Component {

    state = {
        photos: [],
        flag: false
    };

//For when the URL is pasted directly
    componentDidMount() {
        this.renderPhotos();
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if (prevState.flag === false) {
    //         this.setState({ flag: false });
    //     }
    // }

    // componentDidUpdate() {
    //     if (this.state.flag === true) {
    //         this.renderPhotos();
    //         this.setState({ flag: false });
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState) {
        
    // }


    renderPhotos = () => { 
        const { search } = this.props.match.params;
        this.props.get(search)
            .then(data => {
                if (data.length) {
                    let photos = data.map(photo => 
                        <Photo 
                            source={photo.url} 
                            key={photo.id}
                        />);
                    this.setState({ photos });
                } else {
                    this.props.history.push('/not-found');
                }
            });
    }

//Need one when submitting the form

//Another one when a NavLink is pressed

//************************************************************ */


    // constructor(props) {
    //     super(props);
    //     const search = this.props.search;
    //     const photos = this.props.get(search);

    

        // const photos = (async () => {
        //     let data = await this.props.get(search);
        //     return data;
        // })()
            // .then(() => {
            //     const data = this.props.images;
            //     if (data.length) {
            //         let photos = data.map(photo => 
            //             <Photo 
            //                 source={photo.url} 
            //                 key={photo.id}
            //             />);
            //     }
            // });
        // console.log(photos);
            
//************************************************************ */

    
        // this.props.get(search)
        //     .then(() => {
        //         let photos = this.props.images.map(photo => 
        //             <Photo 
        //                 source={photo.url} 
        //                 key={photo.id}
        //             />);
        //         this.state = { photos };
        //     });
    // }

    




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

        // let photos = [];

       
        // photos = this.props.images.map(photo => 
        //     <Photo 
        //         source={photo.url} 
        //         key={photo.id}
        //     />);
        
        // const { search } = this.props;

        // this.props.get(search)
        //     .then(() => {
        //         if (this.props.flag) {
        //             photos = this.props.images.map(photo => 
        //                 <Photo 
        //                     source={photo.url} 
        //                     key={photo.id}
        //                 />);
        //             this.props.resetFlag();
        //         } else if (this.props.flag === false) {
        //             this.props.history.push('/not-found');
        //         }
        //     }); 
        const { images } = this.props;

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul> 
                    { images.length === 0 ? this.state.photos : images }
                </ul>
            </div>       
        );
    }
}


export default withRouter(PhotosList);