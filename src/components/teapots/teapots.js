import React, {useState} from "react";
import "./teapots.scss";

//components
import Modal from "../../components/modal/modal";
import ModalChild from "../../components/modal/modalChild/modalChild";

//images
import ElephantTeapot from "../../img/ceramics/teapots/IMG_8398.jpg";

const Teapots= props=>{
    const [openModal, setOpenModal]= useState(false);

    const toggleModal=()=>{
        setOpenModal(!openModal)
    }
    return(
        <div className="col-xl-8 pageScroll ceramicsContent">
            <h5 className="mobile-title">Teapots</h5>
            <div className="col-12">
                <img src={ElephantTeapot} onClick={()=>toggleModal()} className="teapotImg" alt="ElephantTeapot"/>
            </div>
            {openModal &&(
                <Modal >
                    <ModalChild 
                    onClick={()=>toggleModal()}
                    images={[ElephantTeapot]}
                    classes="d-block w-100"
                    title="Elephant Teapot"
                    >

                    </ModalChild>
                </Modal>
            )}
        </div>
    )
}
export default Teapots;