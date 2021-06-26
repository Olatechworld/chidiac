import React from 'react'
import fadhel from './fadhel.jpeg'
const Moi = () => {
    return (
        <section className="wrapper-moi" id="wrapper-moi">
            <h3 className="presentation">Moi</h3>
            <div className="containermoi">
                <div className='moi1'> 
                        <div className='pictures'>
                        <img src={fadhel} alt="Logo" />
                        </div>
                </div>
                <div className='moi1'> 
                    <p>Administrateur systèmes et réseaux junior, je suis titulaire d'une licence en Télécommunications et Réseaux Informatiques. Mon intérêt pour les réseaux informatiques s'est développé dès le lycée et s'est consolidé lors de ma formation. J'en veux pour preuve ma curiosité dès le jeune âge à comprendre la mise en œuvre  d’interconnexion des réseaux, la circulation des informations sur le réseau ainsi que le mécanisme permettant aux machines d'échanger des données entre elles. Ce sont autant d'interrogation qui ont suscité en moi le choix de cette formation afin de devenir expert en la matière. Pour d'éventuelles informations concernant mes compétences veuillez consulter la partie compétences.
</p>
                </div>
                </div>
        </section>
    )
}

export default Moi
