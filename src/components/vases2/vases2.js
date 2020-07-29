import React, {useState} from "react";
import "../vases/vases.scss"

//components
import Modal from "../../components/modal/modal";
import ModalChild from "../../components/modal/modalChild/modalChild";

//images
import TallEarthenwareVase from "../../img/ceramics/vases2/IMG_5389.jpg";
import DarkBrownTallVase from "../../img/ceramics/vases2/IMG_8621.jpg";
import LightBlueVase from "../../img/ceramics/vases2/IMG_8663.jpg";
import BrownVase from "../../img/ceramics/vases2/IMG_5395.jpg";
import WideOrangeVase from "../../img/ceramics/vases2/IMG_8533.jpg";

//modal images
import TallEarthenwareVase2 from "../../img/ceramics/vases2/IMG_5390.jpg";
import DarkBrownTallVase2 from "../../img/ceramics/vases2/IMG_8608.jpg";
import DarkBrownTallVase3 from "../../img/ceramics/vases2/IMG_8626.jpg";


const Vases2= props=>{
    const [openModal, setOpenModal]= useState(false);
    const [openModal2, setOpenModal2]= useState(false);
    const [openModal3, setOpenModal3]= useState(false);
    const [openModal4, setOpenModal4]= useState(false);
    const [openModal5, setOpenModal5]= useState(false);
    const [openModal6, setOpenModal6]= useState(false);

    const toggleModal=(event)=>{
        setOpenModal(!openModal)
    }
    const toggleModal2=(event)=>{
        setOpenModal2(!openModal2)
    }
    const toggleModal3=(event)=>{
        setOpenModal3(!openModal3)
    }
    const toggleModal4=(event)=>{
        setOpenModal4(!openModal4)
    }
    const toggleModal5=(event)=>{
        setOpenModal5(!openModal5)
    }
    const toggleModal6=(event)=>{
        setOpenModal6(!openModal6)
    }

    return(
        <div className="col-xl-7 ceramicsContent">
            <div className="col-12">
                <img src={TallEarthenwareVase} onClick={(event)=>toggleModal()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={DarkBrownTallVase} onClick={(event)=>toggleModal2()}  className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={LightBlueVase} onClick={(event)=>toggleModal3()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={BrownVase} onClick={(event)=>toggleModal4()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={WideOrangeVase} onClick={(event)=>toggleModal5()} className="roundLightVase" alt="Round Light Vase"/>
            </div>

            {openModal &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal()} 
                    images={[TallEarthenwareVase, TallEarthenwareVase2]}  
                    classes="d-block w-60"
                    title="Rustic "
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                
                </Modal>
            )}
            {openModal2 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal2()} 
                    images={[DarkBrownTallVase,DarkBrownTallVase2,DarkBrownTallVase3]}  
                    classes="d-block w-60"
                    title="Rustic"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                        
                </Modal>
            )}
            {openModal3 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal3()} 
                    images={[LightBlueVase]}  
                    classes="d-block w-60"
                    title="The Beehive Jar"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                    
                </Modal>
            )}
            {openModal4 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal4()} 
                    images={[BrownVase]}  
                    classes="d-block w-60"
                    title="Rustic "
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                
                </Modal>
            )}
            {openModal5 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal5()} 
                    images={[WideOrangeVase]}  
                    classes="d-block w-100"
                    title="Rustic"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                        
                </Modal>
            )}
            {openModal6 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal6()} 
                    images={[]}  
                    classes="d-block w-60"
                    title="The Beehive Jar"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                    
                </Modal>
            )}
        </div>
    )
}
export default Vases2;