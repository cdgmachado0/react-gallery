import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';



class PhotosList extends PureComponent {
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
        photos: []
    };

    componentDidMount() {
        const search = this.props.search;
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

            
        // console.log(this.props.photoComp);

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul> 
                    { this.state.photos }
                </ul>
            </div>       
        );
    }
}


export default withRouter(PhotosList);