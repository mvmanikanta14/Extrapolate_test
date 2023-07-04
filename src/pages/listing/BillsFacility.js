import React from "react";

import Card from "react-bootstrap/Card";
import {
    BsChevronDown,
    BsBriefcase,
    BsSpeedometer2,
    BsChevronUp,
  } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";





const BillsFacility = () => {
 
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
                    Bills Facility
                    </Card.Title>
                    <p className="cards-count">
                    
                      
                      <Badge bg="warning-transpernt" className="float-right">
                        {" "}
                       
                      </Badge>{" "}
                    </p>
                    <span> comming soon..!! </span>
                  </div>
                </Card.Body>
              </Card>
            </div>      
          </div> 
        </div>
      </section>
  );
};

export default BillsFacility;
