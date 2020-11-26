import React from 'react'
import spinner from './spinner.gif';

function Spinner() {
    return (
        <div style={{ width:'200px',margin:'auto',display:'block'}}>
            <img src={spinner} alt="Loading..."/>
        </div>
    )
}

export default Spinner
