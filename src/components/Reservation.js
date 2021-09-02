import React from 'react'
import Viewer from './All_Pages/Viewer'
import HeaderReserve from './Reservation/HeaderReserve'
import Parallax from './Reservation/Parallax'

function Reservation() {
    return (
        <div>
            <HeaderReserve />
            <Viewer />
            <Parallax />
        </div>
    )
}

export default Reservation
