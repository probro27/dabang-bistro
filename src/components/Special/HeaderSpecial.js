import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header id = "header" className= "fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto"><img src="http://dabangbistro.com/assets/img/logo.png" className="img-fluid" /></h1>
                <nav className="nav-menu d-none d-lg-block">
                    <ul id="">
                        <li><Link to="/">Home</Link></li>
                        <li className="active"><Link to="/special">Specials</Link></li>
                        <li><a href="catering.html">Catering</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="loyalty_program.html">Loyalty Program</a></li>
                        <li><a href="menu-spacial.html">Menu / Order Online</a></li>
                        <li><a href="reservation.html">Reservation</a></li>
                        <li className=""><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
