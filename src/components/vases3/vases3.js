import React,{useState} from "react";

//components
import Modal from "../../components/modal/modal";
import ModalChild from "../../components/modal/modalChild/modalChild";

//images
import BlueFlowerVase from "../../img/ceramics/vases3/IMG_8669.jpg";
import CircleOutlineVase from "../../img/ceramics/vases3/IMG_5393.jpg";
import BlackChadderedVase from "../../img/ceramics/vases3/IMG_5392.jpg";
import WhiteVase from "../../img/ceramics/vases3/IMG_8411.jpg";
import BlueVase from "../../img/ceramics/vases3/IMG_8572.jpg";

//modal images


const Vases3= props=>{
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
            <h5 className="mobile-title">Vases III</h5>
            <div className="col-12">
                <img src={BlueFlowerVase} onClick= {(event)=>toggleModal()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={BlackChadderedVase} onClick= {(event)=>toggleModal2()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={CircleOutlineVase} onClick= {(event)=>toggleModal3()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={WhiteVase} onClick= {(event)=>toggleModal4()} className="roundLightVase" alt="Round Light Vase"/>
            </div>
            <div className="col-12">
                <img src={BlueVase} onClick= {(event)=>toggleModal5()} className="roundLightVase" alt="Round Light Vase"/>
            </div>

            {openModal &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal()} 
                    images={[BlueFlowerVase]}  
                    classes="d-block w-100"
                    title="Rustic "
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                
                </Modal>
            )}
            {openModal2 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal2()} 
                    images={[BlackChadderedVase]}  
                    classes="d-block w-60"
                    title="Rustic"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                        
                </Modal>
            )}
            {openModal3 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal3()} 
                    images={[CircleOutlineVase]}  
                    classes="d-block w-60"
                    title="The Beehive Jar"
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                    
                </Modal>
            )}
            {openModal4 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal4()} 
                    images={[WhiteVase]}  
                    classes="d-block w-60"
                    title="Rustic "
                    description= "hello world this is a description hello world this is a description hello world this is a description"
                    />
                
                </Modal>
            )}
            {openModal5 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal5()} 
                    images={[BlueVase]}  
                    classes="d-block w-60"
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
export default Vases3;