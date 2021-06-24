import React from 'react'
import {Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Contactbottom() {
    return (
        <section className="containerbottom">
            <div>
                <FontAwesomeIcon icon={faPhoneAlt} /> 
            </div>
            <div>
                <FontAwesomeIcon icon={faAt}  onClick={()=>alert('toto')}/>
            </div> 
        </section>
    )
}

export default Contactbottom
