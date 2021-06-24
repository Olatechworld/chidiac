import React, { useState } from 'react'
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import { Button, Modal } from 'react-bootstrap';
import fadel from './fadhel.jpeg'


// Plugins

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)

  };

    return (
       
        <section className="wrapper-header" id="Header"> 
        <Particles className="partcle"
                params={{
                    particles: {
                      number:{
                        value : 30,
                        density:{
                          enable:true,
                          value_area: 200
                        }
                      },
                      shape: {
                        type: "circle",
                        stroke:{
                          width:10,
                          height:6,
                          color:"orange"
                        }
                      }
                    }
                }} />
            <div className="main-header">
               <h4>Cette est toujours en cours de construction</h4> 
               <Typed
               className='tuped-text'
               strings={["Administrateur Sytèmes et Réseaux Junior", "Passionné par domotique"]}
                    typeSpeed={40}
                    backSpeed={60}
                   loop 
               />
               <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <img src={fadel} />
                	</Modal.Body>
               </Modal>
               <Button className="contactermoi" onClick={()=>handleShow()}>Télécharger mon cv ici</Button>
            </div>
        </section>
    )
}

export default  Header;