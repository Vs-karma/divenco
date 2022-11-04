import Image from 'next/image'
import React from 'react'
import bd from '../styles/brand.module.css'

function Top_Picks() {
    return (
        <>
            <div className="container">
                <div className={bd.top_picks}>
                    Top Picks
                </div>
                <div className="brand_image_container">
                    <div className={bd.upper_brand_image}>
                        <div className={bd.upper_brand_image_one}>
                            <Image src='/collage6.jpg' layout='fill' />
                        </div>
                        <div className={bd.upper_brand_image_two}>
                            <Image src='/collage3.jpg' layout='fill' />
                        </div>
                        <div className={bd.upper_brand_image_three}>
                            <div className={bd.upper_brand_image_three_01}>
                                <Image src='/collage8.webp' layout='fill' />
                            </div>
                            <div className={bd.upper_brand_image_three_01}>
                                <Image src='/collage5.webp' layout='fill' />
                            </div>
                        </div>
                    </div>
                    <div className={bd.lower_brand_image}>
                        <div className={bd.lower_brand_image_one}>
                            <Image src='/collage4.jpg' layout='fill' />
                        </div>
                        <div className={bd.lower_brand_image_two}>
                            <div className={bd.lower_brand_image_two_top}>
                                <Image src='/collage10.jpg' layout='fill' />
                            </div>
                            <div className={bd.lower_brand_image_two_bottom}>
                                <div className={bd.lower_brand_image_two_bottom_img}>
                                    <Image src='/collage7.webp' layout='fill' />
                                </div>
                                <div className={bd.lower_brand_image_two_bottom_img}>
                                    <Image src='/collage9.webp' layout='fill' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top_Picks