import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function ProductForm() {

    const navigate=useNavigate()
    const [inputs,setInputs]=useState({})

    const handleSelection=(event)=>{
        const value=event.target.value;
        const book=document.getElementById('book')
        const dvd=document.getElementById('dvd')
        const furniture=document.getElementById('furniture')
        // eslint-disable-next-line
        if (value==101){
            
            furniture.style.display='none';
            book.style.display='none';
            dvd.style.display='block';
            console.log(dvd.style.display)
        // eslint-disable-next-line    
        } else if(value=='102'){
            book.style.display='none';
            dvd.style.display='none';
            furniture.style.display='block';
        }else{
            book.style.display='block';
            dvd.style.display='none';
            furniture.style.display='none';
        }
    }

    const handleSelect=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        setInputs(values=>({...values,[name]:value}));

        

        }
    

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}));
    }
    
    const handleSubmit= (event)=>{
        event.preventDefault();

        axios.post('http://localhost:80/api/product', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        })
        console.log(inputs)

        event.target.reset()
    }



  return (
    <div>
        <h4 className='title'>Input form</h4>
        <form onSubmit={handleSubmit} id='product_form' className='product_form'>

            <label>SKU CODE:
            <input id='sku' type="text" onChange={handleChange} name="sku"/>
            </label>   
            

            <label>Name:
            <input id='name' type="text" onChange={handleChange} name="name"/>
            </label>  

            <label>Price:
            <input id='price' type="number" onChange={handleChange} name="price"/>
            </label>

            <label>Prodcut Type:
            <select id='prodcutType '
                    name='productType' 
                    style={{width:'100px'}} 
                    onChange={handleSelect}
                    onClick={handleSelection} >
                
                
                <option value="101" selected>DVD</option>
                <option value="102">Furniture</option>
                <option value="103">Books</option>
            </select>
            </label>

            <div id='default'>
                {/* DVD item details */}
                <div id='dvd' style={{display:'none'}}>
                    <div>
                        <label>
                        Size in MB:
                        <input id= 'size' type="text" name="size" onChange={handleChange}/>
                        </label>
                    </div>
                </div> 
                {/* Funiture item details*/}
                <div id='furniture' style={{display:'none' }}>
                <label>
                        Height(cm):
                        <input id= 'height' type="text" name="height" onChange={handleChange}/>
                        </label><label>
                        Width(cm):
                        <input id= 'width' type="text" name="width" onChange={handleChange}/>
                        </label><label>
                        lenght(cm):
                        <input id= 'length' type="text" name="length" onChange={handleChange}/>
                        </label>
                </div> 
                {/* book detail */}
                <div id='book' style={{display:'none'}}>
                <label>
                        Weight(Kg):
                        <input id= 'weight' type="text" name="weight" onChange={handleChange}/>
                        </label>
                </div>
            </div> 
       

            <button name='btn1' type="submit"style={{width:'50px'}}> Save</button>
            

        </form> 
    </div>
  )
}

export default ProductForm