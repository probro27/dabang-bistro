import React from 'react'
import Footer from './All_Pages/Footer'
import Viewer from './All_Pages/Viewer'
import ContactUs from './Contact/ContactUs'
import HeaderContact from './Contact/HeaderContact'
import Map from './Contact/Map'

function Contact() {
    return (
        <div>
            <HeaderContact />
            <Viewer message="Contact Us"/>
            <Map />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Contact
