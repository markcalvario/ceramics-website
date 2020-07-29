import React, {useState} from "react";
import "./bowls.scss";

//components
import Modal from "../modal/modal";
import ModalChild from "../modal/modalChild/modalChild";


//images
import SwirlBowl from "../../img/ceramics/bowls/IMG_5394.jpg";
import BrownBowl from "../../img/ceramics/bowls/IMG_8680.jpg";
import RedDrippingBowl from "../../img/ceramics/bowls/IMG_8725.jpg"

//modal images
import SwirlBowl2 from "../../img/ceramics/bowls/IMG_8783.jpg";
import SwirlBowl3 from "../../img/ceramics/bowls/IMG_8787.jpg";
import BrownBowl2 from "../../img/ceramics/bowls/IMG_8681.jpg";
import BrownBowl3 from "../../img/ceramics/bowls/IMG_8683.jpg";

import RedDrippingBowl2 from "../../img/ceramics/bowls/IMG_8721.jpg"
import RedDrippingBowl3 from "../../img/ceramics/bowls/IMG_8723.jpg"
import RedDrippingBowl4 from "../../img/ceramics/bowls/IMG_8512.jpg"

const Bowls= props=>{
    const [openModal, setOpenModal]= useState(false);
    const [openModal2, setOpenModal2]= useState(false);
    const [openModal3, setOpenModal3]= useState(false);

    const toggleModal=()=>{
        setOpenModal(!openModal)
    }
    const toggleModal2=()=>{
        setOpenModal2(!openModal2)
    }
    const toggleModal3=()=>{
        setOpenModal3(!openModal3)
    }

    return(
        <div className="col-xs-10 col-xl-7 pageScroll ceramicsContent">
            <div>
                <img src={SwirlBowl} onClick={()=> toggleModal()} className="bowlImg" alt="SwirlBowl"/>
            </div>
            <div>
                <img src={BrownBowl} onClick={()=> toggleModal2()} className="bowlImg" alt="BrownBowl"/>
            </div>
            <div>
                <img src={RedDrippingBowl} onClick={()=> toggleModal3()} className="bowlImg" alt="RedDrippingBowl"/>
            </div>

            {openModal && (
                <Modal>
                    <ModalChild
                    onClick={()=>toggleModal()}
                    images={[SwirlBowl2,SwirlBowl,SwirlBowl3]}
                    classes="d-block w-100"
                    title="Swirl Bowl"
                    />
                        
                    
                </Modal>
            )}
            {openModal2 && (
                <Modal>
                    <ModalChild
                    onClick={()=>toggleModal2()}
                    images={[BrownBowl2,BrownBowl3,BrownBowl]}
                    classes="d-block w-100"
                    title="Wide Brown Bowl"/>
                    
                    
                </Modal>
            )}
            {openModal3 && (
                <Modal>
                    <ModalChild
                    onClick={()=>toggleModal3()}
                    images={[RedDrippingBowl, RedDrippingBowl2,RedDrippingBowl3, RedDrippingBowl4]}
                    classes="d-block w-100"
                    title="Red Dripping Bowl"
                    />
                </Modal>
            )}
            
        </div>
    )
}
export default Bowls;