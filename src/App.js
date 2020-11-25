import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import ImageList from './components/ImageList';

class App extends React.Component {

  state = { images:[] }

  onSubmit = async (term) =>{
   const response = await axios.get('https://api.unsplash.com/search/photos?page=5&per_page=30',{
      params:{query:term},
      headers:{
        Authorization: 'Client-ID WVRzZnSC0YPccWLxxgD3zO2l22AfpXSOw3-haanPKMs'
      }
    });

    this.setState({images: response.data.results});
  }
  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <ImageList images = {this.state.images}/>
  
      </div>
    );
  }
}

export default App;
