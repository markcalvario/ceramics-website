import React, {useState} from "react";
import "./liddedJars.scss";

//components
import Modal from "../../components/modal/modal";
import ModalChild from "../../components/modal/modalChild/modalChild";

//images
import OrangeLiddedJar from "../../img/ceramics/lidded-jars/IMG_8406.jpg";
import ArmyGreenLiddedJar from "../../img/ceramics/lidded-jars/IMG_8430.jpg";
import HoneycombLiddedJar from "../../img/ceramics/lidded-jars/IMG_8374.jpg";


//
import OpenOrangeLJ from "../../img/ceramics/lidded-jars/IMG_8640.jpg"
// import OpenArmyGreenJar from "../../img/ceramics/lidded-jars/IMG_8437.jpg";
// import OpenArmyGreenJar from "../../img/ceramics/lidded-jars/IMG_8436.jpg";
import ArmyGreenLiddedJar2 from "../../img/ceramics/lidded-jars/IMG_8433.jpg"

const LiddedJars= props=>{
    const [openModal, setOpenModal]= useState(false);
    const [openModal2, setOpenModal2]= useState(false);

    const toggleModalState=(event)=>{
        setOpenModal(!openModal)
    }
    const toggleModal2=(event)=>{
        setOpenModal2(!openModal2)
    }

    return(
        <div className="col-xl-7 ceramicsContent">
            <div className="col-12">
                <img src={OrangeLiddedJar} onClick= {(event)=>toggleModalState()} className="lidded-jars" alt="Orange Lidded Jar"/>
            </div>
            <div className="col-12">
                <img src={ArmyGreenLiddedJar} onClick= {(event)=>toggleModal2()} className="lidded-jars" alt="Army Green Lidded Jar"/>
            </div>
            <div className="col-12">
                <img src={HoneycombLiddedJar} className="lidded-jars" alt="Honeycomb Lidded Jar"/>
            </div>
            {openModal &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModalState()} 
                    images={[OrangeLiddedJar, OpenOrangeLJ]}  
                    classes="d-block w-100"
                    title="Rustic "
                    description= "fadhslkfadsfhkadslfjasdklfhajkdsl.fhjadsokflas"
                    >
                    
                    </ModalChild>
                </Modal>
            )}
            {openModal2 &&(
                <Modal>
                    <ModalChild onClick={(event)=>toggleModal2()} 
                    images={[OrangeLiddedJar, ArmyGreenLiddedJar2]}  
                    classes="d-block w-100"
                    title="Rustic">
                    </ModalChild>
                </Modal>
            )}
        </div>
    )
}
export default LiddedJars;