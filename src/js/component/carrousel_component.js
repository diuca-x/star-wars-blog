import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/carrousel.css";
import { Link } from "react-router-dom";

const Carrousel_component = (props) => {
    const {name,img,whole_thing,type} = props    
    const { store, actions } = useContext(Context);
    
    
    
    return(
        <>            
            <div className={`col-4 mx-5`}> 
                <div className="card mx-auto">
                    <img src={img} className="img card-img-top rounded  mx-auto" alt="Image 1" />
                    <div className="card-body">
                        <h5 className="card-title title">{name}</h5>
                        <div className="d-flex justify-content-between">
                        <Link to={`/detail/${type}/${whole_thing.uid}`}>
                            <button className="btn btn-primary " type="submit" > <p className="btn_text mx-auto my-auto">Learn more!</p> </button>
                        </Link>
                        
                        <button className="btn btn-warning " type="submit" onClick={()=> {
                            actions.fav_agregator(whole_thing)}}><i className="far fa-heart btn_text mx-auto my-auto"></i></button>
                        </div>
                    </div> 
                </div>
            </div>
            
            
        </>
    );
}

export default Carrousel_component