import React from 'react'
import Footer from './All_Pages/Footer'
import Viewer from './All_Pages/Viewer'
import BookTable from './Reservation/BookTable'
import HeaderReserve from './Reservation/HeaderReserve'
import Parallax from './Reservation/Parallax'

function Reservation() {
    return (
        <div>
            <HeaderReserve />
            <Viewer message="Reservation" />
            <Parallax />
            <BookTable />
            <Footer />
        </div>
    )
}

export default Reservation
