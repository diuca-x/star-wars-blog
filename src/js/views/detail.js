import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/detail.css";

const Detail = () =>{
    const { store, actions } = useContext(Context);
    
	const params = useParams();
    
    actions.detail_loadinator(params.type,params.id)
    

    if(store.current != null){
        const to_show = store.current
        return(
            <>
               
                <div className="row text-center border mt-5">
                    <div className="col-12 col-lg-6">
                        <img src={to_show.img} className="img rounded" alt="..."/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="title mb-5">{to_show.name}</h1>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum est erat, nec fringilla dolor interdum eu. Aliquam porta nec felis vel dapibus. Donec egestas erat ut congue maximus. Morbi hendrerit nunc nec augue iaculis, ut scelerisque leo vehicula. Praesent tristique dictum sapien, at faucibus purus consequat sit amet. Nullam a ultricies metus. Mauris pretium ipsum at lacus posuere, a ultricies risus tempor. Nullam fermentum felis eget arcu tempor dignissim. Proin venenatis lacinia lorem, vitae iaculis nulla finibus in. Nullam ullamcorper, orci maximus varius sollicitudin, turpis libero rhoncus leo, eu viverra neque orci et metus. Nulla metus odio, dignissim posuere.
                        </p>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-12 col-md-4 col-lg-2">
                        
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
    
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
    
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
    
                    </div>
                </div>
    
            </>
        );
    } else {
        return (
            <>
                <h1> Loading</h1>
            </>
        )
    }
    
}

export default Detail