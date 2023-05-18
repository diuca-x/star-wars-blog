import React from 'react';
import Carrousel_component from './carrousel_component';


const Carousel = () => {
  return (
    <div className="container mt-4">
        <div id="carouselControls" className="carousel slide">
            <div className="carousel-inner">
                <Carrousel_component/>
                <div className="carousel-item">
                    <div className="card">
                        <img src="image2.jpg" className="card-img-top" alt="Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Card 2</h5>
                            <p className="card-text">This is the content of Card 2.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <img src="image3.jpg" className="card-img-top" alt="Image 3" />
                        <div className="card-body">
                            <h5 className="card-title">Card 3</h5>
                            <p className="card-text">This is the content of Card 3.</p>
                        </div>
                    </div>
                </div>
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
  );
};

export default Carousel;