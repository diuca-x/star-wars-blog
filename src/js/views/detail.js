import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Data_char from "../component/data_char";
import Data_plan from "../component/data_plan";
import Data_veh from "../component/data_veh";
import "../../styles/detail.css";

const Detail = () =>{
    const { store, actions } = useContext(Context);
    
	const params = useParams();
    
    useEffect(()=>{
        actions.detail_loadinator(params.type,params.id)
    },[])
    
    

    if(store.current != null){
        const to_show = store.current
        return(
            <>
               
                <div className="row text-center justify-content-center  mt-5 d-flex">
                    <div className="col-12 col-lg-6 detail-img-container ">
                        <img src={to_show.img} className="detail-img rounded mx-auto" alt="..."/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="detail-title mb-5">{to_show.name}</h1>
                        <p className="detail-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum est erat, nec fringilla dolor interdum eu. Aliquam porta nec felis vel dapibus. Donec egestas erat ut congue maximus. Morbi hendrerit nunc nec augue iaculis, ut scelerisque leo vehicula. Praesent tristique dictum sapien, at faucibus purus consequat sit amet. Nullam a ultricies metus. Mauris pretium ipsum at lacus posuere, a ultricies risus tempor. Nullam fermentum felis eget arcu tempor dignissim. Proin venenatis lacinia lorem, vitae iaculis nulla finibus in. Nullam ullamcorper, orci maximus varius sollicitudin, turpis libero rhoncus leo, eu viverra neque orci et metus. Nulla metus odio, dignissim posuere.
                        </p>
                    </div>
                </div>
                <div className="row text-center mt-5 mb-4 border-top border-danger">
                    {params.type == "people"? <Data_char to_show={to_show} /> : ""}
                    {params.type == "planets"? <Data_plan to_show={to_show} /> : ""}
                    {params.type == "vehicles"? <Data_veh to_show={to_show} /> : ""}
                </div>
    
            </>// no se me ocurrio otra forma mas que con 3 componentes, no veo que compartan nada como para estandrizarlo en una sola funcion
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