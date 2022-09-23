import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Card from './Card';
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'



function ProductList(prop) {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    getProdcuts()
  },[])

  function getProdcuts(params) {
    axios.get('http://localhost:80/api/product/')
    .then(function(response){
    console.log(response.data);
    setProducts(response.data);
  })
  }
  const massDelete=(prop)=>{

    console.log(prop.ischecked)
  }
  
  return (
    <>
      <div className='container'><div>Product list </div>
          <div>
              <Link to="/add"><button className='btn1' >Add</button></Link>
              <button  onClick={massDelete} className='btn1' id="delete-checkbox">Mass Delete</button>
          </div>
      </div>
      
      <div className='list'>
        {
          products.map((product)=>(<Card key={product.id} product={product}/>))
        }
      </div>
    </>
  )
}

// ProductList.propTypes={
//   deleteList:PropTypes.object.isRequired
// }
export default ProductList