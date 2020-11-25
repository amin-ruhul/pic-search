import React from 'react';
import './search.css';

class Search extends React.Component{

    state = { term: null }

    handelChange = (event) =>{
        this.setState({term: event.target.value});
    }

    handelSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className = 'search'>
                <form action="" onSubmit={this.handelSubmit}>
                    <input 
                    type="text"
                    placeholder="Enter Term to find photos.."  
                    onChange = {this.handelChange} 
                    />
                </form>
            </div>
        )
    }
}

export default Search;