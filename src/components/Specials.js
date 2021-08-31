import React from 'react'
import HeaderSpecial from './Special/HeaderSpecial'
import Viewer from './All_Pages/Viewer'
import Gallery from './Special/Gallery'
import Footer from './All_Pages/Footer'


function Specials() {
    return (
        <div>
            <HeaderSpecial />
            <Viewer />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Specials
