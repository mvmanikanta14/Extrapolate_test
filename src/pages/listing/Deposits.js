import React, { useEffect, useState } from "react";

import Badge from "react-bootstrap/Badge";
import {
  BsChevronDown,
  BsBriefcase,
  BsSpeedometer2,
  BsChevronUp,
} from "react-icons/bs";
import Card from "react-bootstrap/Card";


const Deposits = () => {


  return (
    <section>
    
 
    <div className="container-fluid"> 
  
    <div className="content">
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
                    Deposits 
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

export default Deposits;
