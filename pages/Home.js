import Image from 'next/image'
import React from 'react'
import Brand from '../components/home-page/brand'
import Collections from '../components/home-page/Collections'
import NewWithTime from '../components/home-page/NewWithTime'
import hm from '../styles/Home.module.css'
function Home() {
    return (
        <>
            <div className={hm.home}>
                <div className={hm.home_crousel}>
                    <div className={hm.home_img_crousel}>
                        <Image src='/nikeshoed.png' layout='fill' alt='nikeShoe'/>
                    </div>
                    <div className={hm.crousel_heading}>
                        Nike
                    </div>
                </div>
                <Brand/>
                <NewWithTime/>
                <Collections/>
            </div>
        </>
    )
}

export default Home
