import Image from 'next/image'
import React from 'react'
import hm from '../styles/Home.module.css'

function MensCollectionCard() {
  return (
    <>
        <div className={hm.mens_Collection}>
            <Image src='/menscollection.jpeg' layout='fill'/>
        </div>
    </>
  )
}

export default MensCollectionCard