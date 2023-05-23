import React from "react";  

const Data_plan = (props) =>{
    const {to_show} = props
    return(
        <>
                <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Name </p>
                        <p className="detail-text text-danger"> {to_show.name} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Climate </p>
                        <p className="detail-text text-danger"> {to_show.climate} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Created </p>
                        <p className="detail-text text-danger"> {to_show.created} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Gravity </p>
                        <p className="detail-text text-danger"> {to_show.gravity} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Population </p>
                        <p className="detail-text text-danger"> {to_show.population} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Terrain </p>
                        <p className="detail-text text-danger"> {to_show.terrain} </p>
                    
                </div>
        </>
    )
}

export default Data_plan