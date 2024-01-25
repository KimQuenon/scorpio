import Link from "next/link";
import "./footer.css";
import { playfair } from "@/src/app/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return (
        <>
            <footer>
                <div className="footer_container">
                    <div className="footer_content">
                        <div className="footer_input">
                            <h1 className={playfair.className}>OUR NEWSLETTER</h1>
                            <div className="footer_input_container">
                                <input type="email" name="email" id="email" placeholder="Your email..." />
                                <button type="submit" className="btn brown sub">SUBSCRIBE</button>
                            </div>
                        </div>
                        <div className="footer_first">
                            <div className="footer_links">
                                <div className="links">
                                    <p className="bold"><Link href="/">FIND A STORE</Link></p>
                                    <p className="bold"><Link href="/">BECOME A MEMBER</Link></p>
                                    <p className="bold"><Link href="/">FEEDBACK</Link></p>
                                    <p className="bold"><Link href="/">STUDENT DISCOUNTS</Link></p>
                                    <p className="bold"><Link href="/">PROMO CODES</Link></p>
                                    <p className="bold"><Link href="/">GIFT CARDS</Link></p>
                                </div>
                                <div className="links">
                                    <p className="bold"><Link href="/contact">CONTACT</Link></p>
                                    <p><Link href="/">Order status</Link></p>
                                    <p><Link href="/">Shipping & delivery</Link></p>
                                    <p><Link href="/">Returns</Link></p>
                                    <p><Link href="/">Payment options</Link></p>
                                    <p><Link href="/contact">Contact us</Link></p>
                                </div>
                                <div className="links">
                                    <p className="bold"><Link href="/about">ABOUT</Link></p>
                                    <p><Link href="/">News</Link></p>
                                    <p><Link href="/">Careers</Link></p>
                                    <p><Link href="/">Investors</Link></p>
                                    <p><Link href="/">Substainbility</Link></p>
                                </div>
                                <div className="links">
                                    <p className="bold"><Link href="/">TERMS & CONDITIONS</Link></p>
                                    <p><Link href="/">Terms of use</Link></p>
                                    <p><Link href="/">Terms of sales</Link></p>
                                    <p><Link href="/">Privacy & cookies</Link></p>
                                    <p><Link href="/">Cookies settings</Link></p>
                                </div>
                            </div>
                            <div className="footer_social_media">
                                <div className="sm">
                                    <FontAwesomeIcon icon={faFacebook} color="white" />
                                    <FontAwesomeIcon icon={faTwitter} color="white"/>
                                    <FontAwesomeIcon icon={faInstagram} color="white"/>
                                    <FontAwesomeIcon icon={faTiktok} color="white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_second">
                        <div className="footer_nav">
                            <Link href="/">HOME </Link>|
                            <Link href="/about"> ABOUT </Link>|
                            <Link href="/store"> STORE </Link>|
                            <Link href="/contact"> CONTACT</Link>
                        </div>
                        <div className="footer_copyright">&copy; KIMBERLEY QUENON - Copyright 2024</div>
                    </div>
                </div>
            </footer>
        </>
    )
}