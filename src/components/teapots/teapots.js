import React from "react";
import "./teapots.scss";

//images
import ElephantTeapot from "../../img/ceramics/IMG_8398.jpg";

const Teapots= props=>{
    return(
        <div className="col-xl-8 pageScroll ceramicsContent">
            <div className="col-12">
                <img src={ElephantTeapot} className="teapotImg" alt="ElephantTeapot"/>
            </div>

            
        </div>
    )
}
export default Teapots;