import React from 'react'
import loading from './spinner.gif'
const Spinner=()=>  {
  
    return (
      <div className="text-center">
        <img style={{height:"80px",width:"80px" }} src={loading} alt="loading.." />
        
      </div>
    )
  
}

export default Spinner
