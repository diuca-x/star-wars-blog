import React from "react";  

const Data_char = (props) =>{
    const {to_show} = props
    return(
        <>
                <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Name </p>
                        <p className="detail-text text-danger"> {to_show.name} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Birth year </p>
                        <p className="detail-text text-danger"> {to_show.birth_year} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Gender </p>
                        <p className="detail-text text-danger"> {to_show.gender} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Height </p>
                        <p className="detail-text text-danger"> {to_show.height} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Skin Color </p>
                        <p className="detail-text text-danger"> {to_show.skin_color} </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <p className="detail-text text-danger fw-bold"> Eye Color </p>
                        <p className="detail-text text-danger"> {to_show.eye_color} </p>
                    
                </div>
        </>
    )
}

export default Data_char