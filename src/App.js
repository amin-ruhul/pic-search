import React from 'react';
import Search from './components/Search';
import ImageList from './components/ImageList';

class App extends React.Component {

  onSubmit = (term) =>{
    console.log(term);
  }
  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <ImageList/>
      </div>
    );
  }
}

export default App;
