import React from 'react'
import {Link} from 'react-router-dom'


function Navabr1() {
  const handleclick=()=>{
    
  }

  return (
    <div className='container'  >
        
        <div>
        Product list 
        </div>
        <div>
            <Link to="/add"><button className='btn1' >Add</button></Link>
            <button  onClick={handleclick} className='btn1' id="delete-checkbox">Mass Delete</button>
        </div>
        

    </div>
  )
}

export default Navabr1