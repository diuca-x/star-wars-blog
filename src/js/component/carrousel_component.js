import React from "react";

const Carrousel_component = () => {
    let active = true
    return(
        <>            
            <div className={`carousel-item ${active? "active":""}`}> 
                <div className="card">
                    <img src="image1.jpg" className="card-img-top" alt="Image 1" />
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">This is the content of Card 1.</p>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Carrousel_component