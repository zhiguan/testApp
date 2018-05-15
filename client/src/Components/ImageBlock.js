import React, {Component} from 'react';

class ImageBlock extends Component{

	render(){
		return (
			<a className={'imgurImg'} href={this.props.image.context}> 
				<img id={this.props.image._id} src={this.props.image.url} alt={this.props.image.title} />
			</a>
		);
	}
}

export default ImageBlock;