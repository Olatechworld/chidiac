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
                    <p>Je m'appelle KEGNIDE Fadhel, Je suis de nationalité Béninoise. Je suis titulaire d'une licence en Licence en Informatique appliquée à la gestion de l'entreprise. Depuis mon plus tout petit j'ai eu cette passion d'abord pour l'électronique. Ce qui m'a permis à travers une autoformation en électricité de pouvoir travailler dans l'électricité bâtiment au cours des constructions des bâtiments. Plus tard, j'ai découvert l'informatique grâce à l’apparition des téléphones connectés à internet dans les années 2007-2008. Beaucoup de personnes me sollicitaient pour la configuration de leurs téléphones. Après Mon Bac, j'ai décidé de choisir une filière alliant l'informatique et l'électricité. Au cours de ce Dut j'ai l'opportunité de développer des applications web. Ce fût des moments inoubliable car il fallait travailler en équipe avec les autres camarades ou chacun y apportait du sien. Une fois le DUT terminé, je me suis orienté dans une spécialité informatique ou j’ai obtenue une licence. Aujourd’hui, je suis développeur informatique junior qui cherche au quotidien à améliorer son niveau. Mon rêve est d’être compté parmi les innovateurs dans le domaine du numérique.
Fadhel KEGNIDE
</p>
                </div>
                </div>
        </section>
    )
}

export default Moi
