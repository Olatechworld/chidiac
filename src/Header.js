import React, { useState } from 'react'
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import Pdfview from './Pdfview'
import { Button } from 'react-bootstrap';
export const Header = () => {
  const [showpdf, setshowpdf] = useState(false)

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
               {
                showpdf?<div className="containerpopup">
                    <Pdfview />
            </div>:null
            }
               <a className="contactermoi" onClick={()=>setshowpdf(true)}>Télécharger mon cv ici</a>
            </div>
        </section>
    )
}

export default  Header;