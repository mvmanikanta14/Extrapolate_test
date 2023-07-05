import React,{useState} from "react";

import Card from "react-bootstrap/Card";
import {
    BsChevronDown,
    BsBriefcase,
    BsSpeedometer2,
    BsChevronUp,
  } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

import Popup from 'reactjs-popup';
import { useModal } from 'react-hooks-use-modal';



const LoanProducts = () => {
 
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  

  
 
  return (
      <section>
   
           
        <div className="container-fluid"> 
      
            <div className="content">
              <div>
                <p> {isOpen ? '' : ''}</p>
                <button onClick={open} className="border-0">Add</button>
                <div className="modal-dialog modal-custom-mx">
                  <Modal>
                    <Card style={{ width: '300px', height: '300px' }}>
                      <Card.Body>

                        <Card.Title className="row mb-0">
                          <h5 className="col-md-6"> Add Loan Products </h5>
                          {/* <button className="col-md-2 float-right" onClick={close}>x</button> */}
                          <div className="col-md-6 ">
                          <button className="float-right cardbutton" onClick={close}>x</button>
                          </div>
                        </Card.Title>
                        <label className=""> User Name</label>
                        <input type="text" value="" /><br/>
                        <label className="" > password </label>
                        <input type="password" className="mt-0"/><br/><br/>
                        <input type="Submit" className="cardbutton"/>
                      </Card.Body>
                    </Card>
                  </Modal>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12">
                <Card>
                  <Card.Body>
                    <div className="cat-icon">
                      {" "}
                      <span className="bg-1">
                        {" "}
                        <BsBriefcase />
                      </span>{" "}
                    </div>
                    <div className="card-details">
                      <Card.Title className="text-truncate">
                      LoanProducts
                      </Card.Title>
                      <p className="cards-count">
                      
                        
                        <Badge bg="warning-transpernt" className="float-right">
                          {" "}
                        
                        </Badge>{" "}
                      </p>
                      <span> Coming Soon </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>  
                
            </div> 
        </div>
        
        
      </section>
  );
};

export default LoanProducts;
