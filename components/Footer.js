import Link from 'next/link'
import React, { useState } from "react";
import ft from '../styles/footer.module.css'
import { AiFillInstagram, AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin } from "react-icons/ai";

function Footer() {
    const [insta, setInsta] = useState(true);
    const [fb, setFb] = useState(true);
    const [tweet, setTweet] = useState(true);
    const [linkedin, setIinkedin] = useState(true);
    
    return (
        <>
            <div className={ft.footer}>
                <div className={ft.footer_head_name}>
                    DIVENCO
                </div>
                <div className={ft.footer_content}>
                    <div className="category">
                        <div className={ft.footer_content_header}>
                            Category
                        </div>
                        <div className="pt-3 pb-3">
                        <p className={ft.content}>
                            <Link href='#'>Mens</Link><br />
                            <Link href='#'>Womens</Link>
                        </p>
                        </div>
                    </div>
                    <div className="brand">
                        <div className={ft.footer_content_header}>
                            Brand
                        </div>
                        <div className="pt-3 pb-3">
                        <p className={ft.content}>
                            <Link href='#'>Nike</Link><br />
                            <Link href='#'>Adidas</Link><br />
                            <Link href='#'>Puma</Link><br />
                            <Link href='#'>Gucci</Link>
                        </p>
                        </div>
                    </div>
                    <div className="collection_exclusive">
                        <div className="collection">
                            <div className={ft.footer_content_header}>
                                Collection
                            </div>
                            <p className={ft.content}>
                                <Link href='#'>Sneaker</Link> |
                                <Link href='#'> Casual</Link> |
                                <Link href='#'> Formal</Link>
                            </p>
                        </div>
                        <div className="pt-4 pb-4 exclusive_story">
                            <div className={ft.footer_content_header}>
                                Exclusive Story
                            </div>
                            <p className={ft.content}>
                                <Link href='#'>Top Stories</Link>
                            </p>
                        </div>
                    </div>
                    <div className="contact_us">
                        <div className="follow_us">
                            <div className={ft.footer_content_header}>
                                Follow us
                            </div>
                            <div className='flex flex-row space-x-3'>
                            
                                {insta ? <AiFillInstagram size={30} /> : <AiFillInstagram size={30} />}
                                {fb ? <AiFillFacebook size={30} /> : <AiFillFacebook size={30} />}
                                {tweet ? <AiFillTwitterCircle size={30} /> : <AiFillTwitterCircle size={30} />}
                                {linkedin ? <AiFillLinkedin size={30} /> : <AiFillLinkedin size={30} />}
                                
                            
                            </div>
                        </div>
                        <div className="pt-3 mail_us">
                            <div className={ft.footer_content_header}>
                                Mail us
                            </div>
                            <p className={ft.content}>
                                <Link href='#'>Divenco@something.com</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer