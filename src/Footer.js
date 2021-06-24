import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { falinked} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="monfooter">
            <h3 className="titlefooter">Chidiac</h3>
            <div className='containerfooter'>
                <div >Linkedin</div>
                <div >Instagram</div>
                <div >Github</div>
            </div>
            <h4 className="titlefooter">© 2020 copyright all right reserved</h4>
        </footer>
    )
}

export default Footer
