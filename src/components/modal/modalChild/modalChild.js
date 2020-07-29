import React from "react";
import Carousel from 'react-bootstrap/Carousel'


const ModalChild = props =>{
    return (
        <React.Fragment>
            <div className="modal">
                
                    <span className="close" onClick={props.onClick}>&times;</span>
                    <div className="container-fluid centerItems" >
                        <div className="row">
                            <div className="modalContent col-xl-8">
                                <Carousel 
                                prevIcon={<span aria-hidden="false" />}
                                nextIcon={<span aria-hidden="false"/>}>
                                    {props.images.map((image,index)=>{
                                        return(
                                            <Carousel.Item >
                                                <img
                                                className={props.classes}
                                                src={image}
                                                
                                                alt= {`Slide ${index}`}
                                                />
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </div>
                            <div className="col-xl-3">
                                <h3 className="text-center">{props.title}</h3>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    </div>
                
                
            </div>
        </React.Fragment>
        
    )
}

export default ModalChild;