import React from 'react'
import Card from '@mui/material/Card';
import { useState } from 'react';
import ProductList from './ProductList';

function Card2({product}) {

 const [ischecked,setisChecked]=useState([])
 const AddSelect=(e)=>{
  const {value,checked}=e.target;
   if (checked)
   {
    setisChecked([...ischecked,value]);
   } else{
    setisChecked(ischecked.filter((e)=>e!==value));
   }
   
   console.log (ischecked);
   <ProductList ischecked={ischecked}/>
  }
  

 const productType=product.Prodcut_Type_ID;




  if(productType==101){
    return (
      <Card className='card' >
        
        <div className='holder' >
          <input value={product.SKU}   type="checkbox" checked={product.ischecked} onChange={(e)=>AddSelect(e)} id="delete-checkbox"/ >
          <div>{product.SKU}</div>
          <div>{product.Name}</div>
          <div>{product.Price} $</div>
          <div>SIze in MB: ###</div>
   
          
        </div>
         
      </Card>
    )
  }else if(productType==102){
    return(
      <Card className='card'>
        <div className='holder' >
          <input value={product.SKU}   type="checkbox" checked={product.ischecked} onClick={(e)=>AddSelect(e)} id="delete-checkbox"/>
          <div>{product.SKU}</div>
          <div>{product.Name}</div>
          <div>{product.Price} $</div>
          <div>Dimension: ##Lx##Wx##H</div>
                
        </div>
         
      </Card>
    )
  }else {
    return(
      <Card className='card'>
        <div className='delete-checkbox'><input  value={product.SKU}   type="checkbox" checked={product.ischecked} onClick={(e)=>AddSelect(e)} id="delete-checkbox"/></div>
        <div className='holder' >
          <div>{product.SKU}</div>
          <div>{product.Name}</div>
          <div>{product.Price} $</div>
          <div>Weight in Kg:#####</div>
                
        </div>
         
      </Card>
    )
  }
 
}

export default Card2