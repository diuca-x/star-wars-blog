import React, { useContext, useState } from 'react';
import Carrousel_component from './carrousel_component';
import { Context } from "../store/appContext";



const Carousel = (props) => {
    const {who,title,type} = props
    const { store, actions } = useContext(Context);
      
    
  return (
    <>
        <h1 className=' text-danger mt-5 carrousel_title'>{title}</h1>
        <div className="container-fluid mt-4">           
                <div className="row text-center flex-row flex-nowrap overflow-auto carrousel">
                    {who? who.map((x,index) =>{
                        const show = index === 0                        
                        return <Carrousel_component name = {x.name} img = {x.img} key = {index}  whole_thing={x} type={type}/>
                    })
                     : ""}
                    
                    
                </div>                
            
            
        </div>
    </>
  );
};

export default Carousel;