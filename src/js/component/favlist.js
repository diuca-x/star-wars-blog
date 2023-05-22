import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favlist = () =>{
    const { store, actions } = useContext(Context);
   
    
    if (Array.isArray(store.favorites) && store.favorites.length){
        return(
            <>
                {store.favorites.map((x,index) => {
                    return(
                    <li className="text-center justify-content-center d-flex my-1" key= {index}>
                        <p className="dropdown-item mx-1 align-middle">{x.name}</p>
                        <button type="button" className="dropdown-item btn btn-outline-secondary mx-1 align-middle" onClick={() =>{actions.fav_deletinator(x)}}><i className="fas fa-trash"></i></button>
                    </li>)
                    
                })}
            </>
        )
    } else {
        return "empty"
    }
    
}

export default Favlist