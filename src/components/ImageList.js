import React from 'react';
import './imageList.css';

class ImageList extends React.Component{

    render(){
        return(
            <div>
                <div className='image-list'>
                    <img src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                </div>
            </div>
        )
    }
}

export default ImageList;

