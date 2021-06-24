import {React, useState} from 'react'
import { Card } from 'react-bootstrap';
import {ListGroup } from 'react-bootstrap';
import {Button, Modal, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faPlus} />

/*
const card1 =  <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://img.icons8.com/ios/50/000000/server-windows.png" />
    <Card.Body>
        <Card.Title>Windows Server</Card.Title>
            <Card.Text>
                Dans cette partie vous trouverez toutes les informations concernant mon savoir faire sur Windows Server
            </Card.Text>
        <div className="buttoncenter">
             <Button variant="primary">{element} Informations</Button>
        </div>
    </Card.Body>
</Card>

const card2 =  <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://img.icons8.com/ios/50/000000/linux.png" />
    <Card.Body>
        <Card.Title>Linux</Card.Title>
            <Card.Text>
                Dans cette partie vous trouverez toutes les informations concernant mon savoir faire sur les applications linux
            </Card.Text>
        <div className="buttoncenter">
            <Button variant="primary" mx-auto d-block>{element} Informations</Button>
        </div>
    </Card.Body>
</Card>


const card3 =  <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://img.icons8.com/wired/64/000000/network.png" />
    <Card.Body>
        <Card.Title>Réseau</Card.Title>
            <Card.Text>
                Dans cette partie vous trouverez toutes les informations concernant mon savoir faire sur les réseaux informatique
            </Card.Text>
    <div className="buttoncenter">
        <Button variant="primary">{element} Informations</Button>
    </div>
    </Card.Body>
</Card>
*/

function Competences() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       
        <section id="competences">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
            <h3 className="presentation">Mes Compétences</h3>  
            <div className="containercompetences">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.icons8.com/ios/50/000000/server-windows.png" />
                    <Card.Body>
                        <Card.Title>Windows Server</Card.Title>
                            <Card.Text>
                                Dans cette partie vous trouverez toutes les informations concernant mon savoir faire sur Windows Server
                            </Card.Text>
                        <div className="buttoncenter">
                            <Button variant="primary" onClick={()=>handleShow(true)}>{element} Informations</Button>
                        </div>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.icons8.com/ios/50/000000/linux.png" />
                    <Card.Body>
                        <Card.Title>Linux</Card.Title>
                            <Card.Text>
                                Dans cette partie vous trouverez toutes les informations concernant mon savoir faire sur les applications linux
                            </Card.Text>
                        <div className="buttoncenter">
                            <Button variant="primary" onClick={()=>handleShow(true)}>{element}  Informations</Button>
                        </div>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.icons8.com/wired/64/000000/network.png" />
                    <Card.Body>
                        <Card.Title>Réseau</Card.Title>
                            <Card.Text>
                                Dans cette partie vous trouverez toutes les informations concernant mon savoir faire sur les réseaux informatique
                            </Card.Text>
                    <div className="buttoncenter">
                        <Button variant="primary" onClick={()=>handleShow(true)}>{element} Informations</Button>
                    </div>
                </Card.Body>
        </Card>
            </div>
        </section>
    )
}

export default Competences
