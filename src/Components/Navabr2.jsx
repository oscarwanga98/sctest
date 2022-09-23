import React from 'react'
import {Link} from 'react-router-dom'


function Navabr1() {

  
  return (
    <div className='container'  >
        
        <div>
        Add Product
        </div>
        <div>
            <button className='btn1' type="submit">Save</button>
            <Link to="/"><button  className='btn1' id="delete-checkbox">Cancel</button></Link>
        </div>
        

    </div>
  )
}

export default Navabr1