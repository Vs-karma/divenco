import Image from 'next/image'
import React from 'react'
import Brand from '../components/brand'
import Collections from '../components/Collections'
import NewWithTime from '../components/NewWithTime'
import hm from '../styles/Home.module.css'
function Home() {
    return (
        <>
            <div className={hm.home}>
                <div className={hm.home_crousel}>
                    <div className={hm.home_img_crousel}>
                        <Image src='/nikeshoed.png' layout='fill' />
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
