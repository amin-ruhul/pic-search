import React from 'react';

class ImageCard extends React.Component{

    ImageRef = React.createRef();

    state = { span: 0 }

    componentDidMount(){
        this.ImageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () =>{
       const height = this.ImageRef.current.clientHeight;
        const span = Math.ceil((height/10)+1);
        this.setState({ span: span });
    }

    render(){
        return(
            <div style = {{ gridRowEnd: `span ${this.state.span}`}}>
                <img 
                ref = {this.ImageRef}
                src={this.props.image.urls.regular} 
                alt=""/>
            </div>
        )
    }
}

export default ImageCard;