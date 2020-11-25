import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component{

    render(){
        return(
            <div>
                <div className='image-list'>
                   <ImageCard/> 
                </div>
            </div>
        )
    }
}

export default ImageList;

