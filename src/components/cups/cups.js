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
        <div className="col-sm-8 col-md-8 col-xl-7 ceramicsContent">
            <h5 className="mobile-title">Cups</h5>
            <div className="ceramicImage">
                <img src={BlackCup} onClick={()=>toggleModal()}className="cupsImg" alt="Round Light Vase"/>
            </div>
            {openModal &&(
                <Modal >
                    <ModalChild 
                    onClick={()=>toggleModal()}
                    images={[BlackCup]}
                    classes="d-block w-60"
                    title="Porcelain Black Mug"
                    description="hello this is mark and i am currently working on this ceramics website where i can display all my ceramics work to the public and everyone in the web"
                    >

                    </ModalChild>
                </Modal>
            )}
        </div>
    )
}
export default Cups;