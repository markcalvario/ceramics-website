import React, {useState} from "react";
import "./bowls.scss";

//images
import SwirlBowl from "../../img/ceramics/IMG_5394.jpg";
import BrownBowl from "../../img/ceramics/IMG_8680.jpg";
import RedDrippingBowl from "../../img/ceramics/IMG_8725.jpg"



const Bowls= props=>{
    const [openModal, setOpenModal]= useState(false);

    return(
        <div className="col-xs-10 col-xl-7 pageScroll ceramicsContent">
            <div>
                <img src={SwirlBowl} className="bowlImg" alt="SwirlBowl" onClick={e=> setOpenModal(!openModal)}/>
            </div>
            {/* {openModal && (
                <div className="modal" id="modal">
                    <h2>Modal Window</h2>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
                    <div className="actions">
                        <button class="toggle-button">OK</button>
                    </div>
                </div>
            )} */}
            <div>
                <img src={BrownBowl} className="bowlImg" alt="BrownBowl"/>
            </div>
            <div>
                <img src={RedDrippingBowl} className="bowlImg" alt="RedDrippingBowl"/>
            </div>
            
        </div>
    )
}
export default Bowls;