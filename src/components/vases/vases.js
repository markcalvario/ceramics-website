import React,{useState} from "react";
import "./vases.scss";

//components
import Modal from "../../components/modal/modal";
import ModalChild from "../../components/modal/modalChild/modalChild";

//images
import RoundLightVase from "../../img/ceramics/vases/IMG_8386.jpg";
import ChatteredRedVase from "../../img/ceramics/vases/IMG_8700.jpg";
import RedFireVase from "../../img/ceramics/vases/IMG_8546.jpg";
import TallEarthenwareVase from "../../img/ceramics/vases/IMG_8448.jpg";
import LightGreenVase from "../../img/ceramics/vases/IMG_5399.jpg";
import RedTwistedVase from "../../img/ceramics/vases/IMG_8471.jpg";

//modal images
import RedFireVase2 from "../../img/ceramics/vases/IMG_8550.jpg";
import TallEarthenwareVase2 from "../../img/ceramics/vases/IMG_8457.jpg";
import RedTwistedVase2 from "../../img/ceramics/vases/IMG_8476.jpg";
import RedTwistedVase3 from "../../img/ceramics/vases/IMG_8479.jpg";

const Vases= props=>{
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
            <h5 className="mobile-title">Vases I</h5>
            <div className="col-12">
                <img src={RoundLightVase} onClick={(event)=>toggleModal()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={ChatteredRedVase} onClick={(event)=>toggleModal2()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={RedFireVase} onClick={(event)=>toggleModal3()} className="roundLightVase" alt="Red Fire Vase"/>
            </div>
            <div className="col-12">
                <img src={TallEarthenwareVase} onClick={(event)=>toggleModal4()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={LightGreenVase} onClick={(event)=>toggleModal5()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={RedTwistedVase} onClick={(event)=>toggleModal6()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            {openModal &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal()} 
                    images={[RoundLightVase]}  
                    classes="d-block w-60"
                    title="Rustic "
                    description= 
                    {"hello world this is a description hello world this is a description hello world this is a description "}
                    />
                
                </Modal>
            )}
            {openModal2 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal2()} 
                    images={[ChatteredRedVase]}  
                    classes="d-block w-60"
                    title="Rustic"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                        
                </Modal>
            )}
            {openModal3 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal3()} 
                    images={[RedFireVase,RedFireVase2]}  
                    classes="d-block w-60"
                    title="The Beehive Jar"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                    
                </Modal>
            )}
            {openModal4 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal4()} 
                    images={[TallEarthenwareVase,TallEarthenwareVase2]}  
                    classes="d-block w-60"
                    title="Rustic "
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                
                </Modal>
            )}
            {openModal5 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal5()} 
                    images={[LightGreenVase]}  
                    classes="d-block w-60"
                    title="Rustic"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                        
                </Modal>
            )}
            {openModal6 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal6()} 
                    images={[RedTwistedVase, RedTwistedVase2, RedTwistedVase3]}  
                    classes="d-block w-100"
                    title="The Beehive Jar"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                    
                </Modal>
            )}
        </div>
        
    )
}
export default Vases;