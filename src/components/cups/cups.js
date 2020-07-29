import React from "react";
import "./cups.scss";

//images
import BlackCup from "../../img/ceramics/cups/IMG_5388.jpg";

const Cups= props=>{
    return(
        <div className="col-xl-7 ceramicsContent">
            <div className="ceramicImage">
                <img src={BlackCup} className="cupsImg" alt="Round Light Vase"/>
            </div>
        </div>
    )
}
export default Cups;