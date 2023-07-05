import React, { useState } from "react";




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

import { useEffect} from 'react';

import axios from 'axios';






const BasicDetails = () => {




  const [Modal, open, close, isOpen] = useModal('root', {

    preventScroll: true,

    closeOnOverlayClick: false

  });

  const [data, setdata] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8000/Exampleopp')

      .then(res => {

        setdata(res.data)

      })

      .catch(err => {

        console.log(err);

      })

  })





  const [id, setId] = useState('');

  const [Name, setName] = useState('');

  const [Password, setPassword] = useState('');

  const submitHandler = (e) => {

    e.preventDefault();

    axios

      .post('http://localhost:8000/Exampleopp', { id, Name, Password })

      .then(() => {

        console.log('Data inserted successfully...');

        setId('');

        setPassword('');

      })

      .catch((err) => {

        console.log(err);

      });

  };








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

                      <h1 className="col-md-6">Title</h1>

                      {/* <button className="col-md-2 float-right" onClick={close}>x</button> */}

                      <div className="col-md-6 ">

                        <button className="float-right cardbutton" onClick={close}>x</button>

                      </div>

                    </Card.Title>

                    <form onSubmit={submitHandler}>

                      <label>User name</label>

                      <input type="text" name="name" value={Name} autoComplete='off' required onChange={(e) => setName(e.target.value)} /><br />

                      <label>Enter Password</label>

                      <input type="text" name="email" value={Password} autoComplete="off" required onChange={(e) => setPassword(e.target.value)} /><br /><br />

                      <button className='cardbutton'  >submit</button>

                    </form>

                  </Card.Body>

                </Card>

              </Modal>

            </div>

          </div>

          <div className="col-md-4 col-lg-4 col-sm-12">

            <Card style={{width:"400px"}}>

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

                    Active

                  </Card.Title>

                  <p className="cards-count">





                    <Badge bg="warning-transpernt" className="float-right">

                      {" "}




                    </Badge>{" "}

                  </p>

                  <span> Projects this month </span>

                </div>

                <br/>

                 

                  <div className="ml-5">




                  {data.map((data) => {

                                return (

                                    <div className="d-flex">

                                      <p  className="mb-0" style={{width:"150px"}}><label className="text-dark" key={data.id}>User Name&nbsp;:&nbsp;&nbsp;{data.Name} &nbsp;&nbsp;</label></p>

                                      <p className="text-danger">Edit & Delete</p>

                                      </div>

                                )})}

                  </div>

              </Card.Body>

            </Card>

          </div>

          {/* <br/>

          <br/>

          <br/>

          <GetData />*/}

        </div>

      </div>





    </section>

  );

};




export default BasicDetails;