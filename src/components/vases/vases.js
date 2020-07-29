import React from "react";
import "./vases.scss";

//images
import RoundLightVase from "../../img/ceramics/vases/IMG_8386.jpg";
import ChatteredRedVase from "../../img/ceramics/vases/IMG_8700.jpg";
import RedFireVase from "../../img/ceramics/vases/IMG_8546.jpg";
import TallEarthenwareVase from "../../img/ceramics/vases/IMG_8448.jpg";

const Vases= props=>{
    return(
        <div className="col-xl-7 ceramicsContent">
            <div className="col-12">
                <img src={RoundLightVase} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={ChatteredRedVase} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={RedFireVase} className="roundLightVase" alt="Red Fire Vase"/>
            </div>
            <div className="col-12">
                <img src={TallEarthenwareVase} className="roundLightVase" alt="Round Light Vase"/>
            </div>
        </div>
    )
}
export default Vases;