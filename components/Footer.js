import Link from 'next/link'
import React from 'react'
import ft from '../styles/footer.module.css'

function Footer() {
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
                        <p className={ft.content}>
                            <Link href='#'>Mens</Link><br />
                            <Link href='#'>Womens</Link>
                        </p>
                    </div>
                    <div className="brand">
                        <div className={ft.footer_content_header}>
                            Brand
                        </div>
                        <p className={ft.content}>
                            <Link href='#'>Nike</Link><br />
                            <Link href='#'>Adidas</Link><br />
                            <Link href='#'>Puma</Link><br />
                            <Link href='#'>Gucci</Link>
                        </p>
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
                        <div className="exclusive_story">
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
                            <p className={ft.content}>
                                <Link href='#'><i className="fa-brands fa-square-instagram footer_icon"></i></Link>
                                <Link href='#'><i className="fa-brands fa-facebook footer_icon"></i></Link>
                                <Link href='#'><i className="fa-brands fa-twitter footer_icon"></i></Link>
                                <Link href='#'><i className="fa-brands fa-linkedin footer_icon"></i></Link>
                            </p>
                        </div>
                        <div className="mail_us">
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