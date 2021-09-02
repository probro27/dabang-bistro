import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

function HeaderReserve() {
    return (
        <header id = "header" className= "fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto"><img src="http://dabangbistro.com/assets/img/logo.png" className="img-fluid" /></h1>
                <nav className="nav-menu d-none d-lg-block">
                    <ul id="">
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to="/special">Specials</Link></li>
                        <li><Link to="/catering">Catering</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li ><Link to="/loyalty">Loyalty Program</Link></li>
                        <li><Link to="/menu">Menu / Order Online</Link></li>
                        <li className="active"><Link to="/reservation">Reservation</Link></li>
                        <li className=""><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderReserve
