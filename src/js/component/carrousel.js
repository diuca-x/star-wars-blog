import React, { useContext } from 'react';
import Carrousel_component from './carrousel_component';
import { Context } from "../store/appContext";

const Carousel = (props) => {
    const {people} = props
    const { store, actions } = useContext(Context);
    let active = true    
  return (
    <>

        <div className="container mt-5">
            <h1 className='text-start mt-5 mb-4'>Characters</h1>
            <div id="carouselControls" className="carousel slide">
                <div className="carousel-inner">
                    {store.people.map(x => {
                        <Carrousel_component name={x.name} img = {x.img} active = {active}/>
                    })}
                    
                    
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselControls"
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselControls"
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