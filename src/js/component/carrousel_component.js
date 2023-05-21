import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/carrousel.css";

const Carrousel_component = (props) => {
    const {name,img,whole_thing} = props    
    const { store, actions } = useContext(Context);
    
    
    
    return(
        <>            
            <div className={`col-4`}> 
                <div className="card mx-auto">
                    <img src={img} className="img card-img-top rounded  mx-auto" alt="Image 1" />
                    <div className="card-body">
                        <h5 className="card-title title">{name}</h5>
                        <div className="d-flex justify-content-between">
                        <button className="btn btn-primary " type="submit" > <p className="btn_text mx-auto my-auto">Learn more!</p> </button>
                        <button className="btn btn-warning " type="submit" onClick={actions.fav_agregator(whole_thing)}><i className="far fa-heart btn_text mx-auto my-auto"></i></button>
                        </div>
                    </div> 
                </div>
            </div>
            
            
        </>
    );
}

export default Carrousel_component