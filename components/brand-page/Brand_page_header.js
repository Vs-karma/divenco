import Image from 'next/image'
import React from 'react'
import bd from '../../styles/brand.module.css'
function Brand_page_header() {
    return (
        <>
            <div className={bd.brand_header}>
                <div className={bd.card}>
                    <div className={bd.brandcard}>
                        <Image src='/nikelogo.png' layout='fill' alt='logo'/>
                    </div>
                </div>
                <div className={bd.card}>
                    <div className={bd.brandcard}>
                        <Image src='/adidasLogo.png' layout='fill' alt='logo'/>
                    </div>
                </div>
                <div className={bd.card}>
                    <div className={bd.brandcard}>
                        <Image src='/pumaLogo.png' layout='fill' alt='logo'/>
                    </div>
                </div>
                <div className={bd.card}>
                    <div className={bd.brandcard}>
                        <Image src='/ReebokLogo.png' layout='fill' alt='logo'/>
                    </div>
                </div>
                <div className={bd.card} >
                    <div className={bd.brandcard} >
                        <Image src='/skecherLogo.png' layout='fill' alt='logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand_page_header