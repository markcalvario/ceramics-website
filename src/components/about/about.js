import React from "react";
import "./about.scss";

//img
import PictureOfMe from "../../img/IMG_5287.jpg";

const About= props=>{
    return(
        <div className="col-xl-8 ceramicsContent about-content" >
            <h5 className="mobile-title">About</h5>
            <img className="img-of-me" src={PictureOfMe} alt="pic of me"/>
            <div className="about-info"> 
                <p className="description-of-me">First generation Mexican-American ceramic artist from Southern California.<br/>
                    Graduated from Columbia University with a B.S. in computer science.
                    <br/><br/>
                </p>
                <div className="contact-info">
                    <span>Contact me through:</span> <br/>
                    <a href="mailto:ceramicsbymac@gmail.com">Ceramicsbymac[at]gmail.com</a>
                    <a href="https://www.etsy.com/people/markcalvario?ref=hdr_user_menu-profile">Etsy</a>
                    <a href="https://instagram.com/markcalvario">Instagram</a>
                </div>
            </div>
        </div>
    )
}
export default About;