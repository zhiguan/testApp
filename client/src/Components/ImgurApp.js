import React, {Component} from 'react';
import ImageBlock from './ImageBlock';

class ImgurApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = this.props.images;
    if(this.props.images){
      images = this.props.images.map(image => {
        return (
            <ImageBlock key={image._id} image={image} />
        );
      });
    } 

    return(
      <div className={"gallary"}> 
        {images}
      </div>
    );  
  }
}

export default ImgurApp;