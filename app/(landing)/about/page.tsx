import React from 'react'
import AboutUs from './_components/about-us'
import ReadMore from './_components/readmore'
import Discovery from './_components/discovery'
import Header from './_components/navbar'
import Footer from './_components/footer'


function Page() {


    return (
        <div>
            <Header/>
            <AboutUs/>
            <ReadMore/>
            <Discovery/>
            <Footer/>
        </div>
    )
}

export default Page
