import React, { useContext, useState } from 'react';
import Carrousel_component from './carrousel_component';
import { Context } from "../store/appContext";


const Carousel = (props) => {
    const {who,title,carrousel_id} = props
    const { store, actions } = useContext(Context);
      
    
  return (
    <>
        
        <div className="container  mt-5">
            <h1 className='text-start text-danger mt-5 mb-4'>{title}</h1>
            <div id={carrousel_id} className="carousel slide">
                <div className="carousel-inner">
                    {who? who.map((x,index) =>{
                        const show = index === 0                        
                        return <Carrousel_component name = {x.name} img = {x.img} key = {index} show = {show} whole_thing={x}/>
                    })
                     : ""}
                    
                    
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${carrousel_id}`}
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${carrousel_id}`}
                data-bs-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    </>
  );
};

export default Carousel;