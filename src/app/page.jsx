import { playfair } from "./fonts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

export default function HomePage() {
    return (
       <>
        <div className="slide" id="homepage">
            <div className="container">
                <div className="home_content">
                    <div className="home_title"></div>
                    <div className="home_text">
                        <div className="home_intro">
                            <h1 className={playfair.className}>&quot;In the dance of light and precious metals,</h1>
                            <h1 className={playfair.className}>find the rhythm of sophistication.&quot;</h1>
                            <hr></hr>
                            <p>Step into a world of timeless elegance at our boutique. Discover handcrafted treasures that redefine sophistication and elevate your style with every piece.</p>
                        </div>
                        <div className="home_btn">
                            <button className="btn white"><Link href="/store">BROWSE OUR SHOP &gt;</Link></button>
                            <button className="btn transparent"><Link href="/about">ABOUT US &gt;</Link></button>
                        </div>
                    </div>
                </div>
                <div className="social_media">
                    <div className="social_media_box">
                        <FontAwesomeIcon icon={faFacebook} color="white" />
                        <FontAwesomeIcon icon={faTwitter} color="white"/>
                        <FontAwesomeIcon icon={faInstagram} color="white"/>
                        <FontAwesomeIcon icon={faTiktok} color="white"/>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}