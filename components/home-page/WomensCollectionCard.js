import Image from 'next/image'
import React from 'react'
import hm from '../../styles/Home.module.css'

function WomensCollectionCard() {
  return (
    <>
        <div className={hm.women_Collection}>
            <Image src='/womensCollection.jpeg' layout='fill' alt='women shoe collection'/>
        </div>
    </>
  )
}

export default WomensCollectionCard