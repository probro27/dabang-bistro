import React from 'react'
import Footer from './All_Pages/Footer'
import Viewer from './All_Pages/Viewer'
import FeaturesCatering from './Catering/FeaturesCatering'
import HeaderCatering from './Catering/HeaderCatering'
import Testimonials from './Catering/Testimonials'

function Catering() {
    return (
        <div>
            <HeaderCatering />
            <Viewer message="Catering" />
            <FeaturesCatering />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Catering
