import React from "react";  

const Data_veh = (props) =>{
    const {to_show} = props
    return(
        <>
                <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Name </p>
                        <p className="detail-text text-danger"> {to_show.name} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Cargo Capacity  </p>
                        <p className="detail-text text-danger"> {to_show.cargo_capacity} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Cost In Credits </p>
                        <p className="detail-text text-danger"> {to_show.cost_in_credits} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Crew </p>
                        <p className="detail-text text-danger"> {to_show.crew} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Model </p>
                        <p className="detail-text text-danger"> {to_show.model} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Vehicle Class </p>
                        <p className="detail-text text-danger"> {to_show.vehicle_class} </p>
                    
                </div>
        </>
    )
}

export default Data_veh