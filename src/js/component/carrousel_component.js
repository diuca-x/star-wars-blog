import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/carrousel.css";

const Carrousel_component = (props) => {
    const {name,img,show} = props    
    const { store, actions } = useContext(Context);
    let active = show? "active" :""
    
    
    return(
        <>            
            <div className={`carousel-item ${active}`}> 
                <div className="card mx-auto">
                    <img src={img} className="img card-img-top rounded  mx-auto" alt="Image 1" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="d-flex justify-content-between">
                        <button className="btn btn-primary " type="submit">Learn more!</button>
                        <button className="btn btn-warning " type="submit"><i className="far fa-heart"></i></button>
                        </div>
                    </div> 
                </div>
            </div>
            
            
        </>
    );
}

export default Carrousel_component