import React from 'react'
import hm from '../../styles/Home.module.css'
import MensCollectionCard from './MensCollectionCard'
import WomensCollectionCard from './WomensCollectionCard'

function Collections() {
    return (
        <>
            <div className="container">
                <h1 className={hm.home_title}>Collections</h1>
                <div className={hm.brand_list}>
                    <MensCollectionCard/>
                    <WomensCollectionCard />
                </div>
            </div>
        </>
    )
}

export default Collections