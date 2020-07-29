import React, { useState } from "react";
import "./cups.scss";

import Modal from "../../components/modal/modal";
import ModalChild from "../../components/modal/modalChild/modalChild";

//images
import BlackCup from "../../img/ceramics/cups/IMG_5388.jpg";


const Cups= props=>{
    const [openModal, setOpenModal]= useState(false);

    const toggleModal=()=>{
        setOpenModal(!openModal)
    }
    return(
        <div className="col-xl-7 ceramicsContent">
            <div className="ceramicImage">
                <img src={BlackCup} onClick={()=>toggleModal()}className="cupsImg" alt="Round Light Vase"/>
            </div>
            {openModal &&(
                <Modal >
                    <ModalChild 
                    onClick={()=>toggleModal()}
                    images={[BlackCup]}
                    classes="d-block w-50"
                    title="Porcelain Black Mug"
                    >

                    </ModalChild>
                </Modal>
            )}
        </div>
    )
}
export default Cups;