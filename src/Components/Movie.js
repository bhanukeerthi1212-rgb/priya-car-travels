import React from "react";


function Movie (props){
    return (
        <div className="movie">
            <figure>
                <img src={props.path}  alt=""/>
                <figcaption>
                    <h2>{props.tittle}</h2>
                    <p>{props.cat}</p>
                </figcaption>
            </figure>
        </div>
    )
}
export default Movie