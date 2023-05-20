import React from "react";

const Carrousel_component = (props) => {
    const {name,img,active} = props    
    return(
        <>            
            <div className={`carousel-item ${active? "active":""}`}> 
                <div className="card">
                    <img src={img} className="card-img-top" alt="Image 1" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is the content of Card 1.</p>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Carrousel_component