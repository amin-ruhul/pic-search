import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import ImageList from './components/ImageList';

class App extends React.Component {

  state = { image:[] }

  onSubmit = async (term) =>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
      params:{query:term},
      headers:{
        Authorization: 'Client-ID WVRzZnSC0YPccWLxxgD3zO2l22AfpXSOw3-haanPKMs'
      }
    });

    this.setState({image: response.data.results});
  }
  render(){
    const imgSize = this.state.image.length === 0 ? ' ' : `${this.state.image.length} images found`;
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <ImageList/>
        <h6>{imgSize}</h6>
      </div>
    );
  }
}

export default App;
