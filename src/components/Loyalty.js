import React from 'react'
import Footer from './All_Pages/Footer'
import Viewer from './All_Pages/Viewer'
import ComingSoon from './Loyalty/ComingSoon'
import HeaderLoyalty from './Loyalty/HeaderLoyalty'

function Loyalty() {
    return (
        <div>
            <HeaderLoyalty />
            <Viewer message="Loyalty Programs" />
            <ComingSoon />
            <Footer />
        </div>
    )
}

export default Loyalty
