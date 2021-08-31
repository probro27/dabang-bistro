import React from 'react'
import Footer from './All_Pages/Footer'
import Viewer from './All_Pages/Viewer'
import HeaderGallery from './GalleryPage/HeaderGallery'
import PicsVids from './GalleryPage/PicsVids'

function GalleryPage() {
    return (
        <div>
            <HeaderGallery />
            <Viewer />
            <PicsVids />
            <Footer />
        </div>
    )
}

export default GalleryPage
